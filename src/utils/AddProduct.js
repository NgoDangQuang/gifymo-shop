export const AddProduct = (data, numItem) => {
  let newData = { ...data, count: numItem };
  if (!localStorage.getItem('ListItems')) {
    localStorage.setItem('ListItems', JSON.stringify([newData]));
  } else {
    const oldData = localStorage.getItem('ListItems');
    let Obj = JSON.parse(oldData);

    let num = 0;
    for (let i = 0; i < Obj.length; i++) {
      if (Obj[i].id === newData.id) {
        if (Obj[i].count !== newData.count) {
          Obj[i].count = newData.count;
          localStorage.setItem('ListItems', JSON.stringify(Obj));
        }
        return num++;
      }
    }
    if (num === 0) {
      Obj.push(newData);
      localStorage.setItem('ListItems', JSON.stringify(Obj));
    }
  }
};
