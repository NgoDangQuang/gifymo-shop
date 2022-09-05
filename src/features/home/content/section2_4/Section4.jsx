import banner3 from './../../../../asset/img/h1-banner3.jpg';
import banner4 from './../../../../asset/img/h1-banner4.jpg';
import BigContent from './BigContent';
import SmallContent from './SmallContent';
import './styles.css';

const dataSmallContent = {
  title: '$19.99',
  subTitle: 'Shop Online Gifts Under',
  actionName: 'SHOP NOW',
  image: banner3,
};
const dataBigContent = {
  title: '30% Off Home Decor',
  subTitle: 'Amazing Gifts',
  actionName: 'SHOP NOW',
  image: banner4,
};
function Section4(props) {
  return (
    <div className="layout-section">
      <SmallContent data={dataSmallContent} section4 />
      <BigContent data={dataBigContent} section4 />
    </div>
  );
}

export default Section4;
