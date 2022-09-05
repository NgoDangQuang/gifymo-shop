import { Link } from 'react-router-dom';
import './styles.css';

function BigContent(props) {
  const { data, section4 } = props;
  const { title, subTitle, actionName, image } = data;
  
  return (
    <div className="big-content layout-item">
      <img src={image} alt="" />
      <div
        className={`layout-content__content ${
          (section4 && 'layout-big-content-section4') || 'layout-big-content'
        }`}
      >
        <h4>{subTitle}</h4>
        <h2>{title}</h2>
        <Link to="/gifymo-shop/shop">
          <div className="layout-content__btn">{actionName}</div>
        </Link>
      </div>
    </div>
  );
}

export default BigContent;
