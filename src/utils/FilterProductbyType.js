import { changeCategoriesToId } from './ChangeTypeCategories';

function FilterByPrice(data, minPrice, maxPrice) {
  let dataFilter = [];
  // eslint-disable-next-line array-callback-return
  data.map((item) => {
    if (item.discounts >= minPrice && item.discounts <= maxPrice) {
      dataFilter.push(item);
    }
  });
  return dataFilter;
}

export function FilterProductByType(products, categories, typeProduct, minPrice, maxPrice) {
  if (!products) return [];
  let listFeature = [];

  if (typeProduct === '') {
    listFeature = products;
  }
  const categoryId = changeCategoriesToId(categories, typeProduct);

  // eslint-disable-next-line array-callback-return
  products.map((item) => {
    if (categoryId === item.categoryId) {
      listFeature.push(item);
    }
  });
  const dataFilter = FilterByPrice(listFeature, minPrice, maxPrice);
  return dataFilter;
}
