'use strict';
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод отвечающий за добавление суммы к балансу
   * Создает объект транзакции и вызывает addTransaction
   */
  deposit(amount) {
    const directTransaction = {
      transactionId: 0,
      transactionType: 'deposit',
    };
    directTransaction.transactionAmount = amount;
    this.balance += amount;
    this.addTransaction(directTransaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Создает объект транзакции и вызывает addTransaction
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      console.log('Не достатньо коштів для зняття');
    } else {
      const directTransaction = {
        transactionId: 0,
        transactionType: 'withdraw',
      };
      this.balance -= amount;
      directTransaction.transactionAmount = amount;
      this.addTransaction(directTransaction);
    }
  },

  /*
   * Метод добавляющий транзацию в свойство transactions
   * Принимает объект трназкции
   */
  addTransaction(transaction) {
    transaction.transactionId = this.transactions.length;
    this.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    return this.transactions[id];
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let totalSum = 0;
    for (const transaction of this.transactions) {
      if (transaction.transactionType === type) {
        totalSum += transaction.transactionAmount;
      }
    }
    return totalSum;
  },
};

console.log('Balanse', account.getBalance());
console.log(account.deposit(500));
console.log('Balanse', account.getBalance());
console.log('Balanse', account.transactions);
console.log(account.deposit(500));
console.log('Balanse', account.getBalance());
console.log('Balanse', account.transactions);
console.log(account.withdraw(500));
console.log('Balanse', account.getBalance());
console.log('account.transactions:', account.transactions);
console.log('getTransactionDetails:', account.getTransactionDetails(2));
console.log(
  'getTransactionTotal=',
  account.getTransactionTotal(Transaction.DEPOSIT),
);
console.log(account.withdraw(300));
console.log('Balanse', account.getBalance());
console.log('account.transactions:', account.transactions);
console.log('getTransactionDetails:', account.getTransactionDetails(2));
console.log(
  'getTransactionTotal=',
  account.getTransactionTotal(Transaction.WITHDRAW),
);
console.log(account.withdraw(1300));
