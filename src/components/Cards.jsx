function Cards(props) {
  return (
    <div className="flex justify-center m-5">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={props.image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.description}</p>
          <p>RS:{props.price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">
              More Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
