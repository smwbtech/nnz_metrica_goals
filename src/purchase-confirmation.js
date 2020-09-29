import getComapnyInfo from './helpers/get-company-info.js';
import getOrderInfo from './helpers/get-order-info.js';
import getPriceInfo from './helpers/get-price-info.js';

/**
 * Отрпавка параметров визита Yandex Metrika
 * при оформлении заказа зарегистрироваашися пользователем
 * path: /emarket/purchasing_one_step/payment_choose/
 * @param {object<SubmitEvent>} e
 * @returns {boolean} - всегда возвращает true
 */

function $ymt_purchaseConfirmationHandler(e) {
	e.preventDefault();
	try {
		const order_price = getPriceInfo();
		const company_info = getComapnyInfo();
		const order = getOrderInfo();
		const ym = window.ym ?? null;

		if (
			ym &&
			typeof ym === 'function' &&
			order_price &&
			company_info &&
			order
		) {
			const orderInfo = {
				order_price,
				currency: 'USD',
				order,
			};

			const clientInfo = {
				UserID: `${company_info.inn}-${company_info.kpp}`,
				company_info,
			};

			orderInfo.UserID = `${company_info.inn}-${company_info.kpp}`;
			// Отправляем параметры визита
			ym(
				48468320,
				'reachGoal',
				'purchaseConfirmed_authorized',
				orderInfo
			);

			// Отправляем параметры пользователя
			ym(48468320, 'userParams', clientInfo);
		}
	} catch (e) {
		console.error(e);
	} finally {
		e.currentTarget.submit();
	}
}

/**
 * Init event listeners for form
 */
function $ymt_init() {
	const formSelector =
		'body > div.push_container > div > div.container.container_middle > div > div.row > div.grid5.md6.tb12 > form';
	const form = document.querySelector(formSelector);
	if (form) {
		form.addEventListener('submit', $ymt_purchaseConfirmationHandler, {
			once: true,
		});
	}
}

(function () {
	if (document.readyState !== 'complete') {
		window.addEventListener('load', $ymt_init);
	} else {
		$ymt_init();
	}
})();
