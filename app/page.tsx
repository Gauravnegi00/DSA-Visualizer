"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import SortingSection from "@/components/sorting-section"
import SearchingSection from "@/components/searching-section"
import DsaSection from "@/components/dsa-section"
import AboutSection from "@/components/about-section"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"

export default function Home() {
  const { toast } = useToast()

  // Make toastr available globally for components
  useEffect(() => {
    // @ts-ignore
    window.toastr = {
      error: (message: string) => {
        toast({
          variant: "destructive",
          title: "Error",
          description: message,
        })
      },
      success: (message: string) => {
        toast({
          title: "Success",
          description: message,
        })
      },
    }
  }, [toast])

  return (
    <main className="min-h-screen bg-secondary text-white font-poppins">
      <div id="wrapper" className="w-full flex justify-center">
        <div className="container w-[90%] min-h-screen">
          <Navbar />
          <HeroSection />
          <SortingSection />
          <SearchingSection />
          <DsaSection />
        </div>
      </div>
      <Toaster />
    </main>
  )
}
