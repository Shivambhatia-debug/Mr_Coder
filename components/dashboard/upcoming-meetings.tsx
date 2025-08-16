import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Calendar as CalendarIcon } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { CheckCircle } from "lucide-react"

export function UpcomingMeetings() {
  const [date, setDate] = useState<Date | undefined>()
  const [title, setTitle] = useState("")
  const [hour, setHour] = useState("12")
  const [minute, setMinute] = useState("00")
  const [period, setPeriod] = useState("AM")
  const [duration, setDuration] = useState("30")
  const [description, setDescription] = useState("")
  // Modal state
  const [showModal, setShowModal] = useState(false)
  const [scheduledMeeting, setScheduledMeeting] = useState<any>(null)

  // Placeholder for meetings list
  const meetings = []

  function formatTime(hour: string, minute: string, period: string) {
    return `${hour}:${minute} ${period}`
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!title || !date) return
    const meeting = {
      title,
      date,
      time: formatTime(hour, minute, period),
      duration,
      description,
    }
    setScheduledMeeting(meeting)
    setShowModal(true)
    // Optionally, reset form fields here
  }

  function handleCloseModal() {
    setShowModal(false)
  }

  function handleEdit() {
    setShowModal(false)
    // Optionally, set form fields back to scheduledMeeting values
  }

  function handleCancelMeeting() {
    setShowModal(false)
    // Optionally, clear scheduledMeeting or remove from meetings list
  }

  return (
    <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <CalendarIcon className="h-5 w-5" />
          Upcoming Meetings
        </CardTitle>
        <CardDescription>
          Schedule calls and project milestones
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">Meeting Title</label>
            <Input
              type="text"
              placeholder="e.g. Design Review Call"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Date</label>
              <Input
                type="date"
                value={date ? date.toISOString().split('T')[0] : ''}
                onChange={e => setDate(e.target.value ? new Date(e.target.value) : undefined)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Start Time</label>
              <div className="flex gap-2 flex-wrap">
                <Select value={hour} onValueChange={setHour}>
                  <SelectTrigger className="w-16">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 12 }, (_, i) => (
                      <SelectItem key={i+1} value={String(i+1).padStart(2, '0')}>
                        {String(i+1).padStart(2, '0')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span className="self-center">:</span>
                <Select value={minute} onValueChange={setMinute}>
                  <SelectTrigger className="w-16">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 60 }, (_, i) => (
                      <SelectItem key={i} value={String(i).padStart(2, '0')}>
                        {String(i).padStart(2, '0')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={period} onValueChange={setPeriod}>
                  <SelectTrigger className="w-16">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AM">AM</SelectItem>
                    <SelectItem value="PM">PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Duration</label>
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger className="w-28">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="45">45 minutes</SelectItem>
                  <SelectItem value="60">60 minutes</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <Textarea
              placeholder="Discussion on UI updates and API integration"
              value={description}
              onChange={e => setDescription(e.target.value)}
              rows={3}
            />
          </div>
          <Button type="submit" className="w-full mt-2">Schedule Meeting</Button>
        </form>
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Your Upcoming Meetings</h3>
          <div className="text-slate-500 dark:text-slate-400 text-sm">No meetings scheduled yet.</div>
        </div>
        {/* Confirmation Modal */}
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6">
            <DialogHeader>
              <div className="flex flex-col items-center justify-center">
                <CheckCircle className="h-12 w-12 text-green-500 mb-2" />
                <DialogTitle className="text-center text-2xl font-bold">Meeting Scheduled Successfully!</DialogTitle>
                <DialogDescription className="text-center mt-2 mb-4">
                  Your meeting has been scheduled. Details are below.
                </DialogDescription>
              </div>
            </DialogHeader>
            {scheduledMeeting && (
              <div className="bg-slate-50 dark:bg-slate-900/40 rounded-xl p-4 mb-4 shadow">
                <div className="mb-2">
                  <span className="font-semibold">Title:</span> {scheduledMeeting.title}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Date:</span> {scheduledMeeting.date.toLocaleDateString()}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Time:</span> {scheduledMeeting.time}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Duration:</span> {scheduledMeeting.duration === 'custom' ? 'Custom' : `${scheduledMeeting.duration} minutes`}
                </div>
                <div>
                  <span className="font-semibold">Description:</span> {scheduledMeeting.description}
                </div>
              </div>
            )}
            {/* Optionally, show a mini calendar preview here */}
            {/* <div className="mb-4">
              <Calendar selected={scheduledMeeting?.date} />
            </div> */}
            <DialogFooter>
              <Button variant="outline" onClick={handleEdit}>Edit</Button>
              <Button variant="destructive" onClick={handleCancelMeeting}>Cancel</Button>
              <Button onClick={handleCloseModal}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
} 