import { Twitter } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import FacebookOutlined from '@mui/icons-material/FacebookOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RemoveIcon from '@mui/icons-material/Remove';
import { Rating } from '@mui/material';
import Loading from 'component/Loading';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { changeCategoriesToName } from 'utils/ChangeTypeCategories';

function ProductItems({ dataReview }) {
  const { categories, productDetail } = useSelector((state) => state.getData);

  const typeCategory = changeCategoriesToName(categories, productDetail?.categoryId);
  const [buyCount, setBuyCount] = useState(1);
  const [like, setLike] = useState(false);
  const [imageShow, setImageShow] = useState(0);
  return (
    <>
      {!productDetail && <Loading />}
      {productDetail && (
        <div className="product-items">
          <div className="product-items__image">
            <div className="flex j-center">
              {productDetail.image && (
                <div className="previewImage">
                  <img src={productDetail?.image[imageShow]} alt="" />
                </div>
              )}
            </div>

            {productDetail.image && (
              <div className="list-imgae__preview flex j-center">
                {productDetail.image.map((item, index) => (
                  <div
                    className="image-preview-item"
                    onClick={() => setImageShow(index)}
                    key={index}
                  >
                    <img src={productDetail?.image[index]} alt=" preview" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="product-items__info">
            <h2>{productDetail?.name}</h2>

            <div className="product-items__price flex">
              <h3>${productDetail?.discounts} &nbsp;</h3>
              <h4>${productDetail?.price}</h4>
            </div>

            <div className="product-items__rating flex">
              <Rating name="read-only" value={productDetail?.star} readOnly precision={0.5} />
              <h5> &nbsp; ({dataReview.length} customer reviews)</h5>
            </div>
            <div className="product-items__description border-bottom-background">
              <p>{productDetail?.description}</p>
            </div>

            <div className="product-items__quantity border-bottom-background flex">
              <p>Quantity:</p>
              <div className="buyCount flex">
                <RemoveIcon
                  fontSize="small"
                  className="icon-hover"
                  onClick={() => setBuyCount(buyCount - 1)}
                />
                <h4>{buyCount}</h4>
                <AddIcon
                  fontSize="small"
                  className="icon-hover"
                  onClick={() => setBuyCount(buyCount + 1)}
                />
              </div>
              <h3>ADD TO CART</h3>
              <div onClick={() => setLike(!like)}>
                {(like && <FavoriteIcon className="icon-favorite" />) || (
                  <FavoriteBorderIcon className="icon-favorite" />
                )}
              </div>
            </div>

            <div className="product-items-share border-bottom-background flex">
              <p>Share:</p>
              <FacebookOutlined fontSize="small" className="icon-share-product" />
              <Twitter fontSize="small" className="icon-share-product" />
              <InstagramIcon fontSize="small" className="icon-share-product" />
              <LinkedInIcon fontSize="small" className="icon-share-product" />
              <GoogleIcon fontSize="small" className="icon-share-product" />
              <PinterestIcon className="icon-share-product" />
              <MailIcon fontSize="small" className="icon-share-product" />
            </div>

            <div className="product-items-categories-tag flex">
              <div className="categories-content flex">
                <h4>Categories:&nbsp;</h4>
                <h4>{typeCategory}</h4>
              </div>
              <div className="categories-content flex">
                <h4>Tags:&nbsp;</h4>
                <h4>{productDetail?.tags?.join(', ')}</h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductItems;
