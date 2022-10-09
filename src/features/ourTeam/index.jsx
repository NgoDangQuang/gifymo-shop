import { Grid } from '@mui/material';
import Loading from 'component/Loading';
import { useEffect } from 'react';
import { FaFacebookF, FaGooglePlusG, FaPlus, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getOurTeams } from 'redux/getData';
import { useGetAllDataQuery } from 'service/getFullData';
import './styles.css';

export function OurTeam() {
  const getOurTeamsData = useGetAllDataQuery('ourTeams');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOurTeams(getOurTeamsData.data));
    window.scrollTo({
      top: 0,
    });
  });
  const { ourTeams } = useSelector((state) => state.getData);

  return (
    <div className="root-our-team">
      <div className="container-our-team">
        <div className="layout-our-team-page border-bottom-background">
          <div className="title-our-team flex j-center ">
            <h4 className="border-bottom-background">Our Team</h4>
          </div>
          {!ourTeams && <Loading />}
          {ourTeams && (
            <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={{ xs: 3, md: 3 }}>
              {ourTeams?.map((item, index) => (
                <Grid item xs={2} sm={4} md={3} key={index}>
                  <div className="our-team-items">
                    <div className="avt-member">
                      <img src={item?.avt} alt={item?.name} />
                      <div className="all-icon-our-member">
                        <FaFacebookF className="icon-our-team" />
                        <FaTwitter className="icon-our-team" />
                        <FaYoutube className="icon-our-team" />
                        <FaGooglePlusG className="icon-our-team" />
                      </div>
                    </div>

                    <h3>{item?.name}</h3>
                    <h4>{item?.position}</h4>
                  </div>
                </Grid>
              ))}
              <Grid
                item
                xs={2}
                sm={4}
                md={3}
                sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}
              >
                <div className="our-team-items-join-us">
                  <FaPlus className="icon-join-us" />
                  <h4>We're hiring</h4>
                  <h5>JOIN US</h5>
                </div>
              </Grid>
            </Grid>
          )}
        </div>

        <div className="layout-our-skills border-bottom-background">
          <h4>Our skills</h4>
          <div className="flex">
            <div className="layout-our-skills-content">
              <h4>Html / Paragraph</h4>
              <p>
                Adwords Keyword research for beginners When you embark on your first PPC journey,
                you need to keep a small number of keywords at first. Keyword lists that are
                thousands of words long should be left to the more experienced PPC marketer.
                Ideally, a beginner should use around 100 targeted keywords, anything more will
                probably prove too cumbersome for you to manipulate. If you can’t harness the power
                of large keyword
              </p>
            </div>
            <div className="layout-skill-loading">
              <div className="layout-skill-loading-items">
                <h4>Design</h4>
                <h5 style={{ left: '80%' }}>80%</h5>
                <div className="background-line-gray">
                  <div
                    className="background-line-pink"
                    style={{
                      width: '80%',
                    }}
                  ></div>
                  <div className="circle-line" style={{ left: '80%' }}>
                    <div className="sub-circle-line"></div>
                  </div>
                </div>
              </div>

              <div className="layout-skill-loading-items">
                <h4>CSS / HTML</h4>
                <h5 style={{ left: '90%' }}>90%</h5>
                <div className="background-line-gray">
                  <div
                    className="background-line-pink"
                    style={{
                      width: '90%',
                    }}
                  ></div>
                  <div className="circle-line" style={{ left: '90%' }}>
                    <div className="sub-circle-line"></div>
                  </div>
                </div>
              </div>

              <div className="layout-skill-loading-items">
                <h4>Marketing</h4>
                <h5 style={{ left: '45%' }}>45%</h5>
                <div className="background-line-gray">
                  <div
                    className="background-line-pink"
                    style={{
                      width: '45%',
                    }}
                  ></div>
                  <div className="circle-line" style={{ left: '45%' }}>
                    <div className="sub-circle-line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
