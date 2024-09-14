
import { useState } from "react"

function App() {
  const [color , setColor] = useState("olive")

  return (
  
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl"> 
          <button onClick={() => setColor("Red")} className="outline-none  rounded-full text-white shadow-lg px-4 py-1" style={{backgroundColor:"Red"}}>Red</button>
          <button onClick={() => setColor("Blue")} className="outline-none  rounded-full text-white shadow-lg px-4 py-1" style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={() => setColor("Lavender")} className="outline-none  rounded-full text-white shadow-lg px-4 py-1" style={{backgroundColor:"lavender"}}>Lavender</button>
          <button onClick={() => setColor("Black")} className="outline-none  rounded-full text-white shadow-lg px-4 py-1" style={{backgroundColor:"black"}}>Black</button>
          <button onClick={() => setColor("Pink")} className="outline-none  rounded-full text-white shadow-lg px-4 py-1" style={{backgroundColor:"pink"}}>Pink</button>
          </div>
      </div>
    </div>
   
  )
}

export default App
