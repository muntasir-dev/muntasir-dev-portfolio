import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js and a headless CMS. Features include product filtering, cart functionality, and secure checkout with Stripe.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Headless CMS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A creative portfolio website for a digital artist with interactive elements and 3D animations. Optimized for performance and accessibility.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Three.js", "GSAP", "Framer Motion"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A productivity application for managing tasks and projects with team collaboration features, real-time updates, and data visualization.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Firebase", "Tailwind CSS", "Chart.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "A weather application that provides real-time weather data, forecasts, and location-based information with a clean and intuitive interface.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["JavaScript", "Weather API", "CSS", "Responsive Design"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Blog Platform",
    description:
      "A full-featured blog platform with markdown support, categories, tags, and a responsive design for optimal reading experience on all devices.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Music Streaming App",
    description:
      "A music streaming application with playlist creation, artist profiles, and personalized recommendations based on listening history.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Web Audio API"],
    demoUrl: "#",
    githubUrl: "#",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-glow">My Projects</h1>
        <p className="text-xl text-gray-400">A collection of my recent work, personal projects, and experiments.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden card-hover"
          >
            <div className="relative h-48">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>

            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  asChild
                  variant="default"
                  size="sm"
                  className="bg-neon-green text-gray-900 hover:bg-neon-green/80"
                >
                  <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    Live Demo
                  </Link>
                </Button>

                <Button asChild variant="outline" size="sm" className="border-gray-700">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-3 w-3" />
                    Code
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
