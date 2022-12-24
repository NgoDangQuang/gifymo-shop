import { Grid } from '@mui/material';
import { rootData } from 'api/rootData';
import Loading from 'component/Loading';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerServices, getOurStories } from 'redux/getData';
import { useGetAllDataQuery } from 'service/getFullData';
import './styles.css';

export function OurStory() {
  // const getOurStoryData = useGetAllDataQuery('ourStories');
  // const getCustomerServicesData = useGetAllDataQuery('customerServices');
  const getOurStoryData = rootData.ourStories
  const getCustomerServicesData = rootData.customerServices
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOurStories(getOurStoryData));
    dispatch(getCustomerServices(getCustomerServicesData));
    // dispatch(getOurStories(getOurStoryData.data));
    // dispatch(getCustomerServices(getCustomerServicesData.data));
    window.scrollTo({
      top: 0,
    });
  });
  const { ourStories, customerServices } = useSelector((state) => state.getData);

  return (
    <div className="root-our-team">
      <div className="container-our-team">
        <div className="layout-our-team-page border-bottom-background">
          <div className="title-our-team flex j-center ">
            <h4 className="border-bottom-background">Our Story</h4>
          </div>

          {!ourStories && <Loading />}
          {ourStories?.map((item, index) => (
            <div style={{ fontFamily: 'Jost', marginBottom: '80px' }} key={index}>
              {index % 2 === 0 && (
                <div className="j-between flex story-items">
                  <div className="story-items-img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="story-items-content">
                    <div className="story-items-content__content">
                      <h4>{item.title}</h4>
                      <h5>{item.des}</h5>
                    </div>
                  </div>
                </div>
              )}
              {index % 2 === 1 && (
                <div className="j-between flex story-items">
                  <div className="story-items-content">
                    <div className="story-items-content__content">
                      <h4>{item.title}</h4>
                      <h5>{item.des}</h5>
                    </div>
                  </div>
                  <div className="story-items-img">
                    <img src={item.image} alt="" />
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="title-our-team flex j-center ">
            <h4 className="border-bottom-background">Customer services</h4>
          </div>

          {!customerServices && <Loading />}
          <div className="layout-customer-services">
            <div className="layout-customer-services-content">
              <Grid container spacing={{ xs: 4, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {customerServices?.map((items, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <h3>{items?.title}</h3>
                    <h4>{items?.content}</h4>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
