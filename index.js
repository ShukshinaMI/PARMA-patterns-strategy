import './style.css';

const Shipping = function () {
  this.company = '';
};

Shipping.prototype = {
  setStrategy: function (company) {
    this.company = company;
  },

  calculate: function (zip) {
    return this.company.calc(zip);
  },
};

const UPS = function () {
  this.calc = function (zip) {
    const rate = 45.95;
    return `$${rate * zip.weight}`;
  };
};

const USPS = function () {
  this.calc = function (zip) {
    const rate = 39.4;
    return `$${rate * zip.weight}`;
  };
};

const Fedex = function () {
  this.calc = function (zip) {
    const rate = 43.2;
    return `$${rate * zip.weight}`;
  };
};

function runСomparison() {
  const zip = { from: '76712', to: '10012', weight: 2 };

  const ups = new UPS();
  const usps = new USPS();
  const fedex = new Fedex();

  const shipping = new Shipping();

  shipping.setStrategy(ups);
  console.log('UPS Strategy: ' + shipping.calculate(zip));

  shipping.setStrategy(usps);
  console.log('USPS Strategy: ' + shipping.calculate(zip));

  shipping.setStrategy(fedex);
  console.log('Fedex Strategy: ' + shipping.calculate(zip));
}

runСomparison();
