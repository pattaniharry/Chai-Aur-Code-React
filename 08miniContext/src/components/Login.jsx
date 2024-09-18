import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('  ')
 const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser ({username,password})   

    }

  return (
    <>
    <h2>Login</h2>
    <input type='text' placeholder='username'
    value={username} onChange={(e) => setusername(e.target.value)} />
{"  "}
    <input type='password' placeholder='password'
     value={password} onChange={(e) => setpassword(e.target.value)} />
    <button  className='bg-sky-300 rounded-xl p-1'  onClick={handleSubmit}>Submit </button>
    </>
  )
}


export default Login