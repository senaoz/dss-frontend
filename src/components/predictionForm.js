import { useState } from "react";
import executeModel from "../service/executeModel";

let userInput = [
  3, // bedrooms
  1, // bathrooms
  1180, // sqft_living
  5650, // sqft_lot
  1, // floors
  0, // waterfront
  0, // view
  3, // condition
  7, // grade
  1180, // sqft_above
  0, // sqft_basement
  1955, // yr_built
  0, // yr_renovated
  98178, // zipcode
  47.5112, // lat
  -122.257, // long
  1340, // sqft_living15
  5650, // sqft_lot15
  2014, // year
  10, // month
  13, // day
];

function PredictionForm() {
  const [bedrooms, setBedrooms] = useState(userInput[0]);
  const [bathrooms, setBathrooms] = useState(userInput[1]);
  const [sqft_living, setSqft_living] = useState(userInput[2]);
  const [sqft_lot, setSqft_lot] = useState(userInput[3]);
  const [floors, setFloors] = useState(userInput[4]);
  const [waterfront, setWaterfront] = useState(userInput[5]);
  const [view, setView] = useState(userInput[6]);
  const [condition, setCondition] = useState(userInput[7]);
  const [grade, setGrade] = useState(userInput[8]);
  const [sqft_above, setSqft_above] = useState(userInput[9]);
  const [sqft_basement, setSqft_basement] = useState(userInput[10]);
  const [yr_built, setYr_built] = useState(userInput[11]);
  const [yr_renovated, setYr_renovated] = useState(userInput[12]);
  const [zipcode, setZipcode] = useState(userInput[13]);
  const [lat, setLat] = useState(userInput[14]);
  const [long, setLong] = useState(userInput[15]);
  const [sqft_living15, setSqft_living15] = useState(userInput[16]);
  const [sqft_lot15, setSqft_lot15] = useState(userInput[17]);
  const [year, setYear] = useState(userInput[18]);
  const [month, setMonth] = useState(userInput[19]);
  const [day, setDay] = useState(userInput[20]);

  const [formattedPrice, setFormattedPrice] = useState("");

  const handleSubmit = (e) => {
    setFormattedPrice("Loading...");
    e.preventDefault();
    userInput = [
      bedrooms,
      bathrooms,
      sqft_living,
      sqft_lot,
      floors,
      waterfront,
      view,
      condition,
      grade,
      sqft_above,
      sqft_basement,
      yr_built,
      yr_renovated,
      zipcode,
      lat,
      long,
      sqft_living15,
      sqft_lot15,
      year,
      month,
      day,
    ];
    console.log(userInput);

    executeModel(userInput).then((data) => {
      const predictedPrice = Math.round(data);
      setFormattedPrice(
        "$" + predictedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      );
    });
  };

  return (
    <>
      <h1 className="text-2xl font-bold pb-5">
        {formattedPrice ? `Predicted Price: ${formattedPrice}` : ``}
      </h1>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <label>
            Bedrooms
            <input
              type="number"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              min="0"
            />
          </label>
          <label>
            Bathrooms
            <input
              type="number"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
              min="0"
            />
          </label>
          <label>
            Sqft Living
            <input
              type="number"
              value={sqft_living}
              onChange={(e) => setSqft_living(e.target.value)}
              min="0"
            />
          </label>
          <label>
            Sqft Lot
            <input
              type="number"
              value={sqft_lot}
              onChange={(e) => setSqft_lot(e.target.value)}
              min="0"
            />
          </label>
          <label>
            Floors
            <input
              type="number"
              value={floors}
              onChange={(e) => setFloors(e.target.value)}
              min="1"
            />
          </label>
          <label>
            Waterfront
            <div className="flex items-center w-8/12">
              <input
                className="w-fit"
                type="checkbox"
                checked={waterfront === 1}
                onChange={(e) => setWaterfront(e.target.checked ? 1 : 0)}
              />
            </div>
          </label>
          <label>
            View
            <input
              type="number"
              value={view}
              onChange={(e) => setView(e.target.value)}
              min="0"
            />
          </label>
          <label>
            Condition
            <input
              type="number"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              min="0"
            />
          </label>
          <label>
            Grade
            <input
              type="number"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              min="0"
              max="10"
            />
          </label>
          <label>
            Sqft Above
            <input
              type="number"
              value={sqft_above}
              onChange={(e) => setSqft_above(e.target.value)}
              min="0"
            />
          </label>
          <label>
            Sqft Basement
            <input
              type="number"
              value={sqft_basement}
              onChange={(e) => setSqft_basement(e.target.value)}
              min="0"
            />
          </label>
          <label>
            Year Built
            <input
              type="number"
              value={yr_built}
              onChange={(e) => setYr_built(e.target.value)}
              min="0"
            />
          </label>
          <label>
            Year Renovated
            <input
              type="number"
              value={yr_renovated}
              onChange={(e) => setYr_renovated(e.target.value)}
              min="0"
            />
          </label>
          <label>
            Zipcode
            <input
              type="number"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              min="0"
            />
          </label>
          <label>
            Latitude
            <input
              type="number"
              value={lat}
              onChange={(e) => setLat(e.target.value)}
            />
          </label>
          <label>
            Longitude
            <input
              type="number"
              value={long}
              onChange={(e) => setLong(e.target.value)}
            />
          </label>
          <label>
            Sqft Living 15
            <input
              type="number"
              value={sqft_living15}
              onChange={(e) => setSqft_living15(e.target.value)}
              min="0"
            />
          </label>
          <label>
            Sqft Lot 15
            <input
              type="number"
              value={sqft_lot15}
              onChange={(e) => setSqft_lot15(e.target.value)}
              min="0"
            />
          </label>
          <div className="grid grid-cols-3 gap-4">
            <label>
              Year
              <input
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                min="0"
              />
            </label>
            <label>
              Month
              <input
                type="number"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                min="1"
                max="12"
              />
            </label>
            <label>
              Day
              <input
                type="number"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                min="1"
                max="31"
              />
            </label>
          </div>
          <button type="submit" className="button ">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default PredictionForm;
