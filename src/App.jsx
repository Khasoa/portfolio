import Navbar    from "./components/Navbar"
import Hero      from "./components/Hero"
import About     from "./components/About"
import Projects  from "./components/Projects"
import Workflows from "./components/Workflows"
import Skills    from "./components/Skills"
import Contact   from "./components/Contact"
import Footer    from "./components/Footer"
import Divider   from "./components/Divider"

export default function App() {
  return (
    <div style={{ background:"var(--bg)", minHeight:"100vh" }}>
      <Navbar/>
      <Hero/>
      <Divider/>
      <About/>
      <Divider/>
      <Projects/>
      <Divider/>
      <Workflows/>
      <Divider/>
      <Skills/>
      <Divider/>
      <Contact/>
      <Footer/>
    </div>
  )
}