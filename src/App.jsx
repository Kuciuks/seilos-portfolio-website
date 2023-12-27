import { useRef, useState, useEffect } from 'react';
import './App.css';
import Page1 from './Components/page_1.jsx';
import Page2 from './Components/page_2.jsx';
import Page3 from './Components/page_3.jsx';
import Page4 from './Components/page_4.jsx';
import Page5 from './Components/page_5.jsx';
import Page6 from './Components/page_6.jsx';

export default function App() {

  // const mainRef = useRef(null);
  // const count = useRef(0)

  // useEffect(()=>{
  //   const clientHeight = document.querySelector('.main').clientHeight
  //   console.log(clientHeight/6)


  // })

  // const handleScroll = ()=>{
  //   console.log('scroll')
  //   mainRef.current.style.transform = `translateY(-${count.current}vh)`;
  // }

  // useEffect(()=>{
  //   window.addEventListener("scrollend", handleScroll)

  //   return()=>{
  //     window.removeEventListener("scrollend", handleScroll)
  //   }
    
  // })

  return (
    <div className='main'>
      <div className='page_1' id='pages'>
        <Page1 />
      </div>
      <div className='page_2' id='pages'>
        <Page2 />
      </div>
      <div className='page_3' id='pages'>
        <Page3 />
      </div>
      <div className='page_4' id='pages'>
        <Page4 />
      </div>
      <div className='page_5' id='pages'>
        <Page5 />
      </div>
      <div className='page_6' id='pages'>
        <Page6 />
      </div>
    </div>
  );
}