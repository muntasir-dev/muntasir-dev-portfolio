import Link from "next/link"
import { Github, Instagram, Facebook, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 py-6 bg-black/50 backdrop-blur-lg">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-400">© {new Date().getFullYear()} Portfolio. All rights reserved.</div>

        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/muntasir-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon-green transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://instagram.com/__whacked"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon-green transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="https://facebook.com/whkedd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon-green transition-colors"
          >
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href="https://x.com/__whacked"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon-green transition-colors"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="mailto:muntasir@inbox.lv" className="text-gray-400 hover:text-neon-green transition-colors">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
