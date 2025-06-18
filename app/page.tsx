import { Header } from "@/components/header"
import { HeroEnhanced } from "@/components/hero-enhanced"
import { ServicesAnimated } from "@/components/services-animated"
import { LiveCodeEditor } from "@/components/live-code-editor"
import { RealTimeDashboard } from "@/components/real-time-dashboard"
import { Portfolio3D } from "@/components/portfolio-3d"
import { Stats } from "@/components/stats"
import { TestimonialsTech } from "@/components/testimonials-tech"
import { Pricing } from "@/components/pricing"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { ReviewSystem } from "@/components/review-system"
import { ParticleSystem } from "@/components/particle-system"
import { MatrixRain } from "@/components/matrix-rain"
import { AIChatbot } from "@/components/ai-chatbot"
import { VoiceCommands } from "@/components/voice-commands"

export default function CoderGaliSaaS() {
  return (
    <div className="min-h-screen bg-slate-900 relative">
      <MatrixRain />
      <ParticleSystem />
      <Header />
      <main className="relative z-10">
        <HeroEnhanced />
        <Stats />
        <ServicesAnimated />
        <LiveCodeEditor />
        <RealTimeDashboard />
        <Portfolio3D />
        <TestimonialsTech />
        <Pricing />
        <CTA />
      </main>
      <Footer />
      <ReviewSystem />
      <AIChatbot />
      <VoiceCommands />
    </div>
  )
}
