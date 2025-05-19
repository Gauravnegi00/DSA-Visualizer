interface AlgorithmDetailsProps {
  name: string
  heading: string
  keyPoint: string
  content: string
  bestTime: string
  avgTime: string
  worstTime: string
  worstSpace: string
}

export default function AlgorithmDetails({
  name,
  heading,
  keyPoint,
  content,
  bestTime,
  avgTime,
  worstTime,
  worstSpace,
}: AlgorithmDetailsProps) {
  return (
    <div className="w-full h-full flex flex-col">
      <h3 className="w-[40%] mx-auto text-2xl">{heading}</h3>
      <table className="border-collapse w-full z-10 shadow-md">
        <thead>
          <tr>
            <th className="border-2 border-white p-2 text-left text-lg bg-primary/30">Algo</th>
            <th className="border-2 border-white p-2 text-left text-lg bg-primary/30" colSpan={3}>
              Time complexity
            </th>
            <th className="border-2 border-white p-2 text-left text-lg bg-primary/30">Space complexity</th>
          </tr>
          <tr>
            <th className="border-2 border-white p-2 text-left text-lg bg-primary/20"></th>
            <th className="border-2 border-white p-2 text-left text-lg bg-primary/20">Best</th>
            <th className="border-2 border-white p-2 text-left text-lg bg-primary/20">Average</th>
            <th className="border-2 border-white p-2 text-left text-lg bg-primary/20">Worst</th>
            <th className="border-2 border-white p-2 text-left text-lg bg-primary/20">Worst</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-white p-2 text-left text-lg">{name}</td>
            <td
              className="border-2 border-white p-2 text-left text-lg"
              dangerouslySetInnerHTML={{ __html: bestTime }}
            ></td>
            <td
              className="border-2 border-white p-2 text-left text-lg"
              dangerouslySetInnerHTML={{ __html: avgTime }}
            ></td>
            <td
              className="border-2 border-white p-2 text-left text-lg"
              dangerouslySetInnerHTML={{ __html: worstTime }}
            ></td>
            <td
              className="border-2 border-white p-2 text-left text-lg"
              dangerouslySetInnerHTML={{ __html: worstSpace }}
            ></td>
          </tr>
        </tbody>
      </table>
      <h4 className="w-[60%] mx-auto text-xl">{keyPoint}</h4>
      <div className="w-full h-[200px] flex flex-col items-center" dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  )
}
