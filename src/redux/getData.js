import { createSlice } from '@reduxjs/toolkit';

export const getDataSlice = createSlice({
  name: 'getData',
  initialState: {
    categories: [],
    products: [],
    productDetail: [],
    comments: [],
    typeCategory: '',
    setPrice: [],
    minPriceDefault: 0,
    maxPriceDefault: 0,
    recentReviews: [],
    layoutShowItems: 1,
    sortBy: '',
    pages: 0,
    commentById: [],
    descriptionById: [],
    ourTeams: [],
    ourStories: [],
    customerServices: [],
    faq: [],
    blogCategories: [],
    blogList: [],
    blogDetails: [],
    blogTags: [],
    cartItems: [],
    wishList: [],
  },
  reducers: {
    getCategoriesData: (state, action) => {
      state.categories = action.payload;
    },
    getProductsData: (state, action) => {
      state.products = action.payload;
    },
    getProductDetail: (state, action) => {
      state.productDetail = action.payload;
    },
    getCommentsData: (state, action) => {
      state.comments = action.payload;
    },
    setTypeCategory: (state, action) => {
      state.typeCategory = action.payload;
    },
    setPriceRange: (state, action) => {
      state.setPrice = action.payload;
    },
    setPriceDefault: (state, action) => {
      state.minPriceDefault = action.payload[0];
      state.maxPriceDefault = action.payload[1];
    },
    setRecentReviews: (state, action) => {
      state.recentReviews = action.payload;
    },
    setLayoutShowItems: (state, action) => {
      state.layoutShowItems = action.payload;
    },
    setSort: (state, action) => {
      state.sortBy = action.payload;
    },
    setPage: (state, action) => {
      const count = Math.ceil(action.payload[0] / action.payload[1]);
      state.pages = count;
    },
    getCommentById: (state, action) => {
      state.commentById = action.payload;
    },
    getDescriptionById: (state, action) => {
      state.descriptionById = action.payload;
    },
    getOurTeams: (state, action) => {
      state.ourTeams = action.payload;
    },
    getOurStories: (state, action) => {
      state.ourStories = action.payload;
    },
    getCustomerServices: (state, action) => {
      state.customerServices = action.payload;
    },
    getFaq: (state, action) => {
      state.faq = action.payload;
    },
    getBlogCategories: (state, action) => {
      state.blogCategories = action.payload;
    },
    getBlogList: (state, action) => {
      state.blogList = action.payload;
    },
    getBlogDetails: (state, action) => {
      state.blogDetails = action.payload;
    },
    getBlogTags: (state, action) => {
      state.blogTags = action.payload;
    },
    getCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    getWishList: (state, action) => {
      state.wishList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getCategoriesData,
  getProductsData,
  getProductDetail,
  getCommentsData,
  setTypeCategory,
  setPriceRange,
  setPriceDefault,
  setRecentReviews,
  setLayoutShowItems,
  setSort,
  setPage,
  getCommentById,
  getDescriptionById,
  getOurTeams,
  getOurStories,
  getCustomerServices,
  getFaq,
  getBlogCategories,
  getBlogList,
  getBlogDetails,
  getBlogTags,
  getCartItems,
  getWishList,
} = getDataSlice.actions;

export default getDataSlice.reducer;
