import { Twitter } from '@mui/icons-material';
import FacebookOutlined from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Breadcrumbs, Typography } from '@mui/material';
import { useEffect } from 'react';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlogDetails } from 'redux/getData';
import { useGetAllDataQuery } from 'service/getFullData';
import CommentBlogDetails from './commentBlogDetails';
import './styles.css';

function BlogDetails({ blogId }) {
  const getBlogDetailsData = useGetAllDataQuery(`blogDetails/${blogId}`);
  const dispatch = useDispatch();
  const { blogDetails } = useSelector((state) => state.getData);

  useEffect(() => {
    dispatch(getBlogDetails(getBlogDetailsData.data));
    window.scrollTo({
      top: 0,
    });
  });

  return (
    <div>
      {!blogDetails && <h4>Loading...</h4>}
      {blogDetails && (
        <div className="layout-blog-details border-bottom-background">
          <div className="container-blog-details ">
            <div className="layout-content-blog-details ">
              <div className="breadcrums-blog-details flex j-center">
                <Breadcrumbs aria-label="breadcrumb" className="breadcrums">
                  <Link to="/gifymo-shop">Gifymo</Link>
                  <Link to="/gifymo-shop/blogs">Blog</Link>
                  <Typography color="text.primary">{blogDetails?.title}</Typography>
                </Breadcrumbs>
              </div>
              <div className="blog-details-title">
                <h3>How To Get Away With Murder In The Workplace</h3>
              </div>
              <div className="blog-details-post-on">
                <h5>By: </h5>
                <h4>{blogDetails?.creator}</h4>
                <h5>Post on: </h5>
                <h4>{blogDetails?.updatedAt}</h4>
                <h5>Comment: </h5>
                <h4>{blogDetails.comments?.length}</h4>
                <h5>Categories</h5>
                <h4>{blogDetails?.categories}</h4>
              </div>

              <div className="blog-details-content border-bottom-background">
                <div className="blog-detail-img">
                  <img src={blogDetails?.img} alt="" />
                </div>
                <div className="blog-detail-text-content">
                  <h4>{blogDetails?.content[0]}</h4>
                  <div className="blog-details-quote j-center">
                    <RiDoubleQuotesL className="icon-quote" />
                    <div className="text-quote">
                      <h3>{blogDetails?.quote}</h3>
                      <h4>{blogDetails?.author}</h4>
                    </div>
                  </div>
                  {blogDetails?.content.map(
                    (item, index) => index !== 0 && <h4 key={index}>{blogDetails?.content[index]}</h4>
                  )}
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
                  <CommentBlogDetails dataComment={blogDetails?.comments} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogDetails;
