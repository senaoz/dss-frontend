import { useParams } from "react-router-dom";
import { API, BASE_URL } from "../../service/constant";
import { useEffect, useState } from "react";

export default function House() {
  let { id } = useParams();
  const [theHouse, setTheHouse] = useState({});

  const getHouse = async (id) => {
    const response = await fetch(`${BASE_URL}/houses/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API}`,
      },
    }).then((response) => response.json());

    return response;
  };

  useEffect(() => {
    getHouse(id).then((data) => setTheHouse(data.data));
  }, [id]);

  let house = theHouse.attributes ? theHouse.attributes : {};

  house.image = `https://source.unsplash.com/1600x900/?house,${house?.zipcode}`;
  house.name = `${house?.bedrooms} Bed ${house?.bathrooms} Bath House in #${house?.zipcode}`;
  house.location = `${house?.lat}, ${house?.long}`;
  house.pricePerSqft = Math.round(house.price / house.sqft_living);

  return house.bedrooms ? (
    <>
      <div className="flex gap-8 pt-24 pb-6 items-center">
        <div className="grid w-2/5 space-y-4">
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
            <tbody>
              <tr>
                <th>Attribute</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Renovated</td>
                <td>
                  {house.yr_renovated === 0
                    ? "No"
                    : `Renovated in ${house.yr_renovated}`}
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
                <td>
                  {house.sqft_living
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </td>
              </tr>
              <tr>
                <td>Lot area</td>
                <td>
                  {house.sqft_lot
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="not-prose space-y-4 w-3/5 h-fit">
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
      <div className="pb-16"></div>
    </>
  ) : (
    <div>Loading...</div>
  );
}
