import './header.css'
import headerImage from '../assets/images/header_image.jpg'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'> React & Node</span>
            <span className='headerTitleLg'>Blog</span>        
        </div>
        <img className="headerImg" src={headerImage} alt="" />
    </div>
  )
}
