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
		const confirmoxElement = document.querySelector('.confirmbox.edituser');
		if (totalCartElement) {
			const totalCartText = totalCartElement.innerText;
			visitParams.order_price = parseFloat(
				totalCartText.split('\n')[2].replace(/ /g, '')
			);
			visitParams.comapny_info.name = confirmoxElement.children[0].innerText.split(
				'\n'
			)[1];
			visitParams.comapny_info.inn = confirmoxElement.children[1].innerText.split(
				'\n'
			)[1];
			visitParams.comapny_info.kpp = confirmoxElement.children[2].innerText.split(
				'\n'
			)[1];

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
