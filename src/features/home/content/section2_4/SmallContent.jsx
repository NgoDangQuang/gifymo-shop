import { Link } from 'react-router-dom';
import './styles.css';

function SmallContent(props) {
  const { data, section4 } = props;
  const { title, subTitle, actionName, image } = data;
  return (
    <div className="small-content layout-item">
      <img src={image} alt="" />
      <div
        className={`layout-content__content layout-location ${
          (section4 && 'layout-small-content-section4') || 'layout-small-content'
        }`}
      >
        <h4>{subTitle}</h4>
        <h2>{title}</h2>
        <Link to="/gifymo-shop/shop">
          <div className="layout-small-content__btn">{actionName}</div>
        </Link>
      </div>
    </div>
  );
}

export default SmallContent;
