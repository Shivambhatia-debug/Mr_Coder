import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business Online?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful businesses who trust Coder Gali for their web development needs. Get a free
            consultation and quote today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8" asChild>
              <Link href="/start-project">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8"
            >
              <Phone className="mr-2 h-5 w-5" />
              Schedule Call
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div>
              <div className="text-2xl font-bold mb-2">Free Consultation</div>
              <p className="text-blue-100">Discuss your project with our experts</p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Custom Quote</div>
              <p className="text-blue-100">Get pricing tailored to your needs</p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Quick Response</div>
              <p className="text-blue-100">Hear back from us within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
