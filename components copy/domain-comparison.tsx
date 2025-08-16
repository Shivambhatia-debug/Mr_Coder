import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, ShoppingCart, Briefcase, Palette, Megaphone } from "lucide-react"
import Link from "next/link"

export function DomainComparison() {
  const domains = [
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Online stores with powerful features",
      features: [
        "Product catalog management",
        "Secure payment processing",
        "Inventory tracking",
        "Customer accounts",
        "Order management",
        "Shipping integration",
      ],
      image: "/placeholder.svg?height=200&width=300",
      color: "from-pink-600 to-red-600",
    },
    {
      icon: Briefcase,
      title: "Business",
      description: "Professional websites for companies",
      features: [
        "Company profile",
        "Service showcase",
        "Team presentation",
        "Client testimonials",
        "Contact forms",
        "Business hours",
      ],
      image: "/placeholder.svg?height=200&width=300",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: Palette,
      title: "Portfolio",
      description: "Showcase your work and talents",
      features: [
        "Project gallery",
        "Case studies",
        "Resume/CV",
        "Skills showcase",
        "Client list",
        "Downloadable assets",
      ],
      image: "/placeholder.svg?height=200&width=300",
      color: "from-purple-600 to-indigo-600",
    },
    {
      icon: Megaphone,
      title: "Marketing",
      description: "Promote products and services",
      features: [
        "Landing pages",
        "Lead generation forms",
        "A/B testing",
        "Analytics integration",
        "Email marketing",
        "Social media integration",
      ],
      image: "/placeholder.svg?height=200&width=300",
      color: "from-orange-500 to-amber-500",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Solutions For Every Domain</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Whatever your industry or needs, we have the expertise to deliver the perfect website for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {domains.map((domain, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg">
              <div className="h-48 relative overflow-hidden">
                <img
                  src={domain.image || "/placeholder.svg"}
                  alt={domain.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${domain.color} opacity-80`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <domain.icon className="h-12 w-12 mx-auto mb-2" />
                    <h3 className="text-2xl font-bold">{domain.title}</h3>
                    <p>{domain.description}</p>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <ul className="space-y-3 mb-6">
                  {domain.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className={`w-full bg-gradient-to-r ${domain.color} text-white`} asChild>
                  <Link href="/start-project">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
