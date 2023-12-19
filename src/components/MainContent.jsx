import About from "./About"
import Tecnologies from "./Tecnologies"
import Projects from "./Projects"

import "../styles/components/maincontent.sass"

const MainContent = () => {
  return (
    <main id="main-content">
        <About />
        <Tecnologies />
        <Projects />
    </main>
  )
}

export default MainContent