import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { ExpertiseBand } from "@/components/expertise-band"
import { About } from "@/components/about"
import { Markets } from "@/components/markets"
import { Process } from "@/components/process"
import { CtaStrip } from "@/components/cta-strip"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <ExpertiseBand />
        <About />
        <Markets />
        <Process />
        <CtaStrip />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
