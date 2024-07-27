import { useRef } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import PastProjects from '../components/PastProjects'
import SwProjects from '../components/SwProjects'
import Visuals from '../components/Visuals'

const Home = () => {
  const targetElem = useRef()

  const scrollIntoView = () => {
    const elmnt: any = targetElem
    elmnt.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start"
    })
  }

  return (
    <div className="flex flex-col bg-[#FFC700] divide-y dark:divide-gray-600">
      <Hero scrollToAbout={scrollIntoView} />
      <About ref={targetElem} />
      <Experience />
      <PastProjects />
      <SwProjects />
    </div>
  )
}

export default Home