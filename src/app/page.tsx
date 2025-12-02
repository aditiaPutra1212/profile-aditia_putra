import { projects } from "@/data/projects";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      
      {/* 1. NAVBAR SEDERHANA */}
      <nav className="p-6 flex justify-between items-center max-w-5xl mx-auto">
        <h1 className="text-xl font-bold text-blue-400">DevPortfolio.</h1>
        <div className="space-x-4 text-sm">
          <Link href="#about" className="hover:text-blue-400 transition">About</Link>
          <Link href="#projects" className="hover:text-blue-400 transition">Projects</Link>
          <Link href="#contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center h-[80vh] px-4">
        <h2 className="text-5xl font-extrabold mb-4">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Your Name</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mb-8">
          Fullstack Developer yang fokus membangun website cepat, responsif, dan user-friendly.
        </p>
        <div className="flex gap-4">
          <Link href="#projects" className="px-6 py-3 bg-blue-600 rounded-full font-medium hover:bg-blue-700 transition">
            Lihat Karya Saya
          </Link>
          <Link href="https://github.com" target="_blank" className="px-6 py-3 border border-gray-600 rounded-full font-medium hover:bg-gray-800 transition">
            GitHub
          </Link>
        </div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="max-w-5xl mx-auto py-20 px-6">
        <h3 className="text-3xl font-bold mb-10 border-b border-gray-700 pb-4">Featured Projects</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-xl hover:-translate-y-2 transition duration-300 border border-gray-700">
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, index) => (
                  <span key={index} className="text-xs bg-gray-700 px-2 py-1 rounded text-blue-300">
                    {t}
                  </span>
                ))}
              </div>

              <Link href={project.link} target="_blank" className="text-sm font-bold text-blue-400 hover:underline">
                View Project &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer id="contact" className="bg-gray-950 py-10 text-center text-gray-500 text-sm">
        <p>Tertarik bekerja sama? Email saya di <a href="mailto:email@anda.com" className="text-blue-400">email@anda.com</a></p>
        <p className="mt-2">&copy; 2024 Your Name. Built with Next.js & Tailwind.</p>
      </footer>

    </main>
  );
}