import { Grid } from '@mui/material';
import Loading from 'component/Loading';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFaq } from 'redux/getData';
import { useGetAllDataQuery } from 'service/getFullData';
import { ItemsFaq } from './itemFAQ';
import './styles.css';

export function Faq(props) {
  const getFaqData = useGetAllDataQuery('faq');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFaq(getFaqData.data));
    window.scrollTo({
      top: 0,
    });
  });
  const { faq } = useSelector((state) => state.getData);
  const lengthData = faq?.length / 2;
  return (
    <div className="root-our-team">
      <div className="container-our-team">
        <div className="layout-our-team-page border-bottom-background">
          <div className="title-our-team flex j-center ">
            <h4 className="border-bottom-background">Most Popular Questions</h4>
          </div>
          {!faq && <Loading />}
          <div className="layout-faq">
            <Grid container spacing={{ xs: 4, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item md={6}>
                <Grid container spacing={{ md: 4 }}>
                  {faq?.map(
                    (item, index) =>
                      index < lengthData && (
                        <Grid item xs={2} sm={6} md={12} key={index}>
                          <ItemsFaq data={item} />
                        </Grid>
                      )
                  )}
                </Grid>
              </Grid>

              <Grid item md={6}>
                <Grid container spacing={{ md: 4 }}>
                  {faq?.map(
                    (item, index) =>
                      index >= lengthData && (
                        <Grid item xs={2} sm={6} md={12} key={index}>
                          <ItemsFaq data={item} />
                        </Grid>
                      )
                  )}
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
