"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Github } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`h-[60px] flex items-center fixed bg-secondary w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-md shadow-black/30 bg-secondary/95 backdrop-blur-sm" : ""
      }`}
    >
      <Image
        src="/placeholder.svg?height=100&width=100"
        alt="logo"
        width={100}
        height={100}
        className="cursor-pointer transition-all duration-300 hover:animate-[flip_1s_linear] ml-4"
      />
      <div className="ml-[18%] w-[80%]">
        <ul className="flex gap-[35px]">
          <li className="list-none font-normal tracking-[5px] cursor-pointer text-lg">
            <Link
              href="#"
              className="no-underline text-white transition-all duration-300 hover:text-accent"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
            >
              HOME
            </Link>
          </li>
          <li className="list-none font-normal tracking-[5px] cursor-pointer text-lg">
            <Link
              href="#sorting-section"
              className="no-underline text-white transition-all duration-300 hover:text-accent"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("sorting-section")
              }}
            >
              SORTING
            </Link>
          </li>
          <li className="list-none font-normal tracking-[5px] cursor-pointer text-lg">
            <Link
              href="#searching-section"
              className="no-underline text-white transition-all duration-300 hover:text-accent"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("searching-section")
              }}
            >
              SEARCHING
            </Link>
          </li>
          <li className="list-none font-normal tracking-[5px] cursor-pointer text-lg">
            <Link
              href="#dataStructure-section"
              className="no-underline text-white transition-all duration-300 hover:text-accent"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("dataStructure-section")
              }}
            >
              DATA STRUCTURE
            </Link>
          </li>
          <li className="list-none font-normal tracking-[5px] cursor-pointer text-lg">
            <Link
              href="#about-section"
              className="no-underline text-white transition-all duration-300 hover:text-accent"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("about-section")
              }}
            >
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-[350px] h-full flex items-center gap-[25px] text-2xl cursor-pointer transition-all duration-700">
        <a
          href="https://www.instagram.com/divyanshurajwar/?utm_source=qr&igsh=MTd2bjFlbnRxY3BxOQ%3D%3D"
          target="_blank"
          className="text-white hover:scale-[1.3] hover:text-accent transition-all duration-300"
          rel="noreferrer"
        >
          <Instagram />
        </a>
        <a
          href="https://www.linkedin.com/in/divyanshu-rajwar-159804259/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          className="text-white hover:scale-[1.3] hover:text-accent transition-all duration-300"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/DivyanshuRajwar"
          target="_blank"
          className="text-white hover:scale-[1.3] hover:text-accent transition-all duration-300"
          rel="noreferrer"
        >
          <Github />
        </a>
      </div>
    </nav>
  )
}
