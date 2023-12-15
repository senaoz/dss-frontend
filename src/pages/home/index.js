import HouseCard from "../../components/houseCard";
import { API, BASE_URL } from "../../service/constant";
import { useEffect, useState } from "react";
import executeModel from "../../service/executeModel";
import PredictionForm from "../../components/predictionForm";

const Home = () => {
  const [mostPricedHouses, setMostPricedHouses] = useState([]);
  const [biggestLotHouses, setBiggestLotHouses] = useState([]);

  const filters = {
    mostPriced:
      "filters[id][$in][0]=14344&filters[id][$in][1]=21398&filters[id][$in][2]=19953&filters[id][$in][3]=4594",
    biggestLot:
      "filters[id][$in][0]=29&filters[id][$in][1]=7554&filters[id][$in][2]=5331&filters[id][$in][3]=4219",
  };

  const getHouses = async (filters) => {
    const response = await fetch(`${BASE_URL}/houses?${filters}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API}`,
      },
    }).then((response) => response.json());

    return response;
  };

  useEffect(() => {
    getHouses(filters.mostPriced).then((data) =>
      setMostPricedHouses(
        data.data.map((house) => ({
          ...house,
        })),
      ),
    );

    getHouses(filters.biggestLot).then((data) =>
      setBiggestLotHouses(
        data.data.map((house) => ({
          ...house,
        })),
      ),
    );
  }, []);

  return (
    <div className="relative isolate px-6 lg:px-8 z-10">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/30">
            Announcing our methods for the price predictions.{" "}
            <a
              href="https://docs.google.com/document/d/1S1MPKzWqVo03Pg6UEoOhEzbp_V514K9tKRtgVzbqHKg/edit?usp=sharing"
              className="font-semibold"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Easy way to find a perfect price for your property
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are using linear regression to predict the price of your property
            based on the data we have collected from the market with more than
            21,000 data points.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" className="button">
              Get started
            </a>
            <a href="#" className="font-semibold">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div id="predict" className="pb-32">
        <h1 className="pt-5">Predict the price of your property!</h1>
        <h2 className="pt-3 pb-5 text-blue-500">Fill out the form below</h2>
        <PredictionForm />
      </div>

      <h1 className="pb-5">Highest Priced Properties</h1>
      <div className="grid grid-cols-2 gap-4">
        {mostPricedHouses?.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
      </div>

      <h1 className="pt-12 pb-5 ">Biggest Lot Properties in King Country</h1>
      <div className="grid grid-cols-2 gap-4">
        {biggestLotHouses?.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
      </div>

      <div id="aim">
        <h2 className="pt-12 pb-5">Aim of Project</h2>
        <p>
          The aim of building a predictive model for house prices is to develop
          a tool that can accurately estimate the sale prices of houses in the
          King County area, including Seattle, based on various features or
          attributes associated with the houses. This predictive model can
          assist real estate professionals, buyers, sellers, and investors in
          making informed decisions about pricing, purchasing, and selling
          houses in the region.
        </p>
      </div>

      <div id="data">
        <h2 className="pt-6 pb-5">
          Data Source: House Sales in King County, USA
        </h2>
        <p>
          This dataset has been shared on the Kaggle platform under the title
          <a href="https://www.kaggle.com/datasets/harlfoxem/housesalesprediction/data">
            "House Sales in King County, USA"
          </a>{" "}
          with the aim of predicting home sales, in this link; and the data size
          is 2.52 MB. The dataset at hand encompasses comprehensive information
          on house sales within King County, an area that includes the vibrant
          urban center of Seattle. It comprises a total of 21 columns, offering
          insights into various aspects of the housing market.
        </p>

        <p>
          This dataset presents a valuable resource for exploring and assessing
          the dynamics of the real estate market in King County. It allows for a
          comprehensive analysis of the factors influencing house prices,
          including property characteristics, location, and various other
          relevant features. With its detailed information on individual
          property sales, the dataset facilitates the construction and
          evaluation of predictive models for house prices. Moreover, the
          inclusion of geographical coordinates provides an opportunity for
          spatial analysis, enabling researchers to explore any potential
          spatial trends or patterns in housing prices within the region.
          Furthermore, the dataset's temporal dimension, with the inclusion of
          the sale dates, offers the potential to investigate any temporal
          trends or seasonality effects that might influence the housing market
          in King County.
        </p>
      </div>
    </div>
  );
};

export default Home;
