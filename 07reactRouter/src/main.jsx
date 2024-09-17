import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider,Route } from 'react-router-dom'
import { Home , About,Contact,Github,User} from './components/index.js'
import Layout from './Layout.jsx'
import { githubInfoLoader } from './components/Github/Github.jsx'



const router = createBrowserRouter(
 createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
  <Route path='' element={<Home/>} />
  <Route path='about' element={<About/>} />
  <Route path='contact' element={<Contact/>}/>
  <Route path='user/:userid' element={<User/>}/>
  <Route 
  path='Github' 
  element={<Github/>}
  loader={githubInfoLoader}
  />
  
  
  </Route>
 )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/> 
  </StrictMode>,
)
