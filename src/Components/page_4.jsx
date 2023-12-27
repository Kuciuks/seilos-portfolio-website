import "../Styles/page_4.css"
import Inv1 from '../assets/invitation1.jpg'
import Inv2 from '../assets/invitation2.jpg'

export default function Page_4() {
  return (
    <div className="page_4_container">
      <div className="invitation">
        <img src={Inv1} className="inv-img"/>
      </div>
      <div className="instructions">
        <img src={Inv2} className="inv-img"/>
      </div>
    </div>
  )
}
