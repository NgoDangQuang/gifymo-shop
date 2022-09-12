import { makeStyles } from '@material-ui/core';
import { Breadcrumbs, Typography } from '@mui/material';
import { BlogList, CategoriesBlog, TagBlogs } from 'api/Blogs';
import { CONTAINER } from 'constants/styles';
import { Link } from 'react-router-dom';
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
  const dataBlogs = BlogList;
  const categories = CategoriesBlog;
  const tag = TagBlogs;
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
            <ContentBlogs data={dataBlogs} />
          </div>
          <div className={classes.sidebar}>
            <SideBarBlog categories={categories} tag={tag} blogItems={dataBlogs} />
          </div>
        </div>
      </div>
    </div>
  );
}
