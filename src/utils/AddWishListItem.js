export const AddWishListItem = (data) => {
  let newData = { ...data };
  if (!localStorage.getItem('WishList')) {
    localStorage.setItem('WishList', JSON.stringify([newData]));
  } else {
    const oldData = localStorage.getItem('WishList');
    let Obj = JSON.parse(oldData);

    let num = 0;
    for (let i = 0; i < Obj.length; i++) {
      if (Obj[i].id === newData.id) {
        num++;
      }
    }
    if (num === 0) {
      Obj.push(newData);
      localStorage.setItem('WishList', JSON.stringify(Obj));
    }
  }
};
