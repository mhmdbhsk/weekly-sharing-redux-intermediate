const currencyFormatter = function (value: number) {
  return value.toLocaleString('id', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export default currencyFormatter;
