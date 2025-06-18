import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";

const teamMembers = [
  { name: "Member 1", img: "/placeholder-user.jpg" },
  { name: "Member 2", img: "/placeholder-user.jpg" },
  { name: "Member 3", img: "/placeholder-user.jpg" },
  { name: "Member 4", img: "/placeholder-user.jpg" },
];

const eventPhotos = [
  "/placeholder.jpg",
  "/placeholder.jpg",
  "/placeholder.jpg",
  "/placeholder.jpg",
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-slate-900 py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-white mb-10">Our Team</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
        {teamMembers.map((member, idx) => (
          <Card key={idx} className="flex flex-col items-center p-6 bg-slate-800">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src={member.img} alt={member.name} />
              <AvatarFallback>{member.name[0]}</AvatarFallback>
            </Avatar>
            <span className="text-white font-medium text-lg mt-2">{member.name}</span>
          </Card>
        ))}
      </div>
      <h2 className="text-3xl font-semibold text-center text-white mb-8">Team Events</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {eventPhotos.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <Image src={src} alt={`Event ${idx + 1}`} width={300} height={200} className="object-cover w-full h-40" />
          </div>
        ))}
      </div>
    </div>
  );
} 