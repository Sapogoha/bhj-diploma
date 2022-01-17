/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element) {
    if (!element) {
      throw new Error('Элемент в TransactionsWidget не задан');
    } else {
      this.element = element;
      this.registerEvents();
    }
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    const createIncome = this.element.querySelector('.create-income-button');
    const createExpense = this.element.querySelector('.create-expense-button');

    createIncome.addEventListener('click', () => {
      App.getModal('newIncome').open();
    });
    createExpense.addEventListener('click', () => {
      App.getModal('newExpense').open();
    });
  }
}
