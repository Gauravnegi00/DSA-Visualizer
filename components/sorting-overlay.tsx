"use client"

export default function SortingOverlay() {
  return (
    <div className="absolute w-full top-[220px] h-[70%] flex flex-col items-center">
      <h3 className="text-[35px]">What is sorting?</h3>
      <p className="w-[89%] tracking-[1px] text-xl">
        Sorting refers to the process of arranging elements in a particular order based on some key or comparison
        criteria. Sorting is a fundamental operation in DSA and plays a crucial role in various algorithms and
        applications. The goal of sorting is to make data more organized, easier to search, and faster to access.
      </p>

      <div className="w-full h-[347px] flex items-center justify-around perspective-1000">
        <div className="card relative w-[300px] h-[200px] transition-all duration-600 transform-style-preserve-3d perspective-1000 group">
          <div className="cardFront absolute w-full h-full flex flex-col items-center backface-hidden transition-all duration-500 bg-white/30 rounded-2xl shadow-lg backdrop-blur-sm border border-white">
            <h3 className="w-full h-[50px] text-center text-[35px] mt-2">Bubble Sort</h3>
            <p className="px-6 text-center">
              Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent
              elements, and swaps them if they are in the wrong order.
            </p>
          </div>
          <div className="cardBack absolute w-full h-full flex flex-col justify-center items-center backface-hidden transition-all duration-500 bg-white/30 rounded-2xl shadow-lg backdrop-blur-sm border border-white rotate-y-180 group-hover:rotate-y-0">
            <h3 className="text-[30px] mb-2">How Does it Work?</h3>
            <ul className="pl-8 w-full h-[70%] text-lg">
              <li className="mb-1">It compares each pair of adjacent elements in the list.</li>
              <li className="mb-1">If they are in the wrong order, it swaps them.</li>
              <li className="mb-1">
                It continues this process until no swaps are needed, indicating that the list is sorted.
              </li>
            </ul>
          </div>
        </div>

        <div className="card relative w-[300px] h-[200px] transition-all duration-600 transform-style-preserve-3d perspective-1000 group">
          <div className="cardFront absolute w-full h-full flex flex-col items-center backface-hidden transition-all duration-500 bg-white/30 rounded-2xl shadow-lg backdrop-blur-sm border border-white">
            <h3 className="w-full h-[50px] text-center text-[35px] mt-2">Selection Sort</h3>
            <p className="px-6 text-center">
              Selection sort divides the list into sorted and unsorted parts, repeatedly selecting the smallest element
              from the unsorted part and swapping it with the first element of the unsorted part.
            </p>
          </div>
          <div className="cardBack absolute w-full h-full flex flex-col justify-center items-center backface-hidden transition-all duration-500 bg-white/30 rounded-2xl shadow-lg backdrop-blur-sm border border-white rotate-y-180 group-hover:rotate-y-0">
            <h3 className="text-[30px] mb-2">How Does it Work?</h3>
            <ul className="pl-8 w-full h-[70%] text-lg">
              <li className="mb-1">Divide the list into sorted and unsorted parts.</li>
              <li className="mb-1">Find the smallest element in the unsorted part.</li>
              <li className="mb-1">Swap it with the first element of the unsorted part.</li>
              <li className="mb-1">Repeat until the list is sorted.</li>
            </ul>
          </div>
        </div>

        <div className="card relative w-[300px] h-[200px] transition-all duration-600 transform-style-preserve-3d perspective-1000 group">
          <div className="cardFront absolute w-full h-full flex flex-col items-center backface-hidden transition-all duration-500 bg-white/30 rounded-2xl shadow-lg backdrop-blur-sm border border-white">
            <h3 className="w-full h-[50px] text-center text-[35px] mt-2">Quick Sort</h3>
            <p className="px-6 text-center">
              Quick sort is a highly efficient sorting algorithm that uses a divide-and-conquer approach to sort
              elements in a list by partitioning the list into smaller sublists based on a pivot element.
            </p>
          </div>
          <div className="cardBack absolute w-full h-full flex flex-col justify-center items-center backface-hidden transition-all duration-500 bg-white/30 rounded-2xl shadow-lg backdrop-blur-sm border border-white rotate-y-180 group-hover:rotate-y-0">
            <h3 className="text-[30px] mb-2">How Does it Work?</h3>
            <ul className="pl-8 w-full h-[70%] text-lg">
              <li className="mb-1">Select a pivot element from the list.</li>
              <li className="mb-1">
                Reorganize the list with elements smaller than the pivot on the left and larger elements on the right.
              </li>
              <li className="mb-1">Recursively sort left and right sublists.</li>
              <li className="mb-1">Combine for final sorted list.</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .group:hover .cardFront {
          transform: rotateY(180deg);
        }
        
        .group:hover .cardBack {
          transform: rotateY(0);
        }
      `}</style>
    </div>
  )
}
