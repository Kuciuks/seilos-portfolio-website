import '../Styles/page_1.css';
import Bg from "../assets/hero-phone.jpg";
import Bg2 from "../assets/hero-dekstop.jpg";
import { useEffect, useState } from 'react';

export default function Page_1() {
  const [imageSrc, setImageSrc] = useState(Bg); // Initialize with the default image

  useEffect(() => {
    const width = document.querySelector(`.page_1_container`).clientWidth;

    if (width > 426) {
      setImageSrc(Bg2); // Set the larger image source
      console.log("bigger");
    } else {
      setImageSrc(Bg); // Set the smaller image source
      console.log("smaller");
    }
  }, []);

  return (
    <div className="page_1_container">
      <div className='hero'>
        <img className='hero-img' src={imageSrc} alt='' />
      </div>
    </div>
  );
}
