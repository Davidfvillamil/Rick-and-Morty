import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/navbar'
import Personajes from './Components/personajes'
import Pagination from './Components/pagination'


function App() {
  
  const [personajes, setPersonajes] = useState([])
  const [info,setInfo] = useState([])

  const url_personajes = 'https://rickandmortyapi.com/api/character'

  const onPreveous = () => {
    fetch(info.prev)
      .then(response => response.json())
      .then(data => {
        setPersonajes(data.results)
        setInfo(data.info)
      })
      .catch(error => console.log(error))
  }
  
  const onNext = () => {
    fetch(info.next)
      .then(response => response.json())
      .then(data => {
        setPersonajes(data.results)
        setInfo(data.info)
      })
      .catch(error => console.log(error))
  }
  useEffect(() => {
    fetch(url_personajes)
      .then(response => response.json())
      .then(data => {
        setPersonajes(data.results)
        setInfo(data.info)
      })
      .catch(error => console.log(error))
      
  },[])

  return (
    <>
      <Navbar brand='Rick and Morty'></Navbar>
      <div className='container mt-5'>
        <Pagination prev={info.prev} next={info.next} onPreveous={onPreveous} onNext={onNext}></Pagination>
        <Personajes personajes={personajes}></Personajes>
        <Pagination prev={info.prev} next={info.next} onPreveous={onPreveous} onNext={onNext}></Pagination>
      </div>
    </>
  )
}

export default App
