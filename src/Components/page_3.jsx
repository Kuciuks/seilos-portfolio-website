import '../Styles/page_3.css'
import S_1 from '../assets/seilos-1.jpg'
import S_2 from '../assets/seilos-2.jpg'
import S_3 from '../assets/seilos-3.jpg'
import S_4 from '../assets/seilos-4.jpg'

export default function Page_3() {


  return (
    <div className="page_3_container" id='3'>

        <div className='artist-1'>
          <div className='artist-container'>
            <div className='image-1'>
              <img src={S_1} className='image'/>
            </div>
            <div className='title-1'>
              <h1>Tile of the artist work</h1>
            </div>
          </div>
        </div>

        <div className='artist-2'>
          <div className='artist-container'>
            <div className='image-2'>
              <img src={S_2} className='image'/>
            </div>
            <div className='title-2'>
              <h1>Tile of the artist work</h1>
            </div>
          </div>
        </div>

        <div className='artist-3'>
          <div className='artist-container'>
            <div className='image-3'>
              <img src={S_3} className='image'/>
            </div>
            <div className='title-3'>
              <h1>Tile of the artist work</h1>
            </div>
          </div>
        </div>

        <div className='artist-4'>
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
  )
}
