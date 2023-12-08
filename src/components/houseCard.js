export default function HouseCard({ house }) {
  house = {
    id: 1,
    name: "Beach House in Collingwood",
    description:
      "This sunny and spacious room is for those traveling light and looking for a comfy and cosy place to lay their head for a night or two. This beach house sits in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets and is close to all the major attractions such as Edinburgh Castle and Arthur's Seat.",
    price: 1280000,
    bedrooms: 1,
    bathrooms: 1,
    beds: 1,
    guests: 2,
    image:
      "https://tailwindcss.com/_next/static/media/beach-house.9b9ee168.jpg",
    location: "Collingwood, Ontario",
  };

  return (
    <div className="p-6 border border-gray-300 hover:border-blue-300 rounded-lg flex">
      <img
        className="w-[158px] h-[191px] rounded-lg mr-6 m-0"
        src="https://via.placeholder.com/158x191"
      />
      <div className="w-full">
        <h2>{house.name}</h2>
        <div className="flex items-center justify-between">
          <span className="text-gray-500">{house.location}</span>
          <span className="bg-blue-500 text-amber-50 py-2 px-4 rounded-lg">
            {house.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
        </div>
      </div>
    </div>
  );
}
