function Card(props) {
  console.log(props);
  return (
    <section aria-labelledby="payment-details-heading">
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="bg-white py-6 px-4 sm:p-6">{props.children}</div>
      </div>
    </section>
  );
}

export default Card;
