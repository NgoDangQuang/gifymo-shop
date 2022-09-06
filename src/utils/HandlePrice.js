
export function MinMaxPrice(listFeatureItems) {
    let maxPrice = listFeatureItems[0].discounts;
    let minPrice = listFeatureItems[0].discounts;

    listFeatureItems.map((item) => {
        if (item.discounts > maxPrice) {
            maxPrice = item.discounts;
        }
        if (item.discounts < minPrice) {
            minPrice = item.discounts;
        }
        return [minPrice, maxPrice]
    })
    return [minPrice, maxPrice]
}
