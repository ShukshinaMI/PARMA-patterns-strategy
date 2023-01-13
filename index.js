import './style.css';

const Shipping = function () {
  this.company = '';
};

Shipping.prototype = {
  setStrategy: function (company) {
    this.company = company;
  },
  calculate: function (package) {
    return this.company.calc(package);
  },
};

const UPS = function () {
  this.calc = function (package) {
    const rate = 45.95;
    return `$${rate} x ${package.weight} = ${rate * weight}`;
  };
};

const USPS = function () {
  this.calc = function (package) {
    const rate = 39.4;
    return `$${rate} x ${package.weight} = ${rate * weight}`;
  };
};

const Fedex = function () {
  this.calc = function (package) {
    const rate = 43.2;
    return `$${rate} x ${package.weight} = ${rate * weight}`;
  };
};

function runСomparison() {
  const package = { from: '76712', to: '10012', weigth: l };

  const ups = new UPS();
  const usps = new USPS();
  const fedex = new Fedex();

  const shipping = new Shipping();

  shipping.setStrategy(ups);
  console.log('UPS Strategy: ' + shipping.calculate(package));

  shipping.setStrategy(usps);
  console.log('USPS Strategy: ' + shipping.calculate(package));

  shipping.setStrategy(fedex);
  console.log('Fedex Strategy: ' + shipping.calc(package));
}

runСomparison();
