export default function HouseCard({ house }) {
  const { id } = house;
  house = house.attributes;

  house.image = `https://source.unsplash.com/1600x900/?house,${house?.zipcode}`;
  house.name = `${house?.bedrooms} Bed ${house?.bathrooms} Bath House in #${house?.zipcode}`;
  house.location = `${house?.lat}, ${house?.long}`;
  house.price = Math.round(house.price / 1000) * 1000;

  return house.bedrooms ? (
    <a href={`/house/${id}`}>
      <div className="p-6 border border-2 border-gray-300 hover:border-blue-400 rounded-lg flex ">
        <img
          className="w-[160px] h-[200px] rounded-lg mr-6 m-0 object-cover"
          src={house.image}
          alt={house.name}
        />
        <div className="w-full flex flex-col justify-between">
          <h2>{house.name}</h2>
          <div className="font-bold">
            {house.bedrooms} bedrooms, {house.bathrooms} bathrooms
          </div>
          <div>
            {house.sqft_living.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            sqft living -{" "}
            {house.sqft_lot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            sqft lot
          </div>

          <div className="bg-blue-500 text-amber-50 py-2 px-4 rounded-lg w-fit">
            {house.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </div>
        </div>
      </div>
    </a>
  ) : (
    <>Loading...</>
  );
}
