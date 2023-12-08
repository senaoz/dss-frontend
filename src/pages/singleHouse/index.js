export default function House({ house }) {
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
    <>
      <div className="flex gap-8 pb-8 items-center">
        <div className="grid w-1/2 space-y-4">
          <h1>{house.name}</h1>
          <div className="flex align-baseline gap-x-4">
            <h3 className="text-blue-700 flex items-center">
              {house.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h3>

            <span className="flex items-center">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="mr-1 text-slate-400"
                aria-hidden="true"
              >
                <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
              </svg>
              {house.location}
            </span>
          </div>
          <div>
            Built in {house.yr_built}, this {house.sqft_living} living sqft
            single family residence is located in Seattle, WA {house.zipcode}.
            It has {house.bedrooms} bedrooms and {house.bathrooms} bathrooms on
            a {house.sqft_lot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            sqft lot.
          </div>
          <table>
            <tr>
              <th>Attribute</th>
              <th>Value</th>
            </tr>
            <tr>
              <td>Renovated</td>
              <td>
                {house.yr_renovated === 0
                  ? "No"
                  : `It was renovated in ${house.yr_renovated}`}
              </td>
            </tr>
            <tr>
              <td>Waterfront</td>
              <td>{house.waterfront === 0 ? "No" : "Yes"}</td>
            </tr>
            <tr>
              <td>Condition</td>
              <td>{house.condition}</td>
            </tr>
            <tr>
              <td>School Grade</td>
              <td>{house.grade}</td>
            </tr>
            <tr>
              <td>Number of floors</td>
              <td>{house.floors}</td>
            </tr>
            <tr>
              <td>View</td>
              <td>{house.view}</td>
            </tr>
            <tr>
              <td>Living room area</td>
              <td>{house.sqft_living}</td>
            </tr>
            <tr>
              <td>Lot area</td>
              <td>{house.sqft_lot}</td>
            </tr>
          </table>
        </div>
        <div className="not-prose space-y-4 w-1/2 h-fit">
          <img
            src={house.image}
            alt=""
            className="h-90 object-cover rounded-lg"
            loading="lazy"
          />
          <span className="grid grid-cols-2 gap-4 not-prose">
            <img
              src="https://butikevlersapanca.com/web/uploads/ev/6_dscf6046.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
            <img
              src="https://tailwindcss.com/_next/static/media/beach-house-interior-1.f151eb56.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </span>
        </div>
      </div>

      <iframe
        height="450"
        style={{
          border: 0,
          width: "100%",
          borderRadius: "0.5rem",
        }}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=${house.lat},${house.long}`}
      ></iframe>
    </>
  );
}
