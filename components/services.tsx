import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Search, Megaphone, Smartphone, ShoppingCart, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

export function Services() {
  const services = [
    {
      icon: Code,
      title: "Custom Web Development",
      description:
        "Tailored websites and web applications built with modern technologies like React, Next.js, and Node.js.",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Mobile First"],
      price: "Starting at $2,999",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your search rankings with comprehensive SEO strategies and technical optimization.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Analytics Setup"],
      price: "Starting at $899/month",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Complete digital marketing solutions including social media, PPC, and content marketing.",
      features: ["Social Media Marketing", "Google Ads", "Content Strategy", "Email Marketing"],
      price: "Starting at $1,299/month",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization"],
      price: "Starting at $4,999",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online store development with payment integration and inventory management.",
      features: ["Shopify/WooCommerce", "Payment Gateway", "Inventory System", "Order Management"],
      price: "Starting at $3,999",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your website and improve user experience with advanced optimization techniques.",
      features: ["Core Web Vitals", "CDN Setup", "Image Optimization", "Caching Strategy"],
      price: "Starting at $599",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Complete Web Solutions</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to launch, we provide end-to-end web development services that help your business grow online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">{service.price}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="group-hover:bg-blue-600 group-hover:text-white transition-colors"
                      asChild
                    >
                      <Link href="/start-project">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
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
