import { useRef, useState, useEffect } from 'react';
import './App.css';
import Page1 from './Components/page_1.jsx';
import Page2 from './Components/page_2.jsx';
import Page3 from './Components/page_3.jsx';
import Page4 from './Components/page_4.jsx';
import Page5 from './Components/page_5.jsx';
import Page6 from './Components/page_6.jsx';
export default function App() {


  const [curr, setCurr] = useState(0)
  const useSectionArray = useRef(null)


  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault(); // Prevent default browser scroll behavior
      let currentP = curr;

      if (e.deltaY > 0) {
        console.log("scroll down");
        currentP += 1;
      } else {
        console.log("scroll up");
        currentP -= 1;
      }

      if (currentP >= 0 && currentP < useSectionArray.current.length) {
        setCurr(currentP);
        useSectionArray.current[currentP].scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    };

    useSectionArray.current = document.querySelectorAll('.mp');

    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchmove", handleScroll)

    return () => {
      window.removeEventListener("wheel", handleScroll, { passive: false });
      window.removeEventListener("touchmove", handleScroll)
    };
  }, [curr]);







  return (
    <div className='main'>
      <div className='page_1 mp' id='pages'>
        <Page1 />
      </div>
      <div className='page_2 mp' id='pages'>
        <Page2 />
      </div>
      <div className='page_3 mp' id='pages'>
        <Page3 />
      </div>
      <div className='page_4 mp' id='pages'>
        <Page4 />
      </div>
      <div className='page_5 mp' id='pages'>
        <Page5 />
      </div>
      <div className='page_6 mp' id='pages'>
        <Page6 />
      </div>
    </div>
  );
}