import { Box, Grid } from '@mui/material';
import { rootData } from 'api/rootData';
import Loading from 'component/Loading';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getOurStories } from 'redux/getData';
import { useGetAllDataQuery } from 'service/getFullData';
import confetti from './../../asset/icons/confetti2.gif';
import gift from './../../asset/icons/gift2.gif';
import stars from './../../asset/icons/stars2.gif';
import aboutUs1 from './../../asset/img/aboutUs1.jpg';
import aboutUs2 from './../../asset/img/aboutUs2.jpg';
import aboutUs3 from './../../asset/img/aboutUs3.jpg';
import './styles.css';

export function AboutUs() {
  // const getOurStoryData = useGetAllDataQuery('ourStories');
  const getOurStoryData = rootData.ourStories
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getOurStories(getOurStoryData.data));
    dispatch(getOurStories(getOurStoryData));
    window.scrollTo({
      top: 0,
    });
  });
  const { ourStories } = useSelector((state) => state.getData);

  return (
    <div className="root-our-team">
      <div className="container-our-team">
        <div className="layout-our-team-page border-bottom-background">
          <div className="title-our-team flex j-center ">
            <h4 className="border-bottom-background">About Us</h4>
          </div>

          {!ourStories && <Loading />}
          {ourStories && (
            <div>
              {ourStories && (
                <div
                  style={{ fontFamily: 'Jost', marginBottom: '80px', paddingBottom: '80px' }}
                  className="border-bottom-background"
                >
                  <div className="j-between flex story-items">
                    <div className="story-items-img">
                      <img src={ourStories[0]?.image} alt="" />
                    </div>
                    <div className="story-items-content">
                      <div className="story-items-content__content">
                        <h4>{ourStories[0]?.title}</h4>
                        <h5>{ourStories[0]?.des}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="j-between flex story-items">
                    <div className="story-items-content">
                      <div className="story-items-content__content">
                        <h4>{ourStories[1]?.title}</h4>
                        <h5>{ourStories[1]?.des}</h5>
                      </div>
                    </div>
                    <div className="story-items-img">
                      <img src={ourStories[1]?.image} alt="" />
                    </div>
                  </div>
                </div>
              )}

              <Box
                sx={{ flexGrow: 1 }}
                pb={10}
                className="layout-about-us-section2 border-bottom-background"
              >
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <div className="about-us-items">
                      <img src={aboutUs1} alt="" />
                      <div className="about-us-items-content-one w-100 text-center">
                        <h5>Valentine's Day</h5>
                        <h3>Love Goes On</h3>
                      </div>
                    </div>
                  </Grid>

                  <Grid item xs={3}>
                    <div className="about-us-items">
                      <img src={aboutUs2} alt="" />
                      <div className="about-us-items-content-two w-100 text-center">
                        <h5>New Collection</h5>
                        <h3>All Occasions</h3>
                        <Link to="/gifymo-shop/shop">
                          <p>SHOP NOW</p>
                        </Link>
                      </div>
                    </div>
                  </Grid>

                  <Grid item xs={6}>
                    <div className="about-us-items">
                      <img src={aboutUs3} alt="" />
                      <div className="about-us-items-content-three text-center">
                        <h5>Christmas Sale</h5>
                        <h3>Up To 40% Off</h3>
                        <Link to="/gifymo-shop/shop">
                          <p>VIEW DETAIL</p>
                        </Link>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Box>

              <Box className="layout-about-us-section3" mt={10}>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <Link to="/gifymo-shop/shop">
                      <div
                        className="layout-about-us-section3-content"
                        style={{ background: '#D5DBE6' }}
                      >
                        <div className="flex j-center">
                          <div className="image-about-us-section3">
                            <img src={gift} alt="gift" />
                          </div>
                        </div>
                        <h3>Delivering quality gifts</h3>
                        <p>Information on its origins</p>
                      </div>
                    </Link>
                  </Grid>

                  <Grid item xs={4}>
                    <Link to="/gifymo-shop/shop">
                      <div
                        className="layout-about-us-section3-content"
                        style={{ background: '#FBE6CE' }}
                      >
                        <div className="flex j-center">
                          <div className="image-about-us-section3">
                            <img src={stars} alt="stars" />
                          </div>
                        </div>
                        <h3>Gifts for all occasions</h3>
                        <p>Variants and technical</p>
                      </div>
                    </Link>
                  </Grid>

                  <Grid item xs={4}>
                    <Link to="/gifymo-shop/shop">
                      <div
                        className="layout-about-us-section3-content"
                        style={{ background: '#FED2CC' }}
                      >
                        <div className="flex j-center">
                          <div className="image-about-us-section3">
                            <img src={confetti} alt="confetti" />
                          </div>
                        </div>
                        <h3>Great customer service</h3>
                        <p>Random lipsum generator</p>
                      </div>
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
