export const calculateDiscountedPrice = (price: number, discount: number): number => {
    return price - price * discount;
}
