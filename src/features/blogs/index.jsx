import { makeStyles } from '@material-ui/core';
import { Breadcrumbs, Typography } from '@mui/material';
import Loading from 'component/Loading';
import { CONTAINER } from 'constants/styles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlogCategories, getBlogList, getBlogTags } from 'redux/getData';
import { useGetAllDataQuery } from 'service/getFullData';
import { filterBlogs } from 'utils/FilterBlogs';
import ContentBlogs from './ContentBlogs';
import SideBarBlog from './SideBarBlog';
import './styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    width: CONTAINER,
    backgroundImage:
      'radial-gradient(circle at 1.5px, rgba(0, 0, 0, 0.349) .75px, rgba(255, 255, 255, 0.11) 1.5px)',
    backgroundSize: '8px 2px',
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'bottom center',
  },
  breadcrums: {
    margin: '20px 0px',
  },
  layout: {
    display: 'flex',
    padding: '30px 0px',
    width: '100%',
  },
  content: {
    width: '70%',
  },
  sidebar: {
    marginLeft: '50px',
    width: '30%',
  },
}));
export function Blogs(props) {
  const classes = useStyles();

  const getBlogCategoriesData = useGetAllDataQuery('blogCategories');
  const getBlogListData = useGetAllDataQuery('blogList');
  const getBlogTagsData = useGetAllDataQuery('tagBlogs');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogCategories(getBlogCategoriesData.data));
    dispatch(getBlogList(getBlogListData.data));
    dispatch(getBlogTags(getBlogTagsData.data));
    window.scrollTo({
      top: 0,
    });
  });

  const { blogCategories, blogList, blogTags } = useSelector((state) => state.getData);
  const [categoryBlog, setCategoryBlog] = useState();

  const blogListById = filterBlogs(blogList, categoryBlog);
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.breadcrums}>
          <Breadcrumbs aria-label="breadcrumb" className="breadcrums">
            <Link to="/gifymo-shop">Gifymo</Link>
            <Typography color="text.primary">Blog</Typography>
          </Breadcrumbs>
        </div>
        <div className={classes.layout}>
          <div className={classes.content}>
            {!blogList && <Loading />}
            <ContentBlogs data={blogListById} />
          </div>
          <div className={classes.sidebar}>
            <SideBarBlog
              categories={blogCategories}
              tag={blogTags}
              blogList={blogList}
              setCategoryBlog={setCategoryBlog}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
