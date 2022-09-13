import { Link } from 'react-router-dom';
import './styles.css';

function ContentBlogs({ data }) {
  return (
    <div className="set-scroll-content">
      {data.map((item, index) => (
        <div className="blog-items" key={item.id}>
          <Link to="/gifymo-shop/blogs/detail">
            <img src={item.img} alt="" />
          </Link>
          <Link to="/gifymo-shop/blogs/detail">
            <h4>{item.title}</h4>
          </Link>
          <div className="flex">
            <div className="info flex j-between">
              <h3>By: &nbsp;</h3>
              <h2>{item.creator} &nbsp; &nbsp;</h2>
            </div>
            <div className="info flex j-between">
              <h3>Post on: &nbsp;</h3>
              <h2>{item.update}</h2>
            </div>
          </div>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ContentBlogs;
