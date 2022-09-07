import React from 'react'
import Cards from '../components/home-cards/cards'
import useFireFetch from '../components/hooks/useFireFetch'
import './cakes.css'


function JarCakes() {
  const{cakeData}= useFireFetch('jarcake')
  return (
    <div className='products-cake__container'>   
    {cakeData.map((item)=>
    <Cards 
    id={item.id}
    name={item.name}
    url={item.url}
    />)}
  </div>
  )
}

export default JarCakes