import slider3_img from './../../../../asset/img/slider3.png';
import './styles.css';
import CloseIcon from '@mui/icons-material/Close';

export default function Slider3(props) {
  return (
    <div className="slider3 flex j-center animation-show-slider">
      <div className="slider3__image">
        <img src={slider3_img} alt="" />
      </div>
      <div className="slider3__content">
        <div className="flex j-center slider3__stationery">
          <CloseIcon sx={{ fontSize: '14px' }} />
          <p>Stationery</p>
          <CloseIcon sx={{ fontSize: '14px' }} />
        </div>
        <h2>Sale 50% Off</h2>
        <h4>OFFICE & STATIONERY</h4>
        <h3>FROM $2.90</h3>
      </div>
    </div>
  );
}
