import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Education } from '@/components/education'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-primary-foreground/10 bg-primary text-primary-foreground/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm md:flex-row md:justify-between">
          <p>&copy; {new Date().getFullYear()} Shanith Shaik</p>
          <p>Images on this site are illustrative only.</p>
        </div>
      </footer>
    </>
  )
}
