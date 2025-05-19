"use client"

import { useState, useRef } from "react"
import { useToast } from "@/components/ui/use-toast"
import SearchingOverlay from "./searching-overlay"
import AlgorithmDetails from "./algorithm-details"
import type { JSX } from "react/jsx-runtime"

export default function SearchingSection() {
  const { toast } = useToast()
  const [showOverlay, setShowOverlay] = useState(true)
  const [array, setArray] = useState<string[]>([])
  const [displayArray, setDisplayArray] = useState<string[]>([])
  const [iterations, setIterations] = useState<JSX.Element[]>([])
  const [selectedMethod, setSelectedMethod] = useState("")
  const [searchValue, setSearchValue] = useState("")
  const [showDetails, setShowDetails] = useState(false)
  const [showFindOverlay, setShowFindOverlay] = useState(false)
  const [findMessage, setFindMessage] = useState({ heading: "", message: "" })
  const [algoDetails, setAlgoDetails] = useState({
    name: "",
    heading: "",
    keyPoint: "",
    content: "",
    bestTime: "",
    avgTime: "",
    worstTime: "",
    worstSpace: "",
  })

  const containerRef = useRef<HTMLDivElement>(null)
  const arrInputRef = useRef<HTMLInputElement>(null)
  const searchingContainerRef = useRef<HTMLDivElement>(null)
  const iterationContainerRef = useRef<HTMLDivElement>(null)

  const generateArray = () => {
    if (!arrInputRef.current) return

    const inputValue = arrInputRef.current.value.trim()
    if (inputValue === "") {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter some values!",
      })
      return
    }

    setShowOverlay(false)
    const newArray = inputValue.split(" ").filter((item) => item !== "")
    setArray(newArray)
    setDisplayArray(newArray)
    setIterations([])
  }

  const linearSearch = async () => {
    if (!searchingContainerRef.current) return

    const newArray = [...displayArray]
    const divArr = Array.from(searchingContainerRef.current.querySelectorAll(".small-div2"))
    const arrSize = divArr.length
    const target = Number.parseInt(searchValue)
    let found = false
    let count = 1
    let foundIndex = -1

    for (let i = 0; i < arrSize; i++) {
      divArr[i].classList.add("bg-red-500")
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Add iteration
      const iterationDiv = (
        <div key={count} className="flex items-center gap-4 mb-4">
          <h3 className="text-lg font-medium min-w-[120px]">{`Iteration No ${count}`}</h3>
          <div className="flex gap-4 flex-wrap">
            {newArray.map((value, idx) => (
              <div
                key={idx}
                className={`w-[50px] h-[50px] ${
                  idx <= i ? "bg-red-500" : "bg-primary"
                } flex justify-center items-center text-2xl font-bold rounded-lg shadow-md`}
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      )

      setIterations((prev) => [...prev, iterationDiv])
      count++

      if (Number.parseInt(newArray[i]) === target) {
        found = true
        foundIndex = i
        break
      }

      divArr[i].classList.remove("bg-red-500")
      divArr[i].classList.add("bg-primary")
      await new Promise((resolve) => setTimeout(resolve, 500))
    }

    if (found) {
      setFindMessage({
        heading: "Element Found",
        message: `${target} found at index ${foundIndex}`,
      })
    } else {
      setFindMessage({
        heading: "Element Not Found",
        message: `Element ${target} not found`,
      })
    }

    setShowFindOverlay(true)
  }

  const binarySearch = async () => {
    if (!searchingContainerRef.current) return

    const newArray = [...displayArray]
    const divArr = Array.from(searchingContainerRef.current.querySelectorAll(".small-div2"))
    const arrSize = divArr.length
    const target = Number.parseInt(searchValue)
    let found = false
    let count = 1
    let foundIndex = -1

    // Check if array is sorted
    const isSorted = () => {
      for (let i = 1; i < arrSize; i++) {
        if (Number.parseInt(newArray[i]) < Number.parseInt(newArray[i - 1])) {
          return false
        }
      }
      return true
    }

    if (!isSorted()) {
      setFindMessage({
        heading: "Array is unsorted",
        message: "Do you want to sort the array?",
      })
      setShowFindOverlay(true)
      return
    }

    // Binary search implementation
    let start = 0
    let end = arrSize - 1

    while (start <= end) {
      const mid = Math.floor((start + end) / 2)
      const midValue = Number.parseInt(newArray[mid])

      divArr[mid].classList.add("bg-red-500")
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Add iteration
      const iterationDiv = (
        <div key={count} className="flex items-center gap-4 mb-4">
          <h3 className="text-lg font-medium min-w-[120px]">{`Iteration No ${count}`}</h3>
          <div className="flex gap-4 flex-wrap">
            {newArray.map((value, idx) => (
              <div
                key={idx}
                className={`w-[50px] h-[50px] ${
                  idx === mid ? "bg-red-500" : "bg-primary"
                } flex justify-center items-center text-2xl font-bold rounded-lg shadow-md`}
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      )

      setIterations((prev) => [...prev, iterationDiv])
      count++

      if (midValue === target) {
        found = true
        foundIndex = mid
        break
      } else if (midValue < target) {
        start = mid + 1 // right half
      } else {
        end = mid - 1 // left half
      }

      divArr[mid].classList.remove("bg-red-500")
      divArr[mid].classList.add("bg-primary")
      await new Promise((resolve) => setTimeout(resolve, 500))
    }

    if (found) {
      setFindMessage({
        heading: "Element Found",
        message: `${target} found at index ${foundIndex}`,
      })
    } else {
      setFindMessage({
        heading: "Element Not Found",
        message: `Element ${target} not found`,
      })
    }

    setShowFindOverlay(true)
  }

  const handleSearch = async () => {
    if (selectedMethod === "") {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please select the method!",
      })
      return
    } else if (selectedMethod !== "" && showOverlay) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please generate the array!",
      })
      return
    } else if (selectedMethod !== "" && searchValue === "") {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter the target value!",
      })
      return
    }

    setIterations([])
    setShowDetails(true)

    switch (selectedMethod) {
      case "LS":
        setAlgoDetails({
          name: "Linear search",
          heading: "Linear searching",
          keyPoint: "Key Point about Linear search",
          content: `
            <ul>
              <li>Simple comparison-based sorting.</li>
              <li>Quadratic time complexity.</li>
              <li>In-place sorting with minimal memory usage.</li>
            </ul>
          `,
          bestTime: "O(1)",
          avgTime: "O(n)",
          worstTime: "O(n)",
          worstSpace: "O(1)",
        })
        await linearSearch()
        break
      case "BS":
        setAlgoDetails({
          name: "Binary search",
          heading: "Binary searching",
          keyPoint: "Key Point about Binary search",
          content: `
            <ul>
              <li>Efficient: halves search space, logarithmic time complexity O(log n).</li>
              <li>Sorted data: prerequisite for accurate results in binary search.</li>
              <li>Divide and conquer: compares middle element, halves search interval.</li>
            </ul>
          `,
          bestTime: "O(1)",
          avgTime: "O(log n)",
          worstTime: "O(log n)",
          worstSpace: "O(1)",
        })
        await binarySearch()
        break
    }
  }

  const sortArray = () => {
    const newArray = [...displayArray].map((item) => Number.parseInt(item))
    newArray.sort((a, b) => a - b)
    setDisplayArray(newArray.map((item) => item.toString()))
    setShowFindOverlay(false)
  }

  const switchToLinearSearch = () => {
    setSelectedMethod("LS")
    setShowFindOverlay(false)
  }

  return (
    <div
      id="searching-section"
      className="mt-[15px] w-full min-h-screen flex flex-col items-center pt-[60px] pb-16 relative top-[200px]"
      ref={containerRef}
    >
      {showOverlay && <SearchingOverlay />}

      {showFindOverlay && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 backdrop-blur-sm">
          <div className="w-[450px] bg-[#251d1d] p-[15px] rounded-[25px] flex flex-col items-center shadow-xl border border-primary">
            <button
              className="self-end text-3xl text-red-500 cursor-pointer hover:scale-110 transition-transform mb-2"
              onClick={() => setShowFindOverlay(false)}
            >
              ✕
            </button>
            <h3 className="text-[35px] mt-4">{findMessage.heading}</h3>
            <span className="text-2xl mb-6">{findMessage.message}</span>

            {findMessage.heading === "Array is unsorted" && (
              <div className="w-full flex justify-around items-center mt-4 gap-4">
                <button
                  className="h-[55px] px-[25px] text-xl font-medium bg-primary hover:bg-[#7a5df0] text-white transition-colors duration-300 rounded-lg border-2 border-[#111] shadow-md"
                  onClick={sortArray}
                >
                  Sort
                </button>
                <button
                  className="h-[55px] px-[25px] text-xl font-medium bg-primary hover:bg-[#7a5df0] text-white transition-colors duration-300 rounded-lg border-2 border-[#111] shadow-md"
                  onClick={switchToLinearSearch}
                >
                  Linear sort
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="w-full max-w-5xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-center">Searching Visualizer</h1>
      </div>

      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 px-4">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <input
              ref={arrInputRef}
              type="text"
              className="w-[200px] h-[55px] text-xl p-[5px] rounded-lg bg-transparent text-white border border-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all"
              placeholder="Enter the Array"
            />
            <button
              className="h-[55px] px-[25px] text-xl font-medium bg-primary hover:bg-[#7a5df0] text-white transition-colors duration-300 rounded-lg border-2 border-[#111] shadow-md"
              onClick={generateArray}
            >
              Generate Array
            </button>
          </div>

          <div className="w-full flex justify-center items-center min-h-[170px] bg-secondary/30 rounded-lg p-4">
            <div id="showArray" className="flex flex-wrap justify-center items-center gap-4">
              {array.map((value, index) => (
                <div
                  key={index}
                  className="small-div2 w-[50px] h-[50px] bg-primary flex justify-center items-center text-2xl font-bold rounded-lg shadow-md"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <input
              type="text"
              className="valueInput w-[150px] h-[55px] text-xl p-[5px] rounded-lg bg-transparent text-white border border-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all"
              placeholder="Enter the value"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <select
              id="searchMethod"
              className="w-[185px] h-[55px] text-xl p-[5px] rounded-lg bg-transparent text-white border border-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all"
              value={selectedMethod}
              onChange={(e) => setSelectedMethod(e.target.value)}
            >
              <option value="">Searching Method</option>
              <option className="text-black" value="LS">Linear Searching</option>
              <option className="text-black" value="BS">Binary searching</option>
            </select>
            <button
              className="h-[55px] px-[25px] text-xl font-medium bg-primary hover:bg-[#7a5df0] text-white transition-colors duration-300 rounded-lg border-2 border-[#111] shadow-md"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          <div
            ref={searchingContainerRef}
            className="w-full flex justify-center items-center min-h-[170px] bg-secondary/30 rounded-lg p-4"
          >
            <div className="flex flex-wrap justify-center items-center gap-4">
              {displayArray.map((value, index) => (
                <div
                  key={index}
                  className="small-div2 w-[50px] h-[50px] bg-primary flex justify-center items-center text-2xl font-bold rounded-lg shadow-md"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showDetails && (
        <div className="w-full max-w-5xl mx-auto mt-12 flex flex-col md:flex-row gap-8 px-4">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="mb-4 text-center">
              <h3 className="text-2xl font-bold">Iteration</h3>
            </div>
            <div
              ref={iterationContainerRef}
              className="w-full h-[400px] bg-secondary/30 rounded-lg p-6 overflow-y-auto"
            >
              {iterations}
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <AlgorithmDetails
              name={algoDetails.name}
              heading={algoDetails.heading}
              keyPoint={algoDetails.keyPoint}
              content={algoDetails.content}
              bestTime={algoDetails.bestTime}
              avgTime={algoDetails.avgTime}
              worstTime={algoDetails.worstTime}
              worstSpace={algoDetails.worstSpace}
            />
          </div>
        </div>
      )}
    </div>
  )
}
