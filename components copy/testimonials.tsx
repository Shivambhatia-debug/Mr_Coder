import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import Image from "next/image"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "Mr Coder's SEO expertise delivered incredible results! Our organic traffic grew by 300% and conversions increased dramatically. The data speaks for itself - see the proven results below.",
      rating: 5,
      hasImage: true,
      imageUrl: "https://fireusmarketing.com/wp-content/uploads/2024/11/Organic-Traffic-Growth-Statistics-2025-Industry-Benchmarks.jpg",
      imageAlt: "Proven SEO Results - Organic Traffic Growth Statistics for TechStart Inc."
    },
    {
      name: "Michael Chen",
      role: "Founder, EcoShop",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "Outstanding work! The e-commerce platform they developed handles thousands of orders seamlessly. Highly recommended!",
      rating: 5,
      hasImage: true,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRRXJh8UiFIMzIzkotm7ytciFMRqXJLS1WMQ&s",
      imageAlt: "Proven SEO Results - E-commerce Store Performance for EcoShop"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "The SEO and digital marketing services boosted our organic traffic by 250%. The team is professional and delivers results.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Owner, Local Bistro",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "From design to launch, everything was perfect. Our new website attracts more customers and bookings have doubled.",
      rating: 5,
    },
    {
      name: "Lisa Wang",
      role: "CTO, FinanceApp",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "Complex web application delivered on time and within budget. The code quality and security measures are top-notch.",
      rating: 5,
    },
    {
      name: "James Miller",
      role: "Director, HealthPlus",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "Exceptional service and support. The team went above and beyond to ensure our healthcare platform met all compliance requirements.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

                {testimonial.hasImage && testimonial.imageUrl && (
                  <div className="mb-6">
                    <Image
                      src={testimonial.imageUrl}
                      alt={testimonial.imageAlt || "Proven Results"}
                      width={400}
                      height={300}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
