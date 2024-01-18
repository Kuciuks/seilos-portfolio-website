import { useRef, useState } from 'react'
import '../Styles/page_3.css'
import S_1 from '../assets/seilos-1.jpg'
import S_2 from '../assets/seilos-2.jpg'
import S_3 from '../assets/seilos-3.jpg'
import S_4 from '../assets/seilos-4.jpg'
import { useEffect } from 'react'

export default function Page_3() {

  const [currentPage, setCurrentPage] = useState(0)
  const usePageArr = useRef(null)

  useEffect(()=>{
    const left = document.querySelector('.control-left')
    const right = document.querySelector('.control-right')
    usePageArr.current = document.querySelectorAll('.page')
    console.log(usePageArr.current)

    left.addEventListener('click', handleControlLeft)
    right.addEventListener('click', handleControlRight)
    
    return(()=>{
      left.removeEventListener('click', handleControlLeft)
      right.removeEventListener('click', handleControlRight)
    })
  })


  const handleControlLeft = () => {
    console.log('Clicked left')
    let curr = currentPage
    curr-=1
    setCurrentPage(curr)
    usePageArr.current[curr].scrollIntoView()
  }

  const handleControlRight = () => {
    console.log("Clicked right")
    let curr = currentPage
    curr+=1
    setCurrentPage(curr)
    usePageArr.current[curr].scrollIntoView()
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
              <h1>Tile of the artist work</h1>
            </div>
          </div>
        </div>

        <div className='artist-2 page'>
          <div className='artist-container'>
            <div className='image-2'>
              <img src={S_2} className='image'/>
            </div>
            <div className='title-2'>
              <h1>Tile of the artist work</h1>
            </div>
          </div>
        </div>

        <div className='artist-3 page'>
          <div className='artist-container'>
            <div className='image-3'>
              <img src={S_3} className='image'/>
            </div>
            <div className='title-3'>
              <h1>Tile of the artist work</h1>
            </div>
          </div>
        </div>

        <div className='artist-4 page'>
          <div className='artist-container'>
            <div className='image-4'>
              <img src={S_4} className='image'/>
            </div>
            <div className='title-4'>
              <h1>Tile of the artist work</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='control-container'>
        <div className='control-left'>-</div>
        <div className='control-right'>+</div>
      </div>
    </div>
    
  )
}
