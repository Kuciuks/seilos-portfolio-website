import "../Styles/page_5.css"
import Painting1 from "../assets/painting1.jpg"
import Painting2 from "../assets/painting2.jpg"
import Painting3 from "../assets/painting3.jpg"
import Painting4 from "../assets/painting4.jpg"
import Painting5 from "../assets/painting5.jpg"
import Painting6 from "../assets/painting6.jpg"
import Painting7 from "../assets/painting7.jpg"
import Painting8 from "../assets/painting8.jpg"
import arr1 from '../assets/arrow.png'
import { useRef, useState, useEffect} from 'react'

export default function Page_5() {

  const [currentPage, setCurrentPage] = useState(0)
  const usePageArr = useRef(null)

  useEffect(()=>{
    const left = document.querySelector('.control-left-2')
    const right = document.querySelector('.control-right-2')
    usePageArr.current = document.querySelectorAll('.container')
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
      <div className="page_5_container">

        <div className="container">
          <div className="container-flex-control">
            
            <div className="anonym_1">  
              <div className="anonym-img">
                <img src={Painting1} className="a-img"/>
              </div>
              <div className="anonym-title">
                <h1>N. N. age 21 (Lithuania)</h1>
              </div>
            </div>
          
            <div className="anonym_2">  
              <div className="anonym-img">
                <img src={Painting2} className="a-img"/>
              </div>
              <div className="anonym-title">
                <h1>E. T. age 26 (United Kingdom)</h1>
              </div>
            </div>
          </div>
        
        </div>
        
        <div className="container">
          <div className="container-flex-control">

            <div className="anonym_1">
              <div className="anonym-img">
                <img src={Painting3} className="a-img"/>
              </div>
              <div className="anonym-title">
                <h1>K. M. age 20 (Lithuania)</h1>
              </div>
            </div>

            <div className="anonym_2">  
              <div className="anonym-img">
                <img src={Painting4} className="a-img"/>
              </div>
              <div className="anonym-title">
                <h1>S. M. age 21 (United Kingdom)</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="container-flex-control">

            <div className="anonym_1">
              <div className="anonym-img">
                <img src={Painting5} className="a-img"/>
              </div>
              <div className="anonym-title">
                <h1>U. P. age 30 (Denmark)</h1>
              </div>
            </div>
            
            <div className="anonym_2">
              <div className="anonym-img">
                <img src={Painting6} className="a-img"/>
              </div>
              <div className="anonym-title">
                <h1>U. P. age 21 (Sweden)</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="container-flex-control">

            <div className="anonym_1">
              <div className="anonym-img">
                <img src={Painting7} className="a-img"/>
              </div>
              <div className="anonym-title">
                <h1>D. J. age 52 (Lithuania)</h1>
              </div>
            </div>
            
            <div className="anonym_2">
              <div className="anonym-img">
                <img src={Painting8} className="a-img"/>
              </div>
              <div className="anonym-title">
                <h1>A. R. age 18 (United Kingdom)</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='control-container'>
        <img className='control-left-2' src={arr1}/>
        <img className='control-right-2' src={arr1}/>
      </div>
    </div>  
  )
}
