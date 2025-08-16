"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Users, CheckCircle2, AlarmClock } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarEvent = {
  date: Date
  type: "meeting" | "review" | "deadline"
  label: string
  details?: string
}

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events?: CalendarEvent[]
}

function getEventColor(type: string) {
  switch (type) {
    case "meeting": return "bg-blue-500";
    case "review": return "bg-green-500";
    case "deadline": return "bg-red-500";
    default: return "bg-gray-400";
  }
}

function getEventIcon(type: string) {
  switch (type) {
    case "meeting": return <Users className="w-3 h-3 mr-1" />;
    case "review": return <CheckCircle2 className="w-3 h-3 mr-1" />;
    case "deadline": return <AlarmClock className="w-3 h-3 mr-1" />;
    default: return <CalendarIcon className="w-3 h-3 mr-1" />;
  }
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  events = [],
  ...props
}: CalendarProps) {
  // Helper to find events for a given date
  function getEventsForDate(date: Date) {
    return events.filter(ev =>
      ev.date.getFullYear() === date.getFullYear() &&
      ev.date.getMonth() === date.getMonth() &&
      ev.date.getDate() === date.getDate()
    )
  }

  // Custom DayContent for event markers and tooltip
  function CustomDayContent({ date }: { date: Date }) {
    const dayEvents = getEventsForDate(date)
    return (
      <div className="flex flex-col items-center justify-start min-h-[36px] pt-1 pb-0.5 relative">
        <span className="font-bold text-base text-slate-800 dark:text-white z-10 mb-0.5">{date.getDate()}</span>
        {dayEvents.length > 0 && (
          <>
            <div className="flex flex-col items-center gap-0.5 w-full max-w-[90px] mt-0.5">
              {dayEvents.map((ev, i) => (
                <span
                  key={i}
                  className={cn(
                    "flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold text-white shadow-md border border-white/30 backdrop-blur-sm",
                    "transition-all duration-200",
                    ev.type === "meeting" && "bg-gradient-to-r from-blue-500 to-cyan-400",
                    ev.type === "review" && "bg-gradient-to-r from-green-500 to-emerald-400",
                    ev.type === "deadline" && "bg-gradient-to-r from-red-500 to-pink-400"
                  )}
                  title={ev.label}
                >
                  {getEventIcon(ev.type)}
                  {ev.label}
                </span>
              ))}
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="absolute inset-0" />
              </TooltipTrigger>
              <TooltipContent side="top" align="center">
                <div className="text-xs font-medium mb-1">{date.toLocaleDateString()}</div>
                {dayEvents.map((ev, i) => (
                  <div key={i} className="flex items-center gap-2 mb-1">
                    <span className={cn("w-2 h-2 rounded-full", getEventColor(ev.type))} />
                    <span className="font-semibold capitalize">{ev.label}</span>
                    {ev.details && <span className="text-muted-foreground">- {ev.details}</span>}
                  </div>
                ))}
              </TooltipContent>
            </Tooltip>
          </>
        )}
      </div>
    )
  }

  return (
    <TooltipProvider>
      <div className="rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 p-4 md:p-10 max-w-full overflow-x-auto backdrop-blur-xl relative"
        style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.85) 60%, rgba(207,233,255,0.5) 100%)" }}
      >
        <DayPicker
          showOutsideDays={showOutsideDays}
          className={cn("p-0 min-w-[320px] md:min-w-[420px] lg:min-w-[520px] font-sans", className)}
          classNames={{
            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center text-lg font-bold text-slate-800 dark:text-white tracking-wide",
            caption_label: "text-base font-semibold",
            nav: "space-x-1 flex items-center",
            nav_button: cn(
              buttonVariants({ variant: "outline" }),
              "h-7 w-7 bg-white/70 dark:bg-slate-800/70 p-0 opacity-70 hover:opacity-100 border border-slate-200 dark:border-slate-700 shadow-sm"
            ),
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell:
              "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem] bg-slate-100/60 dark:bg-slate-800/60",
            row: "flex w-full mt-2",
            cell: "h-14 w-14 text-center text-sm p-0 relative rounded-xl transition-all duration-200 hover:bg-cyan-50 dark:hover:bg-slate-800/60 cursor-pointer group",
            day: cn(
              buttonVariants({ variant: "ghost" }),
              "h-14 w-14 p-0 font-normal aria-selected:opacity-100 rounded-xl"
            ),
            day_range_end: "day-range-end",
            day_selected:
              "bg-cyan-500 text-white hover:bg-cyan-600 focus:bg-cyan-600 focus:text-white",
            day_today: "bg-accent text-accent-foreground border-2 border-cyan-400",
            day_outside:
              "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
            day_disabled: "text-muted-foreground opacity-50",
            day_range_middle:
              "aria-selected:bg-accent aria-selected:text-accent-foreground",
            day_hidden: "invisible",
            ...classNames,
          }}
          components={{
            IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />, 
            IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />, 
            DayContent: CustomDayContent,
          }}
          {...props}
        />
        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-6 justify-center items-center">
          <span className="flex items-center gap-2 text-xs font-medium"><span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center"><Users className="w-2 h-2 text-white" /></span> Meeting</span>
          <span className="flex items-center gap-2 text-xs font-medium"><span className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center"><CheckCircle2 className="w-2 h-2 text-white" /></span> Review</span>
          <span className="flex items-center gap-2 text-xs font-medium"><span className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-pink-400 flex items-center justify-center"><AlarmClock className="w-2 h-2 text-white" /></span> Deadline</span>
        </div>
      </div>
    </TooltipProvider>
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
