import { useRef, useState, useEffect } from 'react';
import './App.css';
import Page1 from './Components/page_1.jsx';
import Page2 from './Components/page_2.jsx';
import Page3 from './Components/page_3.jsx';
import Page4 from './Components/page_4.jsx';
import Page5 from './Components/page_5.jsx';
import Page6 from './Components/page_6.jsx';
export default function App() {


  // const divRef = useRef(null)
  // const countRef = useRef(null)

  // const handleScroll = () => {
  //   divRef.current = document.querySelector('.main')
  //   countRef.current = document.querySelector('.hero2')
  //   const sections = divRef.current.children;

  //   console.log(sections)

  //   // for (let i = 0; i < sections.length; i++) {
  //   //   const rect = sections[i].getBoundingClientRect();
  //   //   if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
  //   //     console.log(`Scrolled to section ${i + 1}`);
  //   //     if(i == 1){
  //   //       countRef.current.classList.add('run_out')
  //   //       countRef.current.classList.remove('run_in')
  //   //     }
  //   //     else{
  //   //       countRef.current.classList.remove('run_out')
  //   //     }

  //   //     break; // Stop checking further sections
  //   //   }
  //   // }
  // }




  // useEffect(() => {
  //   divRef.current = document.querySelector('.main')
  //   countRef.current = document.querySelector('.hero2')
  //   countRef.current.classList.add('run_in')
  //   window.addEventListener("wheel", handleScroll)
  
  //   return()=>{
  //     window.removeEventListener("wheel", handleScroll)
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