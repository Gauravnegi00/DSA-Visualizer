"use client"

import { Search } from "lucide-react"

// import hero from "./assets/hero.jpg"
export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="w-full h-[calc(100vh-80px)] flex flex-col md:flex-row mt-[80px] relative">
      {/* Left Side: Text & Buttons */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 text-center md:text-left text-2xl">
        <div className="flex items-center gap-4 text-[32px] md:text-[40px] font-semibold mb-6">
          <Search className="text-black cursor-pointer transition-transform duration-300 hover:animate-[flip_1s_linear]" />
          <span>DATA STRUCTURE AND ALGORITHM</span>
        </div>
        <h1 className="font-serif text-[60px] md:text-[70px] leading-tight">
          <span className="text-[#050b28] font-medium">VISUALIZER</span>
        </h1>
        <p className="mt-6 font-normal tracking-[4px] text-xl">
          You can visualize every iteration of DSA
        </p>

        <div className="mt-10 flex flex-col gap-4 w-full max-w-[300px]">
          <button
            className="h-[60px] bg-accent hover:bg-green-400 transition-colors duration-300 rounded-[25px] text-black font-medium cursor-pointer text-xl shadow-lg"
            onClick={() => scrollToSection("sorting-section")}
          >
            Sorting
          </button>
          <button
            className="h-[60px] bg-accent hover:bg-green-400 transition-colors duration-300 rounded-[25px] text-black font-medium cursor-pointer text-xl shadow-lg"
            onClick={() => scrollToSection("searching-section")}
          >
            Searching
          </button>
          <button
            className="h-[60px] bg-accent hover:bg-green-400 transition-colors duration-300 rounded-[25px] text-black font-medium cursor-pointer text-xl shadow-lg"
            onClick={() => scrollToSection("dataStructure-section")}
          >
            Data Structure
          </button>
        </div>
      </div>

      {/* Right Side: Background Image */}
      <div
        className="w-full md:w-1/2 h-[300px] md:h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('./assets/hero.jpg')" }}
      ></div>
    </section>
  )
}
