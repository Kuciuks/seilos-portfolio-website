import '../Styles/page_1.css';
import Bg from "../assets/hero-bg.jpg";
import Bg2 from "../assets/hero-person.png";
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Page_1() {
  const [state, setState] = useState(true);
  const heroRef = useRef(null);
  const personRef = useRef(null)
  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures the event is triggered only once when the element comes into view
  });

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      // console.log(entry)
      setState(true);
    } else {
      // console.log(false)
      setState(false);
    }
  };

  useEffect(() => {
    personRef.current = document.querySelector('.hero2');
    heroRef.current = document.querySelector('.hero1');
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 1, // Trigger the event when the target is fully in view
    });

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [heroRef]); // Add any dependencies if needed

  if (personRef.current != null) {
    if (state) {
      personRef.current.classList.add('run_in');
      personRef.current.classList.remove("run_out");
    } else {
      personRef.current.classList.add('run_out');
      personRef.current.classList.remove("run_in");
    }
  }

  return (
    <div className="page_1_container">
        <div className='hero1' ref={ref}>
          <img className='bg' src={Bg} alt='' />
        </div>

      <div className='hero2'>
        <img className='person' src={Bg2}/>
      </div>
    </div>
  );
}
