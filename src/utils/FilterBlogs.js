export const filterBlogs = (blogList, id) => {
  let newData = [];
  if (!blogList) return newData;
  if (!id) return blogList;
  for (let i = 0; i < blogList?.length; i++) {
    if (blogList[i].blogCategoryId === id) {
      newData.push(blogList[i]);
    }
  }
  return newData;
};
