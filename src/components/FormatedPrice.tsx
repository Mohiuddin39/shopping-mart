interface Amount {
  amount: number;
}

const FormatedPrice = ({ amount }: Amount) => {
  const formateAmount = new Number(amount).toLocaleString("en-Us", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
  return <span>{formateAmount}</span>;
};

export default FormatedPrice;
