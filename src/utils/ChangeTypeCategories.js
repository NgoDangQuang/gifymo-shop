export function changeCategoriesToId(categories, name) {
  if (!categories) return 0;
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].name === name) return categories[i].id;
  }
  return 0;
}
export function changeCategoriesToName(categories, id) {
  if (!categories) return '';
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].id === id) return categories[i].name;
  }
  return '';
}
