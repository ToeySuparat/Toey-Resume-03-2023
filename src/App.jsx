import './App.css'
import Header from "./Component/Header"
import { Introduction } from "./Component/Section-Introduce"
import { Experience } from "./Component/Section-Experience"
import { Footer } from './Component/Footer'
import { Personality } from './Component/Section-Personality'

function App() {
  
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Experience />
      <Personality />
      <Footer />
    </div>
  )
}

export default App
