import Currency from './3-currency';

class Pricing {
  constructor(amount, currencyInstance) {
    this.amount = amount;
    this.currency = currencyInstance;
  }

  get amount() {
    return this.amount;
  }

  set amount(value) {
    this.amount = value;
  }

  get currency() {
    return this.currency;
  }

  set currency(value) {
    this.currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

export default Pricing;
