"use client"

export default function DsaOverlay() {
  return (
    <div className="absolute w-full top-[100px] h-[80%] flex flex-col items-center">
      <h3 className="text-[35px]">What is data structure?</h3>
      <p className="w-[89%] tracking-[1px] text-xl">
        Data structure is a way of organizing and storing data in a computer system so that it can be accessed and
        manipulated efficiently. It defines the relationship between the data elements and enables operations such as
        insertion, deletion, searching, and sorting.
      </p>

      <div className="w-full h-[347px] flex items-center justify-around perspective-1000">
        <div className="card relative w-[300px] h-[200px] transition-all duration-600 transform-style-preserve-3d perspective-1000 group">
          <div className="cardFront absolute w-full h-full flex flex-col items-center backface-hidden transition-all duration-500 bg-white/30 rounded-2xl shadow-lg backdrop-blur-sm border border-white">
            <h3 className="w-full h-[50px] text-center text-[35px] mt-2">Array</h3>
            <p className="px-6 text-center">
              Arrays in programming store elements of the same type in contiguous memory, enabling efficient index-based
              access.
            </p>
          </div>
          <div className="cardBack absolute w-full h-full flex flex-col justify-center items-center backface-hidden transition-all duration-500 bg-white/30 rounded-2xl shadow-lg backdrop-blur-sm border border-white rotate-y-180 group-hover:rotate-y-0">
            <h3 className="text-[30px] mb-2">Feature of Array</h3>
            <ul className="pl-8 w-full h-[70%] text-lg">
              <li className="mb-1">Contiguous memory for storing elements.</li>
              <li className="mb-1">Direct access using index.</li>
              <li className="mb-1">Fixed size after creation.</li>
            </ul>
          </div>
        </div>

        <div className="card relative w-[300px] h-[200px] transition-all duration-600 transform-style-preserve-3d perspective-1000 group">
          <div className="cardFront absolute w-full h-full flex flex-col items-center backface-hidden transition-all duration-500 bg-white/30 rounded-2xl shadow-lg backdrop-blur-sm border border-white">
            <h3 className="w-full h-[50px] text-center text-[35px] mt-2">Stack</h3>
            <p className="px-6 text-center">
              A stack is a collection of elements that supports two main operations: pushing (adding) elements onto the
              top of the stack and popping (removing) elements from the top of the stack.
            </p>
          </div>
          <div className="cardBack absolute w-full h-full flex flex-col justify-center items-center backface-hidden transition-all duration-500 bg-white/30 rounded-2xl shadow-lg backdrop-blur-sm border border-white rotate-y-180 group-hover:rotate-y-0">
            <h3 className="text-[30px] mb-2">Operation of stack</h3>
            <ul className="pl-8 w-full h-[70%] text-lg">
              <li className="mb-1">Push: Adds an element to the top of the stack.</li>
              <li className="mb-1">Pop: Removes and returns the top element of the stack.</li>
              <li className="mb-1">Peek: Returns the top element of the stack without removing it.</li>
            </ul>
          </div>
        </div>

        <div className="card relative w-[300px] h-[200px] transition-all duration-600 transform-style-preserve-3d perspective-1000 group">
          <div className="cardFront absolute w-full h-full flex flex-col items-center backface-hidden transition-all duration-500 bg-white/30 rounded-2xl shadow-lg backdrop-blur-sm border border-white">
            <h3 className="w-full h-[50px] text-center text-[35px] mt-2">Queue</h3>
            <p className="px-6 text-center">
              A queue is a linear data structure with FIFO behavior, where elements are added at the rear/tail and
              removed from the front/head.
            </p>
          </div>
          <div className="cardBack absolute w-full h-full flex flex-col justify-center items-center backface-hidden transition-all duration-500 bg-white/30 rounded-2xl shadow-lg backdrop-blur-sm border border-white rotate-y-180 group-hover:rotate-y-0">
            <h3 className="text-[30px] mb-2">Operation of queue</h3>
            <ul className="pl-8 w-full h-[70%] text-lg">
              <li className="mb-1">Enqueue: Adds an element to the rear/tail of the queue.</li>
              <li className="mb-1">Dequeue: Removes and returns the element from the front/head of the queue.</li>
              <li className="mb-1">
                Front/Peek: Returns the element at the front/head of the queue without removing it.
              </li>
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
