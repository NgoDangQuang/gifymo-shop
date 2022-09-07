
export function SortByPriceLowToHigh(listFeatureItems) {
    let newListFeatureItems = listFeatureItems;

    newListFeatureItems.sort(function (a, b) {
        return a.discounts - b.discounts;
    });
    return newListFeatureItems
}
export function SortByPriceHighToLow(listFeatureItems) {
    let newListFeatureItems = listFeatureItems;

    newListFeatureItems.sort(function (a, b) {
        return b.discounts - a.discounts;
    });
    return newListFeatureItems
}

export function SortByStar(listFeatureItems) {
    let newListFeatureItems = listFeatureItems;

    newListFeatureItems.sort(function (a, b) {
        return a.star - b.star;
    });
    return newListFeatureItems
}

export function SortByNameAZ(listFeatureItems) {
    let newListFeatureItems = listFeatureItems;

    newListFeatureItems.sort((a, b) => {
        const nameA = a.nameItem.toUpperCase(); // ignore upper and lowercase
        const nameB = b.nameItem.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });
    return newListFeatureItems
}
export function SortByNameZA(listFeatureItems) {
    let newListFeatureItems = listFeatureItems;

    newListFeatureItems.sort((a, b) => {
        const nameA = a.nameItem.toUpperCase(); // ignore upper and lowercase
        const nameB = b.nameItem.toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
            return -1;
        }
        if (nameA < nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });
    return newListFeatureItems
}

export function handleChooseFunction(sortItems, listFeatureItems) {
    let newData = []
    if (sortItems === '')
        newData = listFeatureItems
    if (sortItems === 'SortByPriceLowToHigh') {
        newData = SortByPriceLowToHigh(listFeatureItems)
    } else if (sortItems === 'SortByPriceHighToLow') {
        newData = SortByPriceHighToLow(listFeatureItems)
    } else if (sortItems === 'SortByStar') {
        newData = SortByStar(listFeatureItems)
    } else if (sortItems === 'SortByNameAZ') {
        newData = SortByNameAZ(listFeatureItems)
    } else if (sortItems === 'SortByNameZA') {
        newData = SortByNameZA(listFeatureItems)
    }
    return newData
}