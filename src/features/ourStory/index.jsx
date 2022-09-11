import { Grid } from '@mui/material';
import { customService, introduction } from 'api/OurStory';
import './styles.css';

export function OurStory(props) {
  const intro = introduction;
  const customServiceData = customService;
  return (
    <div className="root-our-team">
      <div className="container-our-team">
        <div className="layout-our-team-page border-bottom-background">
          <div className="title-our-team flex j-center ">
            <h4 className="border-bottom-background">Our Story</h4>
          </div>

          <div style={{ fontFamily: 'Jost', marginBottom:'80px' }}>
            <div className="j-between flex story-items">
              <div className="story-items-img">
                <img src={intro[0].image} alt="" />
              </div>
              <div className="story-items-content">
                <div className="story-items-content__content">
                  <h4>{intro[0].title}</h4>
                  <h5>{intro[0].des}</h5>
                </div>
              </div>
            </div>

            <div className="j-between flex story-items">
              <div className="story-items-content">
                <div className="story-items-content__content">
                  <h4>{intro[1].title}</h4>
                  <h5>{intro[1].des}</h5>
                </div>
              </div>
              <div className="story-items-img">
                <img src={intro[1].image} alt="" />
              </div>
            </div>

            <div className="j-between flex story-items">
              <div className="story-items-img">
                <img src={intro[2].image} alt="" />
              </div>
              <div className="story-items-content">
                <div className="story-items-content__content">
                  <h4>{intro[2].title}</h4>
                  <h5>{intro[2].des}</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="title-our-team flex j-center ">
            <h4 className="border-bottom-background">Customer services</h4>
          </div>

          <div className="layout-customer-services">
            <div className="layout-customer-services-content">
              <Grid container spacing={{ xs: 4, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {customServiceData.map((items, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <h3>{items.title}</h3>
                    <h4>{items.content}</h4>
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
