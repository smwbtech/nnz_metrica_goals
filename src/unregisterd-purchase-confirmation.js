import getPriceInfo from './helpers/unregistered-get-price-info.js';
import getCompanyInfo from './helpers/unregistered-get-company-info.js';

/**
 * Отрпавка параметров визита Yandex Metrika
 * при оформлении заказа незарегистрироваашися пользователем
 * path: /emarket/purchase/required/personal/?back=cart
 * @param {object<SubmitEvent>} e
 * @returns {boolean} - всегда возвращает true
 */
function $ymt_unregisteredPurchaseConfirmation(e) {
	e.preventDefault();
    try{
        const order_price = getPriceInfo(e.currentTarget);
        const company_info = getCompanyInfo(e.currentTarget);
        const ym = window.ym ?? null;
        if (
			ym &&
			typeof ym === 'function' &&
			order_price &&
			company_info
		) {

            const orderInfo = {
				order_price,
				currency: 'USD'
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
				'purchaseConfirmed_unauthorized',
				orderInfo
			);

			// Отправляем параметры пользователя
			ym(48468320, 'userParams', clientInfo);
            
            return true;
        }
    }
    catch(e){
        console.error(e);
    }
    finally {
        e.currentTarget.submit();
    }

}

/**
 * Init event listeners for form
 */
function $ymt_init() {
	const formSelector =
		'#orderForm';
	const form = document.querySelector(formSelector);
	if (form) {
		form.addEventListener('submit', $ymt_unregisteredPurchaseConfirmation, {
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