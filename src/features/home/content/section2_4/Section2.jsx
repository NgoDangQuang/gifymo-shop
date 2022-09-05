import banner1 from './../../../../asset/img/h1-banner1.jpg';
import banner2 from './../../../../asset/img/h1-banner2.jpg';
import BigContent from './BigContent';
import SmallContent from './SmallContent';
import './styles.css';

const dataBigContent = {
  title: "Women's Day",
  subTitle: 'Clearance Sale',
  actionName: 'SHOP NOW',
  image: banner1,
};
const dataSmallContent = {
  title: 'Sale 50% Off',
  subTitle: 'Holiday Offers',
  actionName: 'CODE: GRS18',
  image: banner2,
};
function Section2(props) {
  return (
    <div className="layout-section">
      <BigContent data={dataBigContent} />
      <SmallContent data={dataSmallContent} />
    </div>
  );
}

export default Section2;
