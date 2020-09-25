/**
 * Получение данных о товарах при подтверждении заказа
 * зарегистрированным пользователем
 * @returns {(boolean<false> | Array[good])} - массив товаров или false
 */
export default function () {
	const goods = [];
	const goodsSelector = 'div.shortgood_body div.shortgood_entry';
	const goodsElements = document.querySelectorAll(goodsSelector);
	if (goodsElements) {
		const goodsList = Array.from(goodsElements);
		for (const item of goodsList) {
			const name =
				item.querySelector('.shortgood_name')?.innerText ??
				'Название не установлено';
			const articul =
				item.querySelector('.infobox-art')?.innerText ??
				'Артикул не установлен';
			const vendor =
				item.querySelector('.infobox-customer')?.innerText ??
				'Вендор не установлен';
			goods.push({ name, articul, vendor });
		}
		return goods;
	}
	return false;
}
