export const filterComment = (comments, products) => {
  if (!comments || !products) {
    return [];
  }
  const lengthComment = comments?.length;
  let listComments = [];
  for (let i = 0; i < 7; i++) {
    listComments.push(Math.floor(Math.random() * lengthComment + 1));
  }
  const dataComments = listComments.map((item) => {
    for (let i = 0; i < lengthComment; i++) {
      if (comments[i].id === item) {
        return comments[i];
      }
    }
  });

  const dataProducts = dataComments?.map((item) => {
    for (let i = 0; i < products.length; i++) {
      if (item?.productId === products[i].id) {
        return products[i];
      }
    }
  });

  let result = [];
  for (let i = 0; i < dataComments.length; i++) {
    const item = {
      id: i,
      name: dataProducts[i]?.name,
      star: dataProducts[i]?.star,
      creator: dataComments[i]?.userName,
      img: dataProducts[i]?.image[0],
      idProducts: dataProducts[i]?.id,
    };
    result.push(item);
  }

  return result;
};
