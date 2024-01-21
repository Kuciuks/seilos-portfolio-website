import "../Styles/page_5.css"
import Painting1 from "../assets/painting1.jpg"
import Painting2 from "../assets/painting2.jpg"
import Painting3 from "../assets/painting3.jpg"
import Painting4 from "../assets/painting4.jpg"
import Painting5 from "../assets/painting5.jpg"
import Painting6 from "../assets/painting6.jpg"
import Painting7 from "../assets/painting7.jpg"
import Painting8 from "../assets/painting8.jpg"
export default function Page_5() {
  return (
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
  )
}
