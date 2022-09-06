import NoData from 'component/NoData';
import './styles.css';

function LayoutContent2(props) {
  const { data } = props;
  if (data.length === 0) return <NoData />;
  return <div>Layout Content 2</div>;
}

export default LayoutContent2;
