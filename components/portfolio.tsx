import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Portfolio() {
  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "business", label: "Business" },
    { id: "portfolio", label: "Portfolio" },
    { id: "marketing", label: "Marketing" },
  ]

  const projects = [
    {
      id: 1,
      title: "TechGear Online Store",
      category: "ecommerce",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["E-commerce", "React", "Node.js"],
    },
    {
      id: 2,
      title: "Financial Advisor Website",
      category: "business",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Business", "WordPress", "SEO"],
    },
    {
      id: 3,
      title: "Photography Portfolio",
      category: "portfolio",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Portfolio", "Next.js", "Animation"],
    },
    {
      id: 4,
      title: "Product Launch Landing Page",
      category: "marketing",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Marketing", "Landing Page", "Conversion"],
    },
    {
      id: 5,
      title: "Restaurant Ordering System",
      category: "ecommerce",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["E-commerce", "Mobile App", "Food"],
    },
    {
      id: 6,
      title: "Law Firm Website",
      category: "business",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Business", "Legal", "Content"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Recent Work</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our portfolio of successful projects across various industries and technologies.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white border">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="px-4 py-2">
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => category.id === "all" || project.category === category.id)
                  .map((project) => (
                    <Card key={project.id} className="overflow-hidden border-0 shadow-lg group">
                      <div className="h-64 overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, idx) => (
                            <span key={idx} className="text-xs font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="group-hover:bg-blue-600 group-hover:text-white transition-colors"
                        >
                          View Project
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            asChild
          >
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
