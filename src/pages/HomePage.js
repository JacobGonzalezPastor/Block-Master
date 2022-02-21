import React from 'react'
import AppBar from '../components/Appbar'
import { Carouselpelis } from '../components/Carousel'
import ListPelis from '../components/ListPelis'
import '../style/App.css'
const HomePage = () => {
  return (
    <div className='fondo'>
        <AppBar/>,
        <Carouselpelis/>,
        <ListPelis/>
    </div>
  )
}

export default HomePage