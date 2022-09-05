import slider1_img from './../../../../asset/img/slider1.png';
import './styles.css';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

export default function Slider1(props) {
  return (
    <div className="slider1 flex animation-show-slider">
      <div className="slider1__image">
        <img src={slider1_img} alt="" />
      </div>
      <div className="slider1__content">
        <div className="flex j-center">
          <CloseIcon sx={{ fontSize: '14px' }} />
          <p>New Arrivals</p>
          <CloseIcon sx={{ fontSize: '14px' }} />
        </div>
        <h2>Send Your Love</h2>
        <div className="flex j-center">
          <h3 className="font-h3">FROM</h3>
          <h3 className="font-h3 color-pink">$29.90</h3>
        </div>
        <Link to="/gifymo-shop/shop">
          <div className="slider1__btn">SEND GIFT</div>
        </Link>
      </div>
    </div>
  );
}
