import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Project from './Components/Project'

function App() {


  return (
    <>
      <div className=' p-[100px] px-[150px] bg-[#232732]  w-[100vw] h-[100vh] overflow-x-hidden' >
        <Navbar/>
        <Hero/>
        <About/>
        <Project/>

      </div>
    </>
  )
}

export default App
