import { useEffect, useState } from 'react'
import authServiec from "./Appwrite/Auth"
import './App.css'
import { useDispatch } from 'react-redux'
import { login, logout } from './Store/AuthSlice'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import { Outlet } from 'react-router-dom'
function App() {
  const [loading, setloading] = useState(true)
  const dispath = useDispatch()


  useEffect(() => {
    authServiec.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispath(login({ userData }))
        } else {
          dispath(logout())
        }

      })

      .finally(() => setloading(false))
  }, [])

  return !loading ? (
  <>
    <Header/>
    <Outlet/>
    <Footer/>
 </>
  ) : null

}

export default App
