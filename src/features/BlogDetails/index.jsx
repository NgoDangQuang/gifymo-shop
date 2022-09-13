import { Twitter } from '@mui/icons-material';
import FacebookOutlined from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Breadcrumbs, Typography } from '@mui/material';
import { BlogDetail, commentBlogDetail } from 'api/BlogDetails';
import { useEffect } from 'react';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import CommentBlogDetails from './commentBlogDetails';
import './styles.css';

function BlogDetails(props) {
  const data = BlogDetail;
  const dataComment = commentBlogDetail;

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });
  return (
    <div className="layout-blog-details border-bottom-background">
      <div className="container-blog-details ">
        <div className="layout-content-blog-details ">
          <div className="breadcrums-blog-details flex j-center">
            <Breadcrumbs aria-label="breadcrumb" className="breadcrums">
              <Link to="/gifymo-shop">Gifymo</Link>
              <Link to="/gifymo-shop/blogs">Blog</Link>
              <Typography color="text.primary">{data.title}</Typography>
            </Breadcrumbs>
          </div>
          <div className="blog-details-title">
            <h3>How To Get Away With Murder In The Workplace</h3>
          </div>
          <div className="blog-details-post-on">
            <h5>By: </h5>
            <h4>{data.creator}</h4>
            <h5>Post on: </h5>
            <h4>{data.update}</h4>
            <h5>Comment: </h5>
            <h4>{dataComment.length}</h4>
            <h5>Categories</h5>
            <h4>{data.categories}</h4>
          </div>

          <div className="blog-details-content border-bottom-background">
            <div className="blog-detail-img">
              <img src={data.img} alt="" />
            </div>
            <div className="blog-detail-text-content">
              <h4>{data.content[0]}</h4>
              <div className="blog-details-quote j-center">
                <RiDoubleQuotesL className="icon-quote" />
                <div className="text-quote">
                  <h3>{data.quote}</h3>
                  <h4>{data.author}</h4>
                </div>
              </div>
              {data.content.map((item, index) => index !== 0 && <h4>{data.content[index]}</h4>)}
            </div>
          </div>

          <div className="product-items-share border-bottom-background flex j-center">
            <p>Share: </p>
            <FacebookOutlined fontSize="medium" className="icon-share-product" />
            <Twitter fontSize="medium" className="icon-share-product" />
            <InstagramIcon fontSize="medium" className="icon-share-product" />
            <LinkedInIcon fontSize="medium" className="icon-share-product" />
            <GoogleIcon fontSize="medium" className="icon-share-product" />
            <PinterestIcon className="icon-share-product" />
            <MailIcon fontSize="medium" className="icon-share-product" />
          </div>

          <div className="flex j-center">
            <div className="layout-comment-blog-detail">
              <CommentBlogDetails dataComment={dataComment} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
