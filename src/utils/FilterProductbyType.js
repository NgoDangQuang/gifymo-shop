function SortByPrice(data, minPrice, maxPrice) {
    let dataFilter = [];
    // eslint-disable-next-line array-callback-return
    data.map((item) => {
        if (item.discounts >= minPrice && item.discounts <= maxPrice) {
            dataFilter.push(item)
        }
    })
    return dataFilter
}

export function FilterProductByType(listFeatureItems, typeProduct, minPrice, maxPrice) {
    let listFeature = []

    if (typeProduct === '') {
        listFeature = listFeatureItems
    }

    // eslint-disable-next-line array-callback-return
    listFeatureItems.map((item) => {
        if (typeProduct === item.type) {
            listFeature.push(item)
        }
    })
    const dataFilter = SortByPrice(listFeature, minPrice, maxPrice)
    return dataFilter
}
