import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

const Education = () => {
  return (
    <div>
      <Navbar/>
      <Card/>
      {/* <Card 
      title='Primary Schooling'
      imageUrl={schoolPic}
      body='I did my primary and secondary schooling from St Francis Senior Secondary School. I was actively invovled in various co-curricular activities like 
      kho-kho and basletball games and academic competitions, 
      I received various medals and certificates for my participation. I passed 10th grade with a percentage of 91.2%.'
      />
      <Card 
      title='High Schooling'
      imageUrl={highschoolpic}
      body='I did my primary and secondary schooling from St Francis Senior Secondary School. I was actively invovled in various co-curricular activities like 
      kho-kho and basletball games and academic competitions, 
      I received various medals and certificates for my participation. I passed 10th grade with a percentage of 91.2%.'
      /> */}
      <Footer/>
    </div>
  )
}

export default Education