'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiWordpress, SiSanity, SiGraphql, SiJavascript, SiPhp, SiGit } from 'react-icons/si';

const skills = [
  ['Next.js', SiNextdotjs], ['React.js', SiReact], ['TypeScript', SiTypescript], ['Tailwind CSS', SiTailwindcss], ['WordPress', SiWordpress],
  ['Sanity.io', SiSanity], ['GraphQL', SiGraphql], ['JavaScript', SiJavascript], ['PHP', SiPhp], ['Git', SiGit],
] as const;

const projects = [
  { no: '01', title: 'Puritual', type: 'E-commerce Website', tech: 'Next.js · React · Tailwind CSS', url: 'https://www.puritualofficial.com/', image: '/projects/puritual.svg', reverse: false },
  { no: '02', title: 'Composite Warehouse', type: 'Business Website', tech: 'Next.js · Tailwind CSS', url: 'https://compositewarehouse.vercel.app/', image: '/projects/composite.svg', reverse: true },
  { no: '03', title: 'Vivid Care', type: 'Healthcare Website', tech: 'Next.js · React · Tailwind CSS', url: 'https://vivid-care.vercel.app/', image: '/projects/vivid.svg', reverse: false },
  { no: '04', title: 'Solution Founder', type: 'Business Platform', tech: 'Next.js · React', url: 'https://www.solutionfounder.com/', image: '/projects/solution.svg', reverse: true },
];

const wordpress = [
  ['Digiwrens', 'https://digiwrens.com/'], ['ILM Education Consultants', 'https://ilmeducationconsultants.com/'],
  ['Haus of Vitality', 'https://hausofvitality.com.au/'], ['Essence Elation', 'https://essenceelation.co.nz/'],
  ['SW Urgent Care', 'https://swurgentcare.net/'], ['Stadfirma24', 'https://stadfirma24.se/'],
  ['SBRVH', 'https://sbrvh.com/'], ['Schimmel Ortho', 'https://www.schimmelortho.com/'],
];

export default function Home() {
  return (
    <main className="bg-white text-black">
      <header className="border-b border-black bg-white">
        <nav className="mx-auto flex h-[70px] w-[calc(100%-40px)] max-w-[1110px] items-center justify-between text-sm">
          <a href="#top" className="flex items-center gap-2 font-bold">
            <Image src="/images/blacklogo.png" alt="Jaweria Logo" width={120} height={40} className="h-10 w-auto" />
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#about">About Me</a><a href="#skills">Skills</a><a href="#projects">Project</a><a href="#contact">Contact Me</a>
          </div>
          <a href="/JV-Web-Developer.pdf" className="bg-black px-5 py-2.5 font-bold text-white text-sm">Resume ↗</a>
        </nav>
      </header>

      <section id="top" className="mx-auto grid min-h-[500px] w-[calc(100%-40px)] max-w-[1110px] items-center gap-8 py-12 md:grid-cols-[1fr_.85fr] md:py-16">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7 }}>
          <p className="text-lg">Hello I am <strong className="font-black">Jaweria Shoukat.</strong></p>
          <h1 className="mt-2 text-[38px] font-black leading-[1.02] tracking-[-.045em] sm:text-[56px] md:text-[64px]">Frontend <span className="font-normal">&amp;</span> Backend<br />Developer</h1>
          <p className="mt-2 text-xl font-semibold">Based In <strong>Pakistan.</strong></p>
          <p className="mt-5 max-w-[520px] text-base leading-7 text-[#666]">I build responsive, high-performance websites and digital experiences using Next.js, React.js, WordPress Headless, Sanity.io and Tailwind CSS.</p>
          <div className="mt-7 flex gap-2"><Social href="https://github.com/JaweriaShoukat" icon={<FaGithub />} /><Social href="https://www.linkedin.com/in/jaweeriashoukat/" icon={<FaLinkedinIn />} /><Social href="https://twitter.com/" icon={<FaTwitter />} /><Social href="https://instagram.com/" icon={<FaInstagram />} /></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8 }} className="mx-auto w-full max-w-[430px]">
          <Image src="/illustration.svg" width={500} height={500} alt="Developer illustration" priority className="w-full" />
        </motion.div>
      </section>

      <section id="skills" className="mx-auto w-[calc(100%-40px)] max-w-[1110px] py-16">
        <h2 className="section-heading text-center">My <b>Skills</b></h2>
        <div className="mx-auto mt-8 grid max-w-[1000px] grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
          {skills.map(([name, Icon], i) => <motion.div key={name} whileHover={{ y: -4 }} className={`skill-box ${i === 1 ? 'skill-active' : ''}`}><Icon size={28} /><span>{name}</span></motion.div>)}
        </div>
      </section>

      <section className="bg-black py-16 text-white" id="experience">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1110px]">
          <h2 className="section-heading text-center">My <b>Experience</b></h2>
          <div className="mx-auto mt-9 max-w-[950px] space-y-4">
            <Experience year="Jan 2024 — Present" title="Frontend & Backend Developer (Next.js / React.js)" company="SoftGens, Lahore" text="Developed responsive, high-performance web applications using Next.js and React.js. Built dynamic frontend interfaces and integrated backend APIs. Optimized applications for speed, scalability and best practices." />
            <Experience year="Jan 2021 — Jan 2023" title="Lead WordPress Developer" company="SoftGens, Lahore" text="Led WordPress development projects using Elementor, WPBakery, Divi, ACF and WooCommerce. Converted PSD/Figma designs into pixel-perfect responsive websites and implemented custom themes, plugins and dynamic content." />
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid w-[calc(100%-40px)] max-w-[1110px] items-center gap-10 py-16 md:grid-cols-[.75fr_1.25fr]">
        <div className="mx-auto w-full max-w-[390px] border border-black"><Image src="/about.svg" width={500} height={500} alt="About Jaweria illustration" className="w-full" /></div>
        <div><h2 className="section-heading mb-6">About <b>Me</b></h2><p className="text-base leading-7 text-[#666]">I’m a Frontend &amp; Backend Developer focused on creating clean, responsive and high-performance websites. My experience covers modern Next.js and React development as well as WordPress and headless CMS solutions.</p><p className="mt-4 text-base leading-7 text-[#666]">I enjoy turning Figma and PSD designs into polished interfaces, integrating APIs and dynamic content, and working across the full journey from design implementation to deployment.</p><div className="mt-6 grid grid-cols-3 border-t border-black pt-5"><Stat n="4+" t="Years Experience" /><Stat n="17+" t="Projects" /><Stat n="2" t="Core Specialties" /></div></div>
      </section>

      <section id="projects" className="bg-black py-16 text-white">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1110px]"><h2 className="section-heading text-center">My <b>Projects</b></h2><div className="mx-auto mt-10 max-w-[1000px] space-y-16">{projects.map(p => <Project key={p.no} {...p} />)}</div></div>
      </section>

      <section className="mx-auto w-[calc(100%-40px)] max-w-[1110px] py-16">
        <h2 className="section-heading text-center">More <b>Projects</b></h2>
        <div className="mx-auto mt-8 grid max-w-[1000px] border-l border-t border-black sm:grid-cols-2 lg:grid-cols-4">{wordpress.map(([name,url],i)=><a key={name} href={url} target="_blank" rel="noreferrer" className="border-b border-r border-black p-5 transition hover:bg-black hover:text-white"><div className="flex justify-between text-sm text-[#777]"><span>0{i+1}</span><FaArrowUpRightFromSquare /></div><h3 className="mt-10 text-base font-bold">{name}</h3><p className="mt-2 text-sm">WordPress Website</p></a>)}</div>
      </section>

      <section className="border-t border-black bg-white py-14"><div className="mx-auto w-[calc(100%-40px)] max-w-[1110px]"><h2 className="section-heading text-center">Client <b>Feedback</b></h2><div className="mx-auto mt-8 grid max-w-[900px] gap-4 md:grid-cols-3">{['Great communication and clean development work.','A polished website with excellent attention to detail.','Professional, responsive and easy to work with.'].map((q,i)=><div key={i} className={`min-h-[190px] border p-6 text-center ${i===1?'bg-black text-white':''}`}><div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border text-base">J</div><p className="text-sm leading-6">“{q}”</p><div className="mt-6 text-sm font-bold">Sample Client</div><div className="text-xs opacity-60">Replace with real testimonial</div></div>)}</div></div></section>

      <section id="contact" className="mx-auto grid w-[calc(100%-40px)] max-w-[1110px] gap-10 py-16 md:grid-cols-[.85fr_1.15fr]"><form className="space-y-3" onSubmit={(e)=>{e.preventDefault(); const form=e.currentTarget as HTMLFormElement; alert('Thanks for reaching out! I will get back to you soon.'); form.reset();}}><input name="name" placeholder="Your name" required/><input name="email" type="email" placeholder="Email" required/><input name="website" placeholder="Your website (Optional)"/><textarea name="message" rows={6} placeholder="How can I help?" required></textarea><button className="bg-black px-6 py-3 text-sm font-bold text-white">Get In Touch ↗</button></form><div className="self-center"><h2 className="text-[40px] font-black leading-[.95] tracking-[-.05em] sm:text-[48px] md:text-[56px]">Let’s talk for<br /><span className="relative">Something special<span className="absolute bottom-0 left-0 -z-10 h-2 w-full bg-[#d8ff45]" /></span></h2><p className="mt-5 max-w-[420px] text-base leading-7 text-[#666]">Have a website, redesign or development project in mind? Let’s build something great together.</p><div className="mt-5 text-base font-bold"><a href="mailto:jaweeriashoukat@gmail.com">jaweeriashoukat@gmail.com</a><br /><a href="tel:+923030804811">+92 303 0804811</a></div></div></section>

      <footer className="bg-black py-6 text-white"><div className="mx-auto flex w-[calc(100%-40px)] max-w-[1110px] items-center justify-between text-sm"><Image src="/images/whitelogo.png" alt="Jaweria Logo" width={100} height={32} className="h-8 w-auto" /><span>© 2026 Jaweria Shoukat</span><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}

function Social({href,icon}:{href:string;icon:React.ReactNode}){return <a href={href} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center border border-black text-sm hover:bg-black hover:text-white">{icon}</a>}
function Experience({year,title,company,text}:{year:string;title:string;company:string;text:string}){return <motion.article initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="border border-[#555] p-6"><div className="flex justify-between gap-5"><div><h3 className="text-base font-bold">{title}</h3><p className="mt-1 text-sm text-[#d8ff45]">{company}</p></div><span className="text-sm text-[#aaa]">{year}</span></div><p className="mt-4 text-sm leading-6 text-[#aaa]">{text}</p></motion.article>}
function Stat({n,t}:{n:string;t:string}){return <div><strong className="text-3xl font-black">{n}</strong><p className="text-sm text-[#777]">{t}</p></div>}
function Project({no,title,type,tech,url,image,reverse}:{no:string;title:string;type:string;tech:string;url:string;image:string;reverse:boolean}){return <motion.article initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} className={`grid items-center gap-8 md:grid-cols-2 ${reverse?'md:[&>*:first-child]:order-2':''}`}><a href={url} target="_blank" rel="noreferrer" className="overflow-hidden"><Image src={image} alt={title} width={700} height={430} className="w-full border border-[#444] transition duration-500 hover:scale-[1.02]" /></a><div><div className="flex justify-between text-sm text-[#aaa]"><span className="text-4xl font-black text-white">{no}</span><span>{type}</span></div><h3 className="mt-4 text-3xl font-black tracking-[-.04em]">{title}</h3><p className="mt-2 text-sm text-[#d8ff45]">{tech}</p><p className="mt-5 text-sm leading-6 text-[#aaa]">Responsive, modern web development focused on clean interfaces, performance, scalability and maintainable code.</p><a href={url} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 border-b border-white pb-1 text-sm font-bold uppercase">View project <FaArrowUpRightFromSquare /></a></div></motion.article>}
