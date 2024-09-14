import { useState,useCallback,useEffect,useRef} from 'react'


function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [characterAllowed , setCharacterAllowed] = useState(false);
  const [password , setPassword] = useState("");

  const passwordRefrence = useRef(null)

const  passwordGenerator = useCallback( () =>{
  let pass = ""
  let str = "ABCDEFGHIJKLMHOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  
  if(numberAllowed){
    str += "1234567890"
  }
  if(characterAllowed){
    str += "!@#$%^&*_-~"
  }

  for(let i = 1 ; i<=length ; i++){
    let char = Math.floor(Math.random() *str.length + 1);
    pass  += str.charAt(char);
  }
 

  setPassword(pass);
 
} , [length,numberAllowed, characterAllowed,setPassword])

const copyPasswordToClip = useCallback(() =>{
  passwordRefrence.current?.select();
  passwordRefrence.current?.setSelectionRange(0,50);
window.navigator.clipboard.writeText(password)
},[password])

useEffect(() =>{
passwordGenerator()
},[length,numberAllowed, characterAllowed,setPassword])
  return (
    <>
    
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4  py-8 my-8 text-orange-500 bg-gray-800 text-center '> 
      <h1 className='text-white text-center'> passwordGenerator</h1>
      <div className='flex shadow rounded-lg overflow-hidden my-4'>
       <input 
       type="text" 
       value={password} 
       className='outline-none w-full py-1 px-3' 
       placeholder = 'password' 
       readOnly 
       ref={passwordRefrence}/>  
       <button  
       className='outline-none bg-blue-700 text-white px-3 py-0.5 shirnk-0'
       onClick={copyPasswordToClip}>copy</button>
      
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input type="range"
          min={8}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {
            setLength(e.target.value)
          }} />
          <label>length : {length}</label>
          <div className='flex item-center gap-x-1'> 
            <input 
            type="checkbox" 
            defaultChecked = {numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)  => !prev )
            }}

          />
          <label htmlFor='numberInput' >numbers</label>
          </div>
          <div className='flex item-center gap-x-1'> 
            <input 
            type="checkbox" 
            defaultChecked = {characterAllowed}
            id="CharacterInput"
           onChange={() =>{
            setCharacterAllowed((prev) => !prev
            )
           }}

          />
          <label htmlFor='characterInput' >Characters</label>
          </div>
        </div>
       </div>
     </div>
     
    </>
  )
}

export default App
