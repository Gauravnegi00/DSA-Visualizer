"use client"

import { useState, useRef } from "react"
import { useToast } from "@/components/ui/use-toast"
import SortingOverlay from "./sorting-overlay"
import AlgorithmDetails from "./algorithm-details"
import type { JSX } from "react/jsx-runtime"

export default function SortingSection() {
  const { toast } = useToast()
  const [showOverlay, setShowOverlay] = useState(true)
  const [array, setArray] = useState<string[]>([])
  const [displayArray, setDisplayArray] = useState<string[]>([])
  const [iterations, setIterations] = useState<JSX.Element[]>([])
  const [selectedAlgo, setSelectedAlgo] = useState("")
  const [showDetails, setShowDetails] = useState(false)
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
  const sortingContainerRef = useRef<HTMLDivElement>(null)
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

  const updateCSSVariables = (xi: number, xj: number) => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--UpRight-x", `${xj - xi}px`)
      containerRef.current.style.setProperty("--DownLeft-x", `${-xj + xi}px`)
    }
  }

  const bubbleSort = async () => {
    if (!sortingContainerRef.current) return

    const newArray = [...displayArray]
    const divArr = Array.from(sortingContainerRef.current.querySelectorAll(".small-div"))
    let count = 1
    const size = divArr.length

    for (let i = 0; i < size - 1; i++) {
      for (let j = 0; j < size - i - 1; j++) {
        if (Number.parseInt(newArray[j]) > Number.parseInt(newArray[j + 1])) {
          const coodJ = divArr[j].getBoundingClientRect().left
          const coodJ1 = divArr[j + 1].getBoundingClientRect().left

          divArr[j].classList.add("bg-red-500")
          divArr[j + 1].classList.add("bg-red-500")

          updateCSSVariables(coodJ, coodJ1)

          divArr[j].style.animation = "moveUpRight 2s ease-in-out"
          divArr[j + 1].style.animation = "moveDownLeft 2s ease-in-out"

          await new Promise((resolve) => setTimeout(resolve, 2000))

         
          const temp = newArray[j]
          newArray[j] = newArray[j + 1]
          newArray[j + 1] = temp
          setDisplayArray([...newArray])

          divArr[j].style.animation = ""
          divArr[j + 1].style.animation = ""

          
          const iterationDiv = (
            <div key={count} className="flex items-center gap-4 mb-4">
              <h3 className="text-lg font-medium min-w-[120px]">{`Iteration No ${count}`}</h3>
              <div className="flex gap-4 flex-wrap">
                {newArray.map((value, idx) => (
                  <div
                    key={idx}
                    className={`w-[50px] h-[50px] ${
                      idx === j || idx === j + 1 ? "bg-red-500" : "bg-primary"
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

        
          divArr[j].classList.remove("bg-red-500")
          divArr[j + 1].classList.remove("bg-red-500")
          divArr[j].classList.add("bg-primary")
          divArr[j + 1].classList.add("bg-primary")
        }
      }
    }
  }

  const selectionSort = async () => {
    if (!sortingContainerRef.current) return

    const newArray = [...displayArray]
    const divArr = Array.from(sortingContainerRef.current.querySelectorAll(".small-div"))
    const size = divArr.length

    for (let i = 0, count = 1; i < size - 1; i++, count++) {
      let minIndex = i

      for (let j = i + 1; j < size; j++) {
        if (Number.parseInt(newArray[j]) < Number.parseInt(newArray[minIndex])) {
          minIndex = j
        }
      }

      if (minIndex !== i) {
        const coodI = divArr[i].getBoundingClientRect().left
        const coodMin = divArr[minIndex].getBoundingClientRect().left

        divArr[i].classList.add("bg-red-500")
        divArr[minIndex].classList.add("bg-red-500")

        updateCSSVariables(coodI, coodMin)

        divArr[i].style.animation = "moveUpRight 2s ease-in-out"
        divArr[minIndex].style.animation = "moveDownLeft 2s ease-in-out"

        await new Promise((resolve) => setTimeout(resolve, 2000))

        const temp = newArray[i]
        newArray[i] = newArray[minIndex]
        newArray[minIndex] = temp
        setDisplayArray([...newArray])

       
        divArr[i].style.animation = ""
        divArr[minIndex].style.animation = ""

     
        const iterationDiv = (
          <div key={count} className="flex items-center gap-4 mb-4">
            <h3 className="text-lg font-medium min-w-[120px]">{`Iteration No ${count}`}</h3>
            <div className="flex gap-4 flex-wrap">
              {newArray.map((value, idx) => (
                <div
                  key={idx}
                  className={`w-[50px] h-[50px] ${
                    idx === i || idx === minIndex ? "bg-red-500" : "bg-primary"
                  } flex justify-center items-center text-2xl font-bold rounded-lg shadow-md`}
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        )

        setIterations((prev) => [...prev, iterationDiv])

        
        divArr[i].classList.remove("bg-red-500")
        divArr[minIndex].classList.remove("bg-red-500")
        divArr[i].classList.add("bg-primary")
        divArr[minIndex].classList.add("bg-primary")
      }
    }
  }

  const quickSort = async () => {
    if (!sortingContainerRef.current) return

    const newArray = [...displayArray]
    const divArr = Array.from(sortingContainerRef.current.querySelectorAll(".small-div"))
    let count = 1

    const partition = async (arr: string[], left: number, right: number, pivot: string) => {
      while (left <= right) {
        while (Number.parseInt(arr[left]) < Number.parseInt(pivot)) left++
        while (Number.parseInt(arr[right]) > Number.parseInt(pivot)) right--

        if (left <= right) {
          await swap(arr, left, right, divArr)
          left++
          right--
        }
      }
      return left
    }

    const swap = async (arr: string[], leftIndex: number, rightIndex: number, elements: Element[]) => {
      const leftDiv = elements[leftIndex] as HTMLElement
      const rightDiv = elements[rightIndex] as HTMLElement

      leftDiv.classList.add("bg-red-500")
      rightDiv.classList.add("bg-red-500")

      if (leftIndex !== rightIndex) {
        const coodLeft = leftDiv.getBoundingClientRect().left
        const coodRight = rightDiv.getBoundingClientRect().left

        updateCSSVariables(coodLeft, coodRight)

        leftDiv.style.animation = "moveUpRight 2s ease-in-out forwards"
        rightDiv.style.animation = "moveDownLeft 2s ease-in-out forwards"
      } else {
        rightDiv.style.animation = "moveUpRotate 2s ease-in-out forwards"
        leftDiv.style.animation = "moveUpRotate 2s ease-in-out forwards"
      }

      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Swap values
      const temp = arr[leftIndex]
      arr[leftIndex] = arr[rightIndex]
      arr[rightIndex] = temp
      setDisplayArray([...arr])

     
      leftDiv.style.animation = ""
      rightDiv.style.animation = ""

      // Add iteration
      const iterationDiv = (
        <div key={count} className="flex items-center gap-4 mb-4">
          <h3 className="text-lg font-medium min-w-[120px]">{`Iteration No ${count}`}</h3>
          <div className="flex gap-4 flex-wrap">
            {arr.map((value, idx) => (
              <div
                key={idx}
                className={`w-[50px] h-[50px] ${
                  idx === leftIndex || idx === rightIndex ? "bg-red-500" : "bg-primary"
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

      // Reset color
      leftDiv.classList.remove("bg-red-500")
      rightDiv.classList.remove("bg-red-500")
      leftDiv.classList.add("bg-primary")
      rightDiv.classList.add("bg-primary")
    }

    const quickSortRecursive = async (arr: string[], left = 0, right = arr.length - 1) => {
      if (left >= right) return

      const pivot = arr[Math.floor((right + left) / 2)]
      const index = await partition(arr, left, right, pivot)

      await quickSortRecursive(arr, left, index - 1)
      await quickSortRecursive(arr, index, right)
    }

    await quickSortRecursive(newArray)
  }

  const insertionSort = async () => {
    if (!sortingContainerRef.current) return

    const newArray = [...displayArray]
    const divArr = Array.from(sortingContainerRef.current.querySelectorAll(".small-div"))
    const size = divArr.length

    for (let i = 1; i < size; i++) {
      const key = Number.parseInt(newArray[i])
      let j = i - 1

      while (j >= 0 && Number.parseInt(newArray[j]) > key) {
        const coodJ = divArr[j].getBoundingClientRect().left
        const coodJNext = divArr[j + 1].getBoundingClientRect().left

        updateCSSVariables(coodJ, coodJNext)

        divArr[j].style.animation = "moveUpRight 2s ease-in-out"
        divArr[j + 1].style.animation = "moveDownLeft 2s ease-in-out"

        divArr[j].classList.add("bg-red-500")
        divArr[j + 1].classList.add("bg-red-500")

        await new Promise((resolve) => setTimeout(resolve, 2000))

        newArray[j + 1] = newArray[j]
        setDisplayArray([...newArray])

        divArr[j].style.animation = ""
        divArr[j + 1].style.animation = ""

        divArr[j].classList.remove("bg-red-500")
        divArr[j + 1].classList.remove("bg-red-500")
        divArr[j].classList.add("bg-primary")
        divArr[j + 1].classList.add("bg-primary")

        j--
        newArray[j + 1] = key.toString()
      }

    
      const iterationDiv = (
        <div key={i} className="flex items-center gap-4 mb-4">
          <h3 className="text-lg font-medium min-w-[120px]">{`Iteration No ${i}`}</h3>
          <div className="flex gap-4 flex-wrap">
            {newArray.map((value, idx) => (
              <div
                key={idx}
                className="w-[50px] h-[50px] bg-primary flex justify-center items-center text-2xl font-bold rounded-lg shadow-md"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      )

      setIterations((prev) => [...prev, iterationDiv])
    }
  }

  const handleSort = async () => {
    if (selectedAlgo === "") {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please select the method!",
      })
      return
    } else if (selectedAlgo !== "" && showOverlay) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please generate the array!",
      })
      return
    }

    setIterations([])
    setShowDetails(true)

    switch (selectedAlgo) {
      case "Bs":
        setAlgoDetails({
          name: "bubble sort",
          heading: "Bubble sort",
          keyPoint: "Key Point about Bubble sort",
          content: `
            <ul>
              <li>Simple pairwise comparison swaps adjacent elements until fully sorted.</li>
              <li>Quadratic time complexity makes it inefficient for large datasets.</li>
              <li>In-place sorting with minimal memory usage for small datasets.</li>
            </ul>
          `,
          bestTime: "O(n)",
          avgTime: "O(n<sup>2</sup>)",
          worstTime: "O(n<sup>2</sup>)",
          worstSpace: "O(1)",
        })
        await bubbleSort()
        break
      case "ss":
        setAlgoDetails({
          name: "Selection sort",
          heading: "Selection sort",
          keyPoint: "Key Point about Selection sort",
          content: `
            <ul>
              <li>Selects minimum, swaps with current, iterates through array.</li>
              <li>Quadratic time complexity, less efficient for large datasets.</li>
              <li>Simple, but outperformed by more advanced sorting algorithms.</li>
            </ul>
          `,
          bestTime: "O(n log n)",
          avgTime: "O(n log n)",
          worstTime: "O(n<sup>2</sup>)",
          worstSpace: "O(n)",
        })
        await selectionSort()
        break
      case "Qs":
        setAlgoDetails({
          name: "quick sort",
          heading: "Quick sort",
          keyPoint: "Key Point about Quick sort",
          content: `
            <ul>
              <li>Efficient divide-and-conquer strategy for sorting large datasets.</li>
              <li>Recursive partitioning places elements correctly in subarrays.</li>
              <li>Average-case time complexity of O(n log n) for fast sorting.</li>
            </ul>
          `,
          bestTime: "O(n log n)",
          avgTime: "O(n log n)",
          worstTime: "O(n<sup>2</sup>)",
          worstSpace: "O(n)",
        })
        await quickSort()
        break
      case "Is":
        setAlgoDetails({
          name: "Insertion sort",
          heading: "Insertion sort",
          keyPoint: "Key Point about Insertion sort",
          content: `
            <ul>
              <li>Efficient for small lists, especially nearly sorted ones.</li>
              <li>Sorts elements in the original array without extra memory.</li>
              <li>Maintains the order of equal elements.</li>
            </ul>
          `,
          bestTime: "O(n)",
          avgTime: "O(n<sup>2</sup>)",
          worstTime: "O(n<sup>2</sup>)",
          worstSpace: "O(1)",
        })
        await insertionSort()
        break
    }
  }

  return (
    <div id="sorting-section" className="relative w-full flex flex-col items-center pt-[60px] pb-16" ref={containerRef}>
      {showOverlay && <SortingOverlay />}

      <div className="w-full max-w-5xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-center">Sorting Visualizer</h1>
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
            <div className="flex flex-wrap justify-center items-center gap-4">
              {array.map((value, index) => (
                <div
                  key={index}
                  className="w-[50px] h-[50px] bg-primary flex justify-center items-center text-2xl font-bold rounded-lg shadow-md"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <select
              id="selectTech"
              className="w-[185px] h-[55px] text-xl p-[5px] rounded-lg bg-transparent text-white border border-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all"
              value={selectedAlgo}
              onChange={(e) => setSelectedAlgo(e.target.value)}
            >
              <option value="">Sorting Method</option>
              <option className="text-black" value="Bs">Bubble sort</option>
              <option className="text-black" value="ss">Selection sort</option>
              <option className="text-black" value="Qs">Quick sort</option>
              <option className="text-black" value="Is">Insertion sort</option>
            </select>
            <button
              className="h-[55px] px-[25px] text-xl font-medium bg-primary hover:bg-[#7a5df0] text-white transition-colors duration-300 rounded-lg border-2 border-[#111] shadow-md"
              onClick={handleSort}
            >
              Sort
            </button>
          </div>

          <div
            ref={sortingContainerRef}
            className="w-full flex justify-center items-center min-h-[170px] bg-secondary/30 rounded-lg p-4"
          >
            <div className="flex flex-wrap justify-center items-center gap-4">
              {displayArray.map((value, index) => (
                <div
                  key={index}
                  className="small-div w-[50px] h-[50px] bg-primary flex justify-center items-center text-2xl font-bold rounded-lg transition-transform duration-1000 shadow-md"
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

      <style jsx>{`
        @keyframes moveUpRight {
          0% { transform: translate(0, 0); }
          50% { transform: translate(70px, -70px); }
          100% { transform: translate(var(--UpRight-x), 0); }
        }
        
        @keyframes moveDownLeft {
          0% { transform: translate(0, 0); }
          50% { transform: translate(-70px, 70px); }
          100% { transform: translate(var(--DownLeft-x), 0); }
        }
        
        @keyframes moveUpRotate {
          0% { transform: translate(0, 0); }
          50% { transform: translate(0, -70px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </div>
  )
}
