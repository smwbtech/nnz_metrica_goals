/**
 * Отрпавка параметров визита Yandex Metrika
 * при оформлении заказа зарегистрироваашися пользователем
 * path: /emarket/purchasing_one_step/payment_choose/
 * @param {object<MouseEvent>} e
 * @returns {boolean} - всегда возвращает true
 */

function $ymt_purchaseConfirmationHandler(e) {
	e.preventDefault();
	try {
		const visitParams = {
			comapny_info: {
				name: null,
				inn: null,
				kpp: null,
			},
			order_price: null,
			currency: 'USD',
		};
		const totalCartElement = document.querySelector(
			'.totalcart .totalcart_price'
		);
		const confirmboxElement = document.querySelector(
			'.confirmbox.edituser'
		);
		if (totalCartElement && confirmboxElement) {
			const totalCartText = totalCartElement.innerText;
			visitParams.order_price = parseFloat(
				totalCartText.split('\n')[2].replace(/ /g, '')
			);
			visitParams.comapny_info.name =
				confirmboxElement.children?.[0]?.innerText?.split('\n')?.[1] ??
				'не установлено';
			visitParams.comapny_info.inn =
				confirmboxElement.children?.[1]?.innerText?.split('\n')?.[1] ??
				'не установлено';
			visitParams.comapny_info.kpp =
				confirmboxElement.children?.[2]?.innerText?.split('\n')?.[1] ??
				'не установлено';

			ym(
				48468320,
				'reachGoal',
				'purchaseConfirmed_authorized',
				visitParams
			);
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
		form.addEventListener('click', $ymt_purchaseConfirmationHandler, {
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
