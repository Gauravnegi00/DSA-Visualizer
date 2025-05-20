"use client"

import Link from "next/link"
import Image from "next/image"

export default function AboutSection() {
  return (
    <div id="about-section" className="w-full h-[40vh] bg-[#130e0e61] flex border-t border-gray-700">
      <div className="w-[40%] h-full flex justify-center items-center relative">
        <div className="flex flex-col">
          <span className="text-xl font-normal tracking-[5px] font-poppins">MADE WITH </span>
          <span className="text-xl font-normal tracking-[5px] font-poppins">BY Gaurav</span>
        </div>
        <div className="absolute bottom-[30px] font-cormorant uppercase tracking-[2px] right-[80px] text-gray-300">
          &#169; Made with  by Gaurav Ngi
        </div>
      </div>

      <div className="w-[30%] h-full flex flex-col items-center justify-center">
        <span className="mt-[40px] uppercase tracking-[3px] text-lg font-poppins">Connect with me</span>
        <ul className="list-none mt-[10px]">
          <Link
            href=""
            target="_blank"
          >
            <li className="leading-[30px] ml-[-107px] font-cormorant text-lg cursor-pointer hover:scale-110 transition-transform hover:text-accent">
              Instagram
            </li>
          </Link>
          <Link
            href=""
            target="_blank"
          >
            <li className="leading-[30px] ml-[-107px] font-cormorant text-lg cursor-pointer hover:scale-110 transition-transform hover:text-accent">
              LinkedIn
            </li>
          </Link>
          <Link href="" target="_blank">
            <li className="leading-[30px] ml-[-107px] font-cormorant text-lg cursor-pointer hover:scale-110 transition-transform hover:text-accent">
              Github
            </li>
          </Link>
        </ul>
      </div>

      <div className="w-[30%] h-full flex flex-col items-center justify-center">
        <span className="mt-[40px] uppercase tracking-[3px] text-lg font-poppins">Quick links</span>
        <ul className="list-none mt-[10px]">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            <li className="leading-[30px] ml-[-40px] font-cormorant text-lg cursor-pointer hover:scale-110 transition-transform hover:text-accent">
              Home
            </li>
          </Link>
          <Link
            href="#sorting-section"
            onClick={(e) => {
              e.preventDefault()
              const section = document.getElementById("sorting-section")
              if (section) section.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <li className="leading-[30px] ml-[-40px] font-cormorant text-lg cursor-pointer hover:scale-110 transition-transform hover:text-accent">
              Sorting
            </li>
          </Link>
          <Link
            href="#searching-section"
            onClick={(e) => {
              e.preventDefault()
              const section = document.getElementById("searching-section")
              if (section) section.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <li className="leading-[30px] ml-[-40px] font-cormorant text-lg cursor-pointer hover:scale-110 transition-transform hover:text-accent">
              Searching
            </li>
          </Link>
          <Link
            href="#dataStructure-section"
            onClick={(e) => {
              e.preventDefault()
              const section = document.getElementById("dataStructure-section")
              if (section) section.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <li className="leading-[30px] ml-[-40px] font-cormorant text-lg cursor-pointer hover:scale-110 transition-transform hover:text-accent">
              Data Structure
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}
