import '../Styles/page_3.css'
import S_1 from '../assets/seilos-1.jpg'
import S_2 from '../assets/seilos-2.jpg'
import S_3 from '../assets/seilos-3.jpg'
import S_4 from '../assets/seilos-4.jpg'
import arr from '../assets/arrow.png'
import { useRef, useState, useEffect} from 'react'

export default function Page_3() {

  const [currentPage, setCurrentPage] = useState(0)
  const usePageArr = useRef(null)

  useEffect(()=>{
    const left = document.querySelector('.control-left')
    const right = document.querySelector('.control-right')
    usePageArr.current = document.querySelectorAll('.page')
    // console.log(usePageArr.current)

    left.addEventListener('click', handleControlLeft)
    right.addEventListener('click', handleControlRight)
    
    return(()=>{
      left.removeEventListener('click', handleControlLeft)
      right.removeEventListener('click', handleControlRight)
    })
  })


  const handleControlLeft = () => {
    let curr = currentPage
    
    if(curr == 0){
      alert("Cannot scroll left no more!")
    }
    else{
      curr-=1
      // console.log('Clicked left, current page: ',curr)

      setCurrentPage(curr)
      usePageArr.current[curr].scrollIntoView({behavior: 'smooth', block: 'center'})  
    }
  }

  const handleControlRight = () => {
    let curr = currentPage
    
    if(curr == 3){
      alert("Cannot scroll right no more!")
    }
    else{
      curr+=1
      // console.log('Clicked right, current page: ',curr)

      setCurrentPage(curr)
      usePageArr.current[curr].scrollIntoView({behavior: 'smooth', block: 'center'})  
    }
  }

  return (
    <div>
      <div className="page_3_container" id='3'>
        <div className='artist-1 page'>
          <div className='artist-container'>
            <div className='image-1'>
              <img src={S_1} className='image'/>
            </div>
            <div className='title-1'>
              <h1>Seila Zilinskaite. 2023. Untitled.</h1>
              <h1>(Acrylic paint). 46 x 61.</h1>
            </div>
          </div>
        </div>

        <div className='artist-2 page'>
          <div className='artist-container'>
            <div className='image-2'>
              <img src={S_2} className='image'/>
            </div>
            <div className='title-2'>
              <h1>Seila Zilinskaite. 2023. Untitled.</h1>
              <h1>(Acrylic paint). 60 x 75.</h1>
            </div>
          </div>
        </div>

        <div className='artist-3 page'>
          <div className='artist-container'>
            <div className='image-3'>
              <img src={S_3} className='image'/>
            </div>
            <div className='title-3'>
              <h1>Seila Zilinskaite. 2023. Untitled.</h1>
              <h1>(Acrylic paint). 22,5 x 30.</h1>
            </div>
          </div>
        </div>

        <div className='artist-4 page'>
          <div className='artist-container'>
            <div className='image-4'>
              <img src={S_4} className='image'/>
            </div>
            <div className='title-4'>
              <h1>Seila Zilinskaite. 2023. Untitled.</h1>
              <h1>(Acrylic paint). 22,5x30.</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='control-container'>
        <img className='control-left' src={arr}/>
        <img className='control-right' src={arr}/>
      </div>
    </div>
    
  )
}
