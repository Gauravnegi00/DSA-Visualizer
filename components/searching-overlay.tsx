"use client"

export default function SearchingOverlay() {
  return (
    <div className="absolute w-full top-[220px] h-[70%] flex flex-col items-center mt-20">
      <h3 className="text-[35px] mt-10">What is Searching?</h3>
      <p className="w-[89%] tracking-[1px] text-xl">
        Searching refers to the process of finding a specific element or value within a collection of data. This
        collection can be an array, a list, a tree, or any other data structure. The goal of searching algorithms is to
        efficiently locate the target element, typically by examining elements in the data structure according to a
        specific strategy or algorithm.
      </p>

      <div className="w-full h-[347px] flex items-center justify-around perspective-1000">
        <div className="card relative w-[300px] h-[300px] transition-all duration-600 transform-style-preserve-3d perspective-1000 group">
          <div className="cardFront absolute w-full h-full flex flex-col items-center backface-hidden transition-all duration-500 bg-white/30 rounded-2xl shadow-lg backdrop-blur-sm border border-white">
            <h3 className="w-full h-[50px] text-center text-[35px] mt-2">Linear search</h3>
            <p className="px-6 text-center">
              Linear search is a basic searching algorithm that sequentially checks each element in a list until the
              target element is found or the end of the list is reached.
            </p>
          </div>
          <div className="cardBack absolute w-full h-full flex flex-col justify-center items-center backface-hidden transition-all duration-500 bg-white/30 rounded-2xl shadow-lg backdrop-blur-sm border border-white rotate-y-180 group-hover:rotate-y-0">
            <h3 className="text-[30px] mb-2">How Does it Work?</h3>
            <ul className="pl-8 w-full h-[70%] text-lg">
              <li className="mb-1">Sequentially checks each element.</li>
              <li className="mb-1">Compares with the target element.</li>
              <li className="mb-1">Stops when a match is found or the end of the list is reached.</li>
            </ul>
          </div>
        </div>

        <div className="card relative w-[300px] h-[300px] transition-all duration-600 transform-style-preserve-3d perspective-1000 group">
          <div className="cardFront absolute w-full h-full flex flex-col items-center backface-hidden transition-all duration-500 bg-white/30 rounded-2xl shadow-lg backdrop-blur-sm border border-white">
            <h3 className="w-full h-[50px] text-center text-[35px] mt-2">Binary search</h3>
            <p className="px-6 text-center">
              A fast algorithm for finding a target in a sorted array by repeatedly dividing the search space in half
              until the target is found or the search space is empty.
            </p>
          </div>
          <div className="cardBack absolute w-full h-full flex flex-col justify-center items-center backface-hidden transition-all duration-500 bg-white/30 rounded-2xl shadow-lg backdrop-blur-sm border border-white rotate-y-180 group-hover:rotate-y-0">
            <h3 className="text-[30px] mb-2">How Does it Work?</h3>
            <ul className="pl-8 w-full h-[70%] text-lg">
              <li className="mb-1">Halves search interval for efficiency.</li>
              <li className="mb-1">Compares with middle array element.</li>
              <li className="mb-1">Repeats until target found or space exhausted.</li>
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
