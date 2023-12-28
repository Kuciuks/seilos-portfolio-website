import '../Styles/page_2.css'
import statement1 from "../assets/artist-statement-phone.jpg"
import statement2 from "../assets/artist-statement-dekstop.jpg"
import { useEffect, useRef, useState } from 'react';
export default function Page_2() {
  const [imageSrc, setImageSrc] = useState(statement1); // Initialize with the default image
  const widthRef = useRef(0)
  const handleResize = () =>{
    widthRef.current = document.querySelector(`.page_1_container`).clientWidth;

    if (widthRef.current > 425) {
      setImageSrc(statement2); // Set the larger image source
      console.log("bigger");
    } else {
      setImageSrc(statement1); // Set the smaller image source
      console.log("smaller");
    }
  }

  useEffect(() => {

    window.addEventListener('resize', handleResize)

    return()=>{
      window.removeEventListener('resize', handleResize)

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
