import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, ExternalLink, Layers, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
        <div className="relative w-24 h-24 md:w-32 md:h-32 mb-6 rounded-full overflow-hidden border-2 border-neon-green neon-border">
          <Image src="profile.png" alt="Profile" fill className="object-cover" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 gradient-text animate-glow">
          Md Muntasir Hossain
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-8">
          I build beautiful, interactive, and responsive web experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white border-none neon-border"
          >
            <Link href="/projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button asChild variant="outline" className="border-neon-green text-neon-green hover:bg-neon-green/10">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container py-12 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">What I Do</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Code className="h-8 w-8 text-neon-green" />,
              title: "Web Development",
              description:
                "Building responsive and performant web applications using modern frameworks and technologies.",
            },
            {
              icon: <Layers className="h-8 w-8 text-neon-blue" />,
              title: "UI/UX Design",
              description:
                "Creating intuitive and visually appealing user interfaces with attention to detail and user experience.",
            },
            {
              icon: <Zap className="h-8 w-8 text-neon-pink" />,
              title: "Performance Optimization",
              description: "Optimizing web applications for speed, accessibility, and search engine visibility.",
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 card-hover"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="container py-12 md:py-24">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Featured Projects</h2>

          <Button asChild variant="ghost" className="text-neon-green">
            <Link href="/projects">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "E-commerce Platform",
              description: "A modern e-commerce platform built with Next.js and a headless CMS.",
              image: "/placeholder.svg?height=400&width=600",
              tags: ["Next.js", "Tailwind CSS", "Stripe"],
            },
            {
              title: "Portfolio Website",
              description: "A creative portfolio website for a digital artist with interactive elements.",
              image: "/placeholder.svg?height=400&width=600",
              tags: ["React", "Three.js", "GSAP"],
            },
          ].map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden card-hover"
            >
              <div className="relative h-48 md:h-64">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <Button asChild variant="ghost" size="sm" className="text-neon-green">
                  <Link href={`/projects/${index}`}>
                    View Project
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12 md:py-24">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Let's Work Together</h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Have a project in mind? I'm available for freelance work and collaborations.
          </p>

          <Button
            asChild
            className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white border-none neon-border"
          >
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
