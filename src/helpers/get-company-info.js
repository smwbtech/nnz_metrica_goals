const company_info = {
	name: '',
	inn: '',
	kpp: '',
};

/**
 * Получение данных о компании при подтверждении заказа
 * зарегистрированным пользователем
 * @returns {(boolean<false> | Object<company_info>)} - возвращает объект с информацией о компании или false
 */
export default function () {
	const CompanyInfoFormSelector =
		'body > div.push_container > div > div.container.container_middle > div > div.row > div.grid5.md6.tb12 > div.edit_block.edituser > form';
	const companyForm = document.querySelector(CompanyInfoFormSelector);
	if (companyForm) {
		const inputElements = companyForm.querySelectorAll('input') ?? [];
		const inputList = Array.from(inputElements);
		if (inputList.length > 0) {
			company_info.name =
				inputList[0]?.value ?? 'Компания не установлена';
			company_info.inn = inputList[1]?.value ?? 'ИНН не установлен';
			company_info.kpp = inputList[2]?.value ?? 'КПП не установлен';
			return company_info;
		}
		return false;
	}
	return false;
}
