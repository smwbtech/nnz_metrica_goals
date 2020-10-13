/**
 * Получение информации о компании незарегистрированного пользователя
 * @param {Object<HTMLFormElement>} form - форма заказа
 * @returns {(boolean<false> | Object<company_info>)} - возвращает объект с информацией о компании или false
 */

export default function(form) {

    const company_info = {
        name: '',
        inn: '',
        kpp: '',
    };

    const companyNameSelector = '#orderForm > div:nth-child(11) > div.input.obl > input';
    const companyInnSelector = '#orderForm > div:nth-child(12) > div.input.obl > input';
    const companyKppSelector = '#orderForm > div:nth-child(13) > div.input.obl > input';

    company_info.name = form.querySelector(companyNameSelector)?.value ?? 'Компания не установлена';
    company_info.inn = form.querySelector(companyInnSelector)?.value ?? 'ИНН не установлен';
    company_info.kpp = form.querySelector(companyKppSelector)?.value ?? 'КПП не установлен';

    return company_info;
}