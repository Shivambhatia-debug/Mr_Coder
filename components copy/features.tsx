import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Shield, Headphones, Globe, Zap, Users, Award, Clock } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Rocket,
      title: "Lightning Fast Delivery",
      description: "Get your project delivered on time with our agile development process.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security measures to protect your data and users.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your website runs smoothly.",
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "Worldwide content delivery for optimal performance everywhere.",
    },
    {
      icon: Zap,
      title: "99.9% Uptime",
      description: "Reliable hosting infrastructure with guaranteed uptime.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced developers, designers, and marketers at your service.",
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "30-day money-back guarantee if you're not completely satisfied.",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Fast project completion without compromising on quality.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Why Choose Coder Gali?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with proven strategies to deliver exceptional results for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
