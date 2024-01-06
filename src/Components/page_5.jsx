import "../Styles/page_5.css"
import Painting1 from "../assets/painting1.jpg"
import Painting2 from "../assets/painting2.jpg"
import Painting3 from "../assets/painting3.jpg"
import Painting4 from "../assets/painting4.jpg"
import Painting5 from "../assets/painting5.jpg"
import Painting6 from "../assets/painting6.jpg"
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
              <h1>Information for the artist</h1>
            </div>
          </div>
        
          <div className="anonym_2">  
            <div className="anonym-img">
              <img src={Painting2} className="a-img"/>
            </div>
            <div className="anonym-title">
              <h1>Information for the artist</h1>
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
              <h1>Information for the artist</h1>
            </div>
          </div>

          <div className="anonym_2">  
            <div className="anonym-img">
              <img src={Painting4} className="a-img"/>
            </div>
            <div className="anonym-title">
              <h1>Information for the artist</h1>
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
              <h1>Information for the artist</h1>
            </div>
          </div>
          
          <div className="anonym_2">
            <div className="anonym-img">
              <img src={Painting6} className="a-img"/>
            </div>
            <div className="anonym-title">
              <h1>Information for the artist</h1>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
