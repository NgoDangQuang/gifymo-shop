import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

function SideBarBlog({ categories, tag, blogList, setCategoryBlog }) {
  const handleCategoryBlog = (e) => {
    setCategoryBlog(e);
  };
  return (
    <div>
      <Box mb={5}>
        <h2 className="style__general" style={{ margin: 0, fontWeight: 500 }}>
          Categories
        </h2>
        {categories?.map((item) => (
          <div
            className="product-categories__Item style__general item-categories-blog"
            key={item.id}
            onClick={() => handleCategoryBlog(item?.id)}
          >
            <li>{item?.name}</li>
          </div>
        ))}
      </Box>

      <Box>
        <h2
          className="style__general border-bottom-background"
          style={{ margin: 0, fontWeight: 500, marginTop: '50px' }}
        >
          Tags
        </h2>
        <Box pt={3}>
          {tag?.map((items, index) => (
            <Link
              to={`/gifymo-shop/blogs/${Math.floor(Math.random() * blogList?.length + 1)}`}
              key={index}
            >
              <h5 className="tag-blogs-items">{items}</h5>
            </Link>
          ))}
        </Box>
      </Box>

      <Box>
        <h2
          className="style__general border-bottom-background"
          style={{ margin: 0, fontWeight: 500, marginTop: '50px' }}
        >
          Recent Posts
        </h2>

        <Box pt={3}>
          {blogList?.map(
            (item, index) =>
              index <= 4 && (
                <div className="layout-blogs-item-posts" key={index}>
                  <div className="img-blog-item">
                    <Link to={`/gifymo-shop/blogs/${item.id}`}>
                      <img src={item?.img} alt="" />
                    </Link>
                  </div>
                  <div className="content-blog-item">
                    <Link to={`/gifymo-shop/blogs/${item.id}`}>
                      <h4>{item?.title}</h4>
                    </Link>
                    <h5>{item?.update}</h5>
                  </div>
                </div>
              )
          )}
        </Box>
      </Box>
    </div>
  );
}

export default SideBarBlog;
