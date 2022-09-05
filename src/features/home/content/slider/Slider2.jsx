import slider2_img from './../../../../asset/img/slider2.jpg';
import './styles.css';
import CloseIcon from '@mui/icons-material/Close';

export default function Slider2(props) {
  return (
    <div className="slider2 animation-show-slider">
      <div>
        <div className="flex j-center slider2__stationery">
          <CloseIcon sx={{ fontSize: '14px' }} />
          <p>STAIONERY</p>
          <CloseIcon sx={{ fontSize: '14px' }} />
        </div>
        <div className='slider2__img'>
          <img src={slider2_img} alt="" />
        </div>
        <div className="animation-slider2-content">
          <div className="slider2__content">
            <h2>Unique Gifts</h2>
            <h4>FOR EVERY OCCATION</h4>
          </div>
        </div>
        {/* <div className="flex j-center"> */}
          <h3 className="slider2_font_h3">FROM $2.90</h3>
        {/* </div> */}
      </div>
    </div>
  );
}
