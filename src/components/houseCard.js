export default function HouseCard({ house }) {
  house = {
    id: 4594,
    house_id: "2470100110",
    date: "2014-08-04",
    price: 5570000,
    bedrooms: 5,
    bathrooms: 5,
    created_at: "2023-12-08 20:14:50.268292",
    updated_at: "2023-12-08 20:14:50.268615",
    published_at: "2023-12-08 20:14:50.268742",
    created_by_id: 1,
    updated_by_id: 1,
    sqft_living: 9200,
    sqft_lot: 35069,
    floors: 2,
    waterfront: 0,
    view: 0,
    condition: 3,
    grade: 13,
    sqft_above: 6200,
    sqft_basement: 3000,
    yr_built: 2001,
    yr_renovated: 0,
    zipcode: 98039,
    lat: 47.6289,
    long: -122.233,
    sqft_living_15: 3560,
    sqft_lot_15: 24345,
  };

  house.image = `https://source.unsplash.com/1600x900/?house,${house?.zipcode}`;
  house.name = `${house?.bedrooms} Bed ${house?.bathrooms} Bath House in #${house?.zipcode}`;
  house.location = `${house?.lat}, ${house?.long}`;
  house.pricePerSqft = Math.round(house.price / house.sqft_living);

  return (
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
          {house.sqft_lot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} sqft
          lot
        </div>

        <div className="bg-blue-500 text-amber-50 py-2 px-4 rounded-lg w-fit">
          {house.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
      </div>
    </div>
  );
}
