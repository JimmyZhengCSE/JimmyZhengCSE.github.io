import { Navbar, Home, About, Skills, Projects, Contact, Footer } from "./components"
import { Routes, Route } from "react-router-dom"
function App() {

  return (
    <Routes>
      <Route path="/" element={
        <div>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      }/>
    </Routes>
  )
}

export default App
