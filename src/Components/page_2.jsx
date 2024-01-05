import '../Styles/page_2.css'
import statement1 from "../assets/artist-statement-phone.jpg"
import statement2 from "../assets/artist-statement-dekstop.jpg"
import { useEffect, useRef, useState } from 'react';
export default function Page_2() {
  const [imageSrc, setImageSrc] = useState(null); // Initialize with the default image
  const widthRef = useRef(0)
  const handleResize = () =>{
    widthRef.current = document.querySelector('.page_2_container').clientWidth;

    if (widthRef.current > 500) {
      setImageSrc(statement2); // Set the larger image source
      console.log("bigger");
    } else {
      setImageSrc(statement1); // Set the smaller image source
      console.log("smaller");
    }
  }

  useEffect(() => {
    window.addEventListener('DOMContentLoaded', handleResize())
    return()=>{
      window.removeEventListener('DOMContentLoaded', handleResize())
    }
  }, []);

  return (  
    <div className="page_2_container">
      <div className='hero'>
        <img className='hero-img' src={imageSrc} alt='' />
      </div>
    </div>
  )
}
