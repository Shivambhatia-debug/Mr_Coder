import { Button } from "@/components/ui/button"
import { Code2, Home } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="flex items-center gap-2 mb-8">
        <Code2 className="h-10 w-10 text-blue-600" />
        <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Mr Coder
        </span>
      </div>

      <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-600 max-w-md text-center mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <Button
        size="lg"
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        asChild
      >
        <Link href="/">
          <Home className="mr-2 h-5 w-5" />
          Back to Homepage
        </Link>
      </Button>
    </div>
  )
}
