/**
 * Получение общей стоимости заказа
 * @returns {(boolean<false> | number)} - возвращает цену float или false
 */
export default function () {
	const totalPriceSelector = '.shortgood_body .shortgood_total';
	const totalPriceElement = document.querySelector(totalPriceSelector);
	if (totalPriceElement) {
		const priceText = totalPriceElement.innerText
			?.split('\n')?.[2]
			?.replace(/ /g, '');
		if (priceText) {
			const priceFloat = parseFloat(priceText);
			return isNaN(priceFloat) ? false : priceFloat;
		}
		return false;
	}
	return false;
}
