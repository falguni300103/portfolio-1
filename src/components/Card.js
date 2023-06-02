import React, { useContext } from 'react'
import './CardStyles.css'
import schoolPic from '../assets/schoolPic.jpeg'
import highschoolpic from '../assets/highschoolpic.jpg'
import collegepic from '../assets/college-pic.gif'
import { ThemeContext, themes} from '../context/themecontext'


function Card ({title,imageUrl,body}) {
    const {theme} = useContext(ThemeContext);
  return (
    <div className='edu'>
        <h3 className='ed' style={{color:theme===themes.dark?"white":"black"}}>Education
        </h3>
    <div className='container'>
    <div className='card-container' style={{backgroundColor:theme===themes.light?"grey":"black"}}>
        <div className='card-title'>
            <h3>{'Primary Schooling'}</h3>
        </div>
        <div className='image-container'>
            <img src={schoolPic} alt=''/>
        </div>
        <div className='card-body'>
            <p>{'I did my primary and secondary schooling from St Francis Senior Secondary School. I was actively invovled in various co-curricular activities like kho-kho and basletball games and academic competitions, I received various medals and certificates for my participation. I passed 10th grade with a percentage of 91.2%.'}</p>
        </div>
        </div>
        <div className='card-container' style={{backgroundColor:theme===themes.light?"grey":"black"}}>
        <div className='card-title'>
            <h3>{'High Schooling'}</h3>
        </div>
        <div className='image-container'>
           <img src={highschoolpic} alt=''/>
        </div>
        <div className='card-body'>
            <p>{'I started studying in Aakash Institute from class 11th but had no intention of qualifying JEE and coming into an NIT but by the end of class 11th , I started developing interest in JEE . I eventually passed 12th with 93% and got myself a percentile of 97.1%ile in the JEE Mains examination after taking a drop of 1 year.'}</p>
        </div>
        </div>
        <div className='card-container' style={{backgroundColor:theme===themes.light?"grey":"black"}}>
        <div className='card-title'>
            <h3>{'College'}</h3>
        </div>
        <div className='image-container'>
            <img src={collegepic} alt=''/>
        </div>
        <div className='card-body'>
            <p>{'Currently I am a student of National Institute of Technology, Raipur pursuing Bachelors of Technology in Information Technology. I am a part of the tech team of Ecell. I also have an average CPI of 9.03 across the first 4 semesters of college. Eagerly looking forward to building my career at the moment.'}</p>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Card