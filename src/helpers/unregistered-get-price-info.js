/**
 * Получение общей стоимости заказа незарегистрированного пользователя
 * @param {Object<HTMLFormElement>} form - форма заказа
 * @returns {(boolean<false> | number)} - возвращает цену float или false 
 */
export default function(form) {
    const totalPriceSelector = '#orderForm > input[type=hidden]:nth-child(3)';
    const totalPriceElement = form.querySelector(totalPriceSelector);
    if(totalPriceElement) {
        const priceText = totalPriceElement.value;
        if(priceText) {
            const priceFloat = parseFloat(priceText);
			return isNaN(priceFloat) ? false : priceFloat;
        }
        return false;

    }
    return false;
}