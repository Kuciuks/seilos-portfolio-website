import '../Styles/page_1.css';
import Bg from "../assets/hero-bg.jpg";
import Bg2 from "../assets/hero-person.png";
import { useEffect, useRef, useState} from 'react';
import { useInView } from 'react-intersection-observer';

export default function Page_1() {

  const [state, setState] = useState(true)
  const heroRef = useRef(null)
  const [ref, inView, entry] = useInView({
    rootMargin: `${0}px`,
    root: null,
    threshold: 1,
  });
  

  const handleScroll = () => {
    console.log(inView, entry)

    if(inView){
      setState(true)

    }
    else{
      setState(false)
    }

  }


  if(heroRef.current != null){
    if (state){
      heroRef.current.classList.add('run_in')
      heroRef.current.classList.remove("run_out")
    }
    else{
      heroRef.current.classList.add('run_out')
      heroRef.current.classList.remove("run_in")
    }
  }

  useEffect(()=>{
    heroRef.current = document.querySelector('.hero2')
    window.addEventListener("wheel", handleScroll)
    return()=>{
      window.removeEventListener('wheel', handleScroll)
    }
  })

  
  return (
    <div className="page_1_container" ref={ref}>
      <div className='container'>
        <div className='hero1'>
          <img className='bg' src={Bg} alt='' />
        </div>
      </div>

      <div className='hero2'>
        <img className='person' src={Bg2}/>
      </div>
    </div>
  );
}
