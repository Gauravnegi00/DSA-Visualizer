"use client"

import { useState, useRef, useEffect } from "react"
import { useToast } from "@/components/ui/use-toast"
import DsaOverlay from "./dsa-overlay"

export default function DsaSection() {
  const { toast } = useToast()
  const [showOverlay, setShowOverlay] = useState(true)
  const [selectedDsa, setSelectedDsa] = useState("sel")
  const [arraySize, setArraySize] = useState("")
  const [arrayValue, setArrayValue] = useState("")
  const [idxForArr, setIdxForArr] = useState(0)
  const [stackOperation, setStackOperation] = useState("push")
  const [stackInput, setStackInput] = useState("")
  const [queueOperation, setQueueOperation] = useState("push")
  const [queueInput, setQueueInput] = useState("")
  const [boxHeight, setBoxHeight] = useState(40)
  const [boxWidth, setBoxWidth] = useState(40)

  const outputDsaRef = useRef<HTMLDivElement>(null)
  const chotuRef = useRef<HTMLDivElement>(null)
  const queueDisplayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chotuRef.current) {
      document.documentElement.style.setProperty("--boxHeight", `${boxHeight}px`)
    }
    if (queueDisplayRef.current) {
      document.documentElement.style.setProperty("--boxWidth", `${boxWidth}px`)
    }
  }, [boxHeight, boxWidth])

  const selectDsa = (value: string) => {
    setShowOverlay(false)
    setSelectedDsa(value)

    // Clear previous content
    if (outputDsaRef.current) {
      outputDsaRef.current.innerHTML = ""
    }

    // Reset height and width
    setBoxHeight(40)
    setBoxWidth(40)
    document.documentElement.style.setProperty("--boxHeight", "40px")
    document.documentElement.style.setProperty("--boxWidth", "40px")

    // Create appropriate containers based on selection
    if (value === "stk") {
      const chotu = document.createElement("div")
      chotu.className = "chotu"
      if (outputDsaRef.current) {
        outputDsaRef.current.appendChild(chotu)
        chotuRef.current = chotu
      }
    } else if (value === "que") {
      const queueDisplay = document.createElement("div")
      queueDisplay.className = "queueDisplay"
      if (outputDsaRef.current) {
        outputDsaRef.current.appendChild(queueDisplay)
        queueDisplayRef.current = queueDisplay
      }
    }
  }

  const generateBlankArray = () => {
    const size = Number.parseInt(arraySize)
    if (isNaN(size) || size <= 0) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a valid size!",
      })
      return
    }

    if (outputDsaRef.current) {
      outputDsaRef.current.innerHTML = ""

      for (let i = 0; i < size; i++) {
        const blankArr = document.createElement("div")
        blankArr.className =
          "small-div3 w-[50px] h-[50px] bg-primary flex justify-center items-center text-2xl font-bold rounded-lg shadow-md m-2"
        outputDsaRef.current.appendChild(blankArr)
      }

      setIdxForArr(0)
      setArraySize("")
    }
  }

  const addValueToArray = () => {
    if (arrayValue === "") {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter value!",
      })
      return
    }

    if (outputDsaRef.current) {
      const blankArrBoxes = outputDsaRef.current.querySelectorAll(".small-div3")

      if (idxForArr >= blankArrBoxes.length) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Out of bound",
        })
        setArrayValue("")
        return
      }

      blankArrBoxes[idxForArr].textContent = arrayValue
      setIdxForArr(idxForArr + 1)
      setArrayValue("")
    }
  }

  const handleStackOperation = () => {
    if (stackOperation === "push") {
      if (stackInput === "") {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please enter a value!",
        })
        return
      }

      if (chotuRef.current) {
        const valueDiv = document.createElement("div")
        valueDiv.className =
          "value w-full h-[40px] flex justify-center items-center text-2xl font-bold bg-primary border border-[#8b75e3] transition-all duration-300"
        valueDiv.textContent = stackInput
        chotuRef.current.appendChild(valueDiv)

        setBoxHeight(boxHeight + 40)

        // Update colors
        const values = chotuRef.current.querySelectorAll(".value")
        values.forEach((value, index) => {
          ;(value as HTMLElement).style.backgroundColor = "rgb(102, 70, 217)"
          if (index === values.length - 1) {
            ;(value as HTMLElement).style.backgroundColor = "red"
          }
        })

        setStackInput("")
      }
    } else if (stackOperation === "pop") {
      if (chotuRef.current) {
        const values = chotuRef.current.querySelectorAll(".value")
        if (values.length > 0) {
          chotuRef.current.removeChild(values[values.length - 1])
          setBoxHeight(boxHeight - 40)

          // Update colors for remaining elements
          const remainingValues = chotuRef.current.querySelectorAll(".value")
          remainingValues.forEach((value, index) => {
            ;(value as HTMLElement).style.backgroundColor = "rgb(102, 70, 217)"
            if (index === remainingValues.length - 1) {
              ;(value as HTMLElement).style.backgroundColor = "red"
            }
          })
        } else {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Stack is empty!",
          })
        }
      }
    } else if (stackOperation === "peek") {
      if (chotuRef.current) {
        const values = chotuRef.current.querySelectorAll(".value")
        if (values.length > 0) {
          values.forEach((value, index) => {
            if (index < values.length - 1) {
              value.classList.add("blur-effect")
              setTimeout(() => {
                value.classList.remove("blur-effect")
              }, 5000)
            }
          })
        } else {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Stack is empty!",
          })
        }
      }
    }
  }

  const handleQueueOperation = () => {
    if (queueOperation === "push") {
      if (queueInput === "") {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please enter a value!",
        })
        return
      }

      if (queueDisplayRef.current) {
        const valueDiv = document.createElement("div")
        valueDiv.className =
          "Qvalue h-full w-[40px] flex justify-center items-center text-2xl font-bold bg-primary border border-[#8b75e3] transition-all duration-300 mx-1"
        valueDiv.textContent = queueInput
        queueDisplayRef.current.appendChild(valueDiv)

        setBoxWidth(boxWidth + 40)

        // Update colors
        const values = queueDisplayRef.current.querySelectorAll(".Qvalue")
        values.forEach((value, index) => {
          ;(value as HTMLElement).style.backgroundColor = "rgb(102, 70, 217)"
          if (index === 0) {
            ;(value as HTMLElement).style.backgroundColor = "red"
          }
        })

        setQueueInput("")
      }
    } else if (queueOperation === "pop") {
      if (queueDisplayRef.current) {
        const values = queueDisplayRef.current.querySelectorAll(".Qvalue")
        if (values.length > 0) {
          queueDisplayRef.current.removeChild(values[0])
          setBoxWidth(boxWidth - 40)

          // Update colors for remaining elements
          const remainingValues = queueDisplayRef.current.querySelectorAll(".Qvalue")
          remainingValues.forEach((value, index) => {
            ;(value as HTMLElement).style.backgroundColor = "rgb(102, 70, 217)"
            if (index === 0) {
              ;(value as HTMLElement).style.backgroundColor = "red"
            }
          })
        } else {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Queue is empty!",
          })
        }
      }
    } else if (queueOperation === "peek") {
      if (queueDisplayRef.current) {
        const values = queueDisplayRef.current.querySelectorAll(".Qvalue")
        if (values.length > 0) {
          values.forEach((value, index) => {
            if (index > 0) {
              value.classList.add("blur-effect")
              setTimeout(() => {
                value.classList.remove("blur-effect")
              }, 5000)
            }
          })
        } else {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Queue is empty!",
          })
        }
      }
    }
  }

  return (
    <div id="dataStructure-section" className="relative top-[100px] w-full min-h-[calc(98vh-60px)] mt-[60px] pb-16">
      {showOverlay && <DsaOverlay />}

      <div className="mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold">Data Structure Visualizer</h1>
      </div>

      <div className="max-w-5xl mx-auto mb-8">
        <div className="flex flex-col items-center gap-8">
          <div className="w-full flex justify-center mb-4">
            <select
              id="data-structure-input"
              className="w-[185px] h-[55px] text-xl p-[5px] rounded-lg bg-transparent text-white border border-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all"
              value={selectedDsa}
              onChange={(e) => selectDsa(e.target.value)}
            >
              <option value="sel">Select</option>
              <option className="text-black" value="arr">Array</option>
              <option className="text-black" value="stk">Stack</option>
              <option className="text-black" value="que">Queue</option>
            </select>
          </div>

          {selectedDsa === "arr" && (
            <div className="flex flex-wrap justify-center gap-4 w-full">
              <input
                type="text"
                placeholder="Enter size of array"
                id="arrSize"
                className="w-[180px] h-[55px] text-xl p-[5px] rounded-lg bg-transparent text-white border border-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                value={arraySize}
                onChange={(e) => setArraySize(e.target.value)}
              />
              <button
                onClick={generateBlankArray}
                className="h-[55px] px-[25px] text-xl font-medium bg-primary hover:bg-[#7a5df0] text-white transition-colors duration-300 rounded-lg border-2 border-[#111] shadow-md"
              >
                Generate
              </button>
              <input
                type="text"
                placeholder="Enter value"
                id="arrValue"
                className="w-[150px] h-[55px] text-xl p-[5px] rounded-lg bg-transparent text-white border border-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                value={arrayValue}
                onChange={(e) => setArrayValue(e.target.value)}
              />
              <button
                onClick={addValueToArray}
                className="h-[55px] px-[25px] text-xl font-medium bg-primary hover:bg-[#7a5df0] text-white transition-colors duration-300 rounded-lg border-2 border-[#111] shadow-md"
              >
                Add
              </button>
            </div>
          )}

          {selectedDsa === "stk" && (
            <div className="flex flex-wrap justify-center gap-4 w-full">
              <select
                id="selectBox"
                className="w-[185px] h-[55px] text-xl p-[5px] rounded-lg bg-transparent text-white border border-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                value={stackOperation}
                onChange={(e) => setStackOperation(e.target.value)}
              >
                <option value="push">Push</option>
                <option value="pop">Pop</option>
                <option value="peek">Peek</option>
              </select>
              {stackOperation === "push" && (
                <input
                  type="text"
                  placeholder="Enter the value"
                  id="pushInput"
                  className="w-[180px] h-[55px] text-xl p-[5px] rounded-lg bg-transparent text-white border border-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                  value={stackInput}
                  onChange={(e) => setStackInput(e.target.value)}
                />
              )}
              <button
                className="h-[55px] px-[25px] text-xl font-medium bg-primary hover:bg-[#7a5df0] text-white transition-colors duration-300 rounded-lg border-2 border-[#111] shadow-md"
                onClick={handleStackOperation}
              >
                {stackOperation === "push" ? "Push" : stackOperation === "pop" ? "Pop" : "Peek"}
              </button>
            </div>
          )}

          {selectedDsa === "que" && (
            <div className="flex flex-wrap justify-center gap-4 w-full">
              <select
                id="queueSelectBox"
                className="w-[185px] h-[55px] text-xl p-[5px] rounded-lg bg-transparent text-white border border-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                value={queueOperation}
                onChange={(e) => setQueueOperation(e.target.value)}
              >
                <option value="push">Push</option>
                <option value="pop">Pop</option>
                <option value="peek">Peek</option>
              </select>
              {queueOperation === "push" && (
                <input
                  type="text"
                  placeholder="Enter the value"
                  id="queueInput"
                  className="w-[180px] h-[55px] text-xl p-[5px] rounded-lg bg-transparent text-white border border-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                  value={queueInput}
                  onChange={(e) => setQueueInput(e.target.value)}
                />
              )}
              <button
                className="h-[55px] px-[25px] text-xl font-medium bg-primary hover:bg-[#7a5df0] text-white transition-colors duration-300 rounded-lg border-2 border-[#111] shadow-md"
                onClick={handleQueueOperation}
              >
                {queueOperation === "push" ? "Enqueue" : queueOperation === "pop" ? "Dequeue" : "Peek"}
              </button>
            </div>
          )}
        </div>
      </div>

      <div ref={outputDsaRef} className="w-full flex justify-center items-center gap-6 mt-12 min-h-[300px]"></div>

      <style jsx>{`
  .chotu {
    overflow: hidden;
    width: 300px;
    border: 3px solid #6646d9;
    border-top: none;
    border-radius: 0 0 8px 8px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    overflow-y: auto;
    min-height: var(--boxHeight);
    background-color: rgba(102, 70, 217, 0.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    margin-top: 20px;
  }
  
  .queueDisplay {
    overflow: hidden;
    height: 300px;
    border: 3px solid #6646d9;
    border-left: none;
    border-right: none;
    display: flex;
    min-width: var(--boxWidth);
    background-color: rgba(102, 70, 217, 0.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    padding: 0 8px;
    margin-top: 20px;
  }
  
  .blur-effect {
    filter: blur(2px);
  }
`}</style>
    </div>
  )
}
