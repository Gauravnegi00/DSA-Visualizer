"use client"

import { Search } from "lucide-react"

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="w-full h-[calc(100vh-80px)] flex mt-[80px] relative">
      <div className="w-1/2 text-2xl flex flex-col items-center">
        <div className="absolute left-[13px] mt-[45px] text-[40px]">
          <Search
            id="glass"
            className="absolute left-[720px] text-black cursor-pointer transition-transform duration-300 hover:animate-[flip_1s_linear]"
          />
          DATA STRUCTURE AND ALGORITHM{" "}
          <span>
            {" "}
            <span
              id="headding-V"
              className="font-serif text-[70px]"
              style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}
            >
              V
            </span>
            <span className="text-[#050b28] font-medium">ISUALIZER</span>
          </span>
        </div>
        <div className="mt-[150px]">
          <p className="font-normal tracking-[7px] text-xl">You can visualize every iteration of DSA</p>
        </div>
        <div className="mt-[35px] flex flex-col gap-[15px] -ml-[350px]">
          <button
            className="w-[250px] h-[70px] bg-accent hover:bg-green-400 transition-colors duration-300 rounded-[25px] py-[10px] px-[25px] text-black font-medium cursor-pointer text-2xl shadow-lg"
            onClick={() => scrollToSection("sorting-section")}
          >
            Sorting
          </button>
          <button
            className="w-[250px] h-[70px] bg-accent hover:bg-green-400 transition-colors duration-300 rounded-[25px] py-[10px] px-[25px] text-black font-medium cursor-pointer text-2xl shadow-lg"
            onClick={() => scrollToSection("searching-section")}
          >
            Searching
          </button>
          <button
            className="w-[250px] h-[70px] bg-accent hover:bg-green-400 transition-colors duration-300 rounded-[25px] py-[10px] px-[25px] text-black font-medium cursor-pointer text-2xl shadow-lg"
            onClick={() => scrollToSection("dataStructure-section")}
          >
            Data Structure
          </button>
        </div>
      </div>
      <div
        className="w-1/2 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/placeholder.svg?height=600&width=600)" }}
      ></div>
    </div>
  )
}
