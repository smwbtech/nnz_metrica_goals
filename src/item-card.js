/**
 * Script for item card (example: https://nnz-ipc.ru/catalogue/automation/controllers/7000/i-7188ex_cr/)
 *
 */

function $ymt_AddToCartHandler(e) {
	console.log('added to cart');
	const inputAmount = document.querySelector('input[id^="amount"]');
	const priceElement = document.querySelector('.purchase_price');

	if (inputAmount && priceElement) {
		const amount = parseInt(inputAmount.value);
		const price = parseFloat(
			priceElement.firstElementChild.innerText.replace(/ /g, '')
		);
		const total = price * amount;

		console.log(`amount: ${amount}; price: ${price}; total: ${total}`);
	}
	return false;
}

window.onload = () => {
	var addToCartButton = document.querySelector('.cart_button_btn');
	addToCartButton.addEventListener('click', $ymt_AddToCartHandler);
};
