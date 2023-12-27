import '../Styles/page_2.css'
import statement1 from "../assets/artist-statement-phone.jpg"
import statement2 from "../assets/artist-statement-dekstop.jpg"
import { useEffect, useState } from 'react';
export default function Page_2() {
  const [imageSrc, setImageSrc] = useState(statement1); // Initialize with the default image
  
  useEffect(() => {
    const width = document.querySelector(`.page_1_container`).clientWidth;

    if (width > 425) {
      setImageSrc(statement2); // Set the larger image source
      console.log("bigger");
    } else {
      setImageSrc(statement1); // Set the smaller image source
      console.log("smaller");
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
