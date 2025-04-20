import './TopGreenBar.css'
import { GoHome } from "react-icons/go";
import { PiGreaterThanBold } from "react-icons/pi";
import { Link } from 'react-router-dom';
const TopGreenBar = ({secondLink ,secondPageName }) => {
  return (
    <div className='top-green-bar'>
      <GoHome className='go-home-icon'/>
      <Link to={"/"} className='go-to-this-page' >Home</Link>
      <PiGreaterThanBold   className='greater-than-icon' />
      <Link to={secondLink} className='go-to-this-page'>{secondPageName}</Link>
      
    </div>
  )
}

export default TopGreenBar

