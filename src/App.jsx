import Navbar      from "./components/Navbar"
import Hero        from "./components/Hero"
import ScopeOfWork from "./components/ScopeOfWork"
import Projects    from "./components/Projects"
import Workflows   from "./components/Workflows"
import Skills      from "./components/Skills"
import Contact     from "./components/Contact"
import Footer      from "./components/Footer"

export default function App() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100dvh", width: "100%", maxWidth: "100%", overflowX: "clip" }}>
      <Navbar />
      <Hero />
      <div className="section-band section-band--intro">
        <ScopeOfWork />
      </div>
      <Projects />
      <div className="section-band">
        <Workflows />
      </div>
      <Skills />
      <div className="section-band">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
