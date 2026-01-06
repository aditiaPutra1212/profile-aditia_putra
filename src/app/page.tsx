import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Database, Briefcase, User, ChevronDown, Monitor, Globe, Server } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from "next";

// --- METADATA (JUDUL WEBSITE) ---
export const metadata: Metadata = {
  title: "Aditia Putra | Backend Developer",
};

export default function Home() {
  // --- DATA PENGALAMAN (EXPERIENCE) ---
  const experiences = [
    {
      id: 1,
      role: "Backend Developer Intern",
      company: "PT Hempart Indonesia, Jakarta Selatan",
      period: "Ags – Des 2025",
      description: "Terlibat aktif dalam proyek pengembangan website pencari kerja berskala penuh bernama \"Arkwork\". Bertanggung jawab pada sisi backend, membangun dan mengelola API menggunakan TypeScript, Express.js, dan Prisma sebagai ORM. Mengintegrasikan layanan backend dengan database PostgreSQL dan berkolaborasi dengan tim frontend yang menggunakan Next.js.",
    },
    {
      id: 2,
      role: "Project Contributor",
      company: "Mahasiswa Kedokteran Project - Bandar Lampung",
      period: "Jan – Jun 2024",
      description: "Berperan dalam pengembangan sistem IoT pendeteksi detak jantung yang datanya ditampilkan secara real-time di website. Mengintegrasikan perangkat keras IoT dengan antarmuka web untuk memonitor data kesehatan secara akurat. Memastikan sistem berjalan stabil dan melakukan troubleshooting terhadap masalah teknis yang muncul selama pengembangan.",
    }
  ];

  // --- DATA PROYEK (PROJECTS) ---
  const projects = [
    {
      id: 1,
      title: "Arkwork - Job Search Platform",
      description: "Platform pencari kerja berskala komersial yang berfokus spesifik pada industri minyak dan gas. Membangun dan mengelola API service menggunakan TypeScript dan Express.js.",
      tech: ["TypeScript", "Express.js", "Prisma", "PostgreSQL", "Next.js"],
      link: "#",
      icon: <Monitor size={40} className="text-blue-400" />
    },
    {
      id: 2,
      title: "IoT Heart Rate Detector",
      description: "Sistem monitoring kesehatan real-time yang mengintegrasikan perangkat keras IoT dengan dashboard web untuk deteksi detak jantung.",
      tech: ["IoT", "Web Interface", "Real-time Data", "Hardware Integration"],
      link: "#",
      icon: <Server size={40} className="text-green-400" />
    },
    {
      id: 3,
      title: "Competitive Programming Strategy",
      description: "Merancang strategi pelatihan dan memimpin divisi Competitive Programming untuk meningkatkan kemampuan anggota dalam menghadapi kompetisi.",
      tech: ["C++", "Algorithms", "Data Structures"],
      link: "#",
      icon: <Code2 size={40} className="text-orange-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white">

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Aditia<span className="text-slate-200">.dev</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <Link href="#home" className="hover:text-cyan-400 transition-colors">Home</Link>
            <Link href="#experience" className="hover:text-cyan-400 transition-colors">Pengalaman</Link>
            <Link href="#projects" className="hover:text-cyan-400 transition-colors">Proyek</Link>
            <Link href="#contact" className="hover:text-cyan-400 transition-colors">Kontak</Link>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center items-center text-center">
        <div className="mb-6 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-30"></div>
          <div className="relative bg-slate-900 rounded-full p-4 border border-slate-800">
            <Code2 size={48} className="text-cyan-400" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hi, Saya <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Aditia Putra</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-4xl mb-10 leading-relaxed">
          Saya adalah mahasiswa S1 Informatika di Universitas Teknokrat Indonesia dengan semangat tinggi dalam bidang pengembangan IT, berfokus pada <span className="text-slate-200 font-semibold">backend architecture</span> yang efisien dan scalable. Berpengalaman membangun platform komersial menggunakan <span className="text-slate-200 font-semibold">TypeScript</span> dan <span className="text-slate-200 font-semibold">Express.js</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="#projects" className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-full transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2">
            <Briefcase size={18} />
            Lihat Portfolio
          </Link>
          <Link href="#contact" className="px-8 py-3 border border-slate-700 hover:bg-slate-800 text-slate-300 font-medium rounded-full transition-all flex items-center justify-center gap-2">
            <Mail size={18} />
            Hubungi Saya
          </Link>
        </div>

        <div className="mt-20 animate-bounce text-slate-600">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* --- TECH STACK (SKILLS) --- */}
      <section className="py-10 border-y border-slate-800 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-6">Keahlian & Teknologi</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {['TypeScript', 'JavaScript', 'PHP', 'Python', 'C++', 'Next.js', 'Express.js', 'PostgreSQL', 'Prisma', 'Figma', 'Git'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all cursor-default text-sm md:text-base">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <User className="text-cyan-500" />
            <h2 className="text-3xl font-bold text-slate-100">Pengalaman Kerja</h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                {/* Icon Timeline */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:bg-cyan-900 group-hover:border-cyan-500 transition shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Terminal size={18} className="text-slate-400 group-hover:text-cyan-400" />
                </div>

                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition duration-300 shadow-sm">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <h3 className="font-bold text-lg text-slate-100">{exp.role}</h3>
                    <span className="text-xs font-medium text-cyan-400 bg-cyan-950/30 px-2 py-1 rounded mt-1 sm:mt-0">{exp.period}</span>
                  </div>
                  <div className="text-slate-400 font-medium text-sm mb-3">{exp.company}</div>
                  <p className="text-slate-500 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Database className="text-cyan-500" />
            <h2 className="text-3xl font-bold text-slate-100">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col h-full">

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4 bg-slate-950 w-16 h-16 rounded-lg flex items-center justify-center border border-slate-800 group-hover:border-cyan-500/30 transition">
                    {project.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tag) => (
                      <span key={tag} className="text-xs font-medium text-cyan-300 bg-cyan-950/50 px-2 py-1 rounded border border-cyan-900/50">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href={project.link} className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors mt-auto">
                    Lihat Project <ExternalLink size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EDUCATION & ORGANIZATION SECTION --- */}
      <section id="education" className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="text-cyan-500" />
              <h2 className="text-2xl font-bold text-slate-100">Pendidikan</h2>
            </div>
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-xl shadow-cyan-500/5">
              <h3 className="font-bold text-lg text-slate-100">Universitas Teknokrat Indonesia</h3>
              <p className="text-cyan-400 text-sm mb-2">Jun 2023 – Present</p>
              <p className="text-slate-400 text-sm italic leading-relaxed">Bachelor of Computer Science (S.Kom.), Informatika</p>
              <div className="mt-4 pt-4 border-t border-slate-800">
                <p className="text-slate-200 font-bold">GPA: 3.77 / 4.00</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-8">
              <User className="text-cyan-500" />
              <h2 className="text-2xl font-bold text-slate-100">Organisasi & Prestasi</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition shadow-lg shadow-cyan-500/5">
                <h3 className="font-bold text-slate-100 text-sm">Vice President (Wakil Ketua) - PROTEK UTI</h3>
                <p className="text-slate-500 text-xs">2024 - Present</p>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition shadow-lg shadow-cyan-500/5">
                <h3 className="font-bold text-slate-100 text-sm">Juara II Divisi Robot Tematik (Wilayah)</h3>
                <p className="text-slate-500 text-xs">Mei - Juni 2024</p>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition shadow-lg shadow-cyan-500/5">
                <h3 className="font-bold text-slate-100 text-sm">Junior Front-end Web Developer (Dicoding)</h3>
                <p className="text-slate-500 text-xs">Des 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Mari Bekerja Sama!</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Saya sedang terbuka untuk peluang freelance, remote work, atau kolaborasi proyek baru.
            Jika Anda punya ide menarik, jangan ragu untuk menyapa.
          </p>

          <div className="flex justify-center gap-6">
            <Link href="https://github.com/aditiaPutra1212" target="_blank" className="p-4 bg-slate-800 hover:bg-slate-700 hover:text-cyan-400 rounded-full transition-all text-white border border-slate-700 shadow-lg">
              <Github size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/aditia-putra/" target="_blank" className="p-4 bg-slate-800 hover:bg-slate-700 hover:text-cyan-400 rounded-full transition-all text-white border border-slate-700 shadow-lg">
              <Linkedin size={24} />
            </Link>
            <Link href="mailto:aditiaputra88890@gmail.com" className="p-4 bg-slate-800 hover:bg-slate-700 hover:text-cyan-400 rounded-full transition-all text-white border border-slate-700 shadow-lg">
              <Mail size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-900 bg-slate-950">
        <p>© 2026 Aditia Putra. Dibuat dengan Next.js & Tailwind CSS.</p>
      </footer>

    </div>
  );
}