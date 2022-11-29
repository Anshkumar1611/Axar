import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { BiBed, BiBath } from "react-icons/bi";
import { TbSquareRotated } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";

const data = [
  {
    id: "1",
    price: "2000",
    url: "https://media.istockphoto.com/photos/large-modern-house-with-stone-and-walkway-picture-id480960902?k=20&m=480960902&s=612x612&w=0&h=JylU65zbAcIHrUuEz989EPUqP-FSPLHnqKuCbm8wuio=",
    city: "San Antonio",
    formattedAddress: "5314 Park Lk, San Antonio, TX 78244",
    propertyType: "Single Family",
    bedrooms: "4 Bedrooms",
    bathrooms: "2 Bathrooms",
    squareFootage: "1600 msq",
  },
  {
    id: "2",
    type: "1",
    price: "5000",
    url: "https://cdn.pixabay.com/photo/2016/11/21/15/09/apartments-1845884__340.jpg",
    city: "San Francisco",
    formattedAddress: "5314 Park Lk, San Francisco, TX 78244",
    propertyType: "Apartments",
    bedrooms: "20 Bedrooms",
    bathrooms: "15 Bathrooms",
    squareFootage: "11600 msq",
  },
  {
    id: "3",
    type: "2",
    price: "3000",
    url: "https://media.istockphoto.com/photos/house-entrance-porch-with-railings-picture-id515196423?k=20&m=515196423&s=612x612&w=0&h=ec57NDUFVOmnboJjwLl-4ugr7l_BrbQfRWHF1g8s5gU=",
    city: "Portland",
    formattedAddress: "5314 Park Lk, Portland, TX 78244",
    propertyType: "Multi-family",
    bedrooms: "6 Bedrooms",
    bathrooms: "5 Bathrooms",
    squareFootage: "3000 msq",
  },
  {
    id: "4",
    price: "15500",
    url: "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271__340.jpg",
    city: "San Antonio",
    formattedAddress: "5314 Park Lk, San Antonio, TX 78244",
    propertyType: "Bungalow",
    bedrooms: "14 Bedrooms",
    bathrooms: "7 Bathrooms",
    squareFootage: "15000 msq",
  },
  {
    id: "5",
    price: "2250",
    url: "https://media.istockphoto.com/photos/house-in-england-detached-with-small-front-garden-picture-id171384300?k=20&m=171384300&s=612x612&w=0&h=EW4h3SfC_30hueVjHA-AC6QCa-33YOOXmaB1QEeIZ_k=",
    city: "Boston",
    formattedAddress: "5314 Park Lk, Boston, TX 78244",
    propertyType: "Single Family",
    bedrooms: "5 Bedrooms",
    bathrooms: "2 Bathrooms",
    squareFootage: "2250 msq",
  },
  {
    id: "6",
    price: "16000",
    url: "https://cdn.pixabay.com/photo/2017/09/17/18/15/lost-places-2759275__340.jpg",
    city: "San Antonio",
    formattedAddress: "5314 Park Lk, San Antonio, TX 78244",
    propertyType: "Bungalow",
    bedrooms: "12 Bedrooms",
    bathrooms: "8 Bathrooms",
    squareFootage: "14000 msq",
  },
  {
    id: "7",
    type: "1",
    price: "5500",
    url: "https://cdn.pixabay.com/photo/2016/11/21/15/09/apartments-1845884__340.jpg",
    city: "San Antonio",
    formattedAddress: "5314 Park Lk, San Antonio, TX 78244",
    propertyType: "Apartments",
    bedrooms: "18 Bedrooms",
    bathrooms: "18 Bathrooms",
    squareFootage: "11600 msq",
  },
  {
    id: "8",
    price: "2750",
    url: "https://media.istockphoto.com/photos/run-down-bungalow-house-with-blue-garage-picture-id176868516?k=20&m=176868516&s=612x612&w=0&h=z7FVZ2G4BR_RwvMpt2saCKMdHZmqUPKMt0yf8Uwua8Y=",
    city: "San Francisco",
    formattedAddress: "5314 Park Lk, San Francisco, TX 78244",
    propertyType: "Single Family",
    bedrooms: "3 Bedrooms",
    bathrooms: "2 Bathrooms",
    squareFootage: "1600 msq",
  },
  {
    id: "9",
    type: "1",
    price: "5200",
    url: "https://media.istockphoto.com/photos/modern-home-with-swimming-pool-picture-id147205632?k=20&m=147205632&s=612x612&w=0&h=R_VZIGFGFfs8lCGp4J_0nGYTWqkQPnwN37hrqS_tAAs=",
    city: "Boston",
    formattedAddress: "5314 Park Lk, Boston, TX 78244",
    propertyType: "Apartments",
    bedrooms: "12 Bedrooms",
    bathrooms: "8 Bathrooms",
    squareFootage: "11400 msq",
  },
  {
    id: "10",
    type: "2",
    price: "3200",
    url: "https://media.istockphoto.com/photos/front-view-of-newly-constructed-beautiful-home-picture-id501820009?k=20&m=501820009&s=612x612&w=0&h=JLGYx9aJ8brY4NRj1AwclFrQifwVZ9K1R5TfIWZ84Wo=",
    city: "San Antonio",
    formattedAddress: "5314 Park Lk, San Antonio, TX 78244",
    propertyType: "Multi-family",
    bedrooms: "6 Bedrooms",
    bathrooms: "5 Bathrooms",
    squareFootage: "2600 msq",
  },
  {
    id: "11",
    price: "15500",
    url: "https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-sunset-featuring-large-covered-picture-id1208206114?k=20&m=1208206114&s=612x612&w=0&h=kD-KC6BhYB77xoq_5lvDEJe6NrA9iL5r2-UAsFtig0I=",
    city: "Portland",
    formattedAddress: "5314 Park Lk, Portland, TX 78244",
    propertyType: "Bungalow",
    bedrooms: "13 Bedrooms",
    bathrooms: "8 Bathrooms",
    squareFootage: "15500 msq",
  },
  {
    id: "12",
    price: "1900",
    url: "https://media.istockphoto.com/photos/large-modern-house-with-stone-and-walkway-picture-id480960902?k=20&m=480960902&s=612x612&w=0&h=JylU65zbAcIHrUuEz989EPUqP-FSPLHnqKuCbm8wuio=",
    city: "San Francisco",
    formattedAddress: "5314 Park Lk, San Francisco, TX 78244",
    propertyType: "Single Family",
    bedrooms: "5 Bedrooms",
    bathrooms: "3 Bathrooms",
    squareFootage: "1700 msq",
  },
  {
    id: "13",
    type: "2",
    price: "3600",
    url: "https://cdn.pixabay.com/photo/2017/07/26/18/06/sky-2542606__340.jpg",
    city: "Boston",
    formattedAddress: "5314 Park Lk, Boston, TX 78244",
    propertyType: "Multi-family",
    bedrooms: "6 Bedrooms",
    bathrooms: "4 Bathrooms",
    squareFootage: "3200 msq",
  },
  {
    id: "14",
    price: "2100",
    url: "https://media.istockphoto.com/photos/private-house-with-garden-picture-id178509433?k=20&m=178509433&s=612x612&w=0&h=R8nIf3Ml01L8GkPPuFKE-_uYOuiM4sGhAqCoGBkgHAc=",
    city: "Boston",
    formattedAddress: "5314 Park Lk, Boston, TX 78244",
    propertyType: "Single Family",
    bedrooms: "3 Bedrooms",
    bathrooms: "1 Bathrooms",
    squareFootage: "1500 msq",
  },
  {
    id: "15",
    price: "18000",
    url: "https://media.istockphoto.com/photos/back-yard-of-two-story-home-picture-id1348833319?k=20&m=1348833319&s=612x612&w=0&h=0dfiAVxuzb9gWp7CxOk-bZragh-sYgEQPbQKQSo7NBQ=",
    city: "San Francisco",
    formattedAddress: "5314 Park Lk, San Francisco, TX 78244",
    propertyType: "Bungalow",
    bedrooms: "15 Bedrooms",
    bathrooms: "8 Bathrooms",
    squareFootage: "18000 msq",
  },
  {
    id: "16",
    type: "2",
    price: "3800",
    url: "https://cdn.pixabay.com/photo/2016/11/29/04/57/architecture-1867426__340.jpg",
    city: "Portland",
    formattedAddress: "5314 Park Lk, Portland, TX 78244",
    propertyType: "Multi-family",
    bedrooms: "7 Bedrooms",
    bathrooms: "5 Bathrooms",
    squareFootage: "3600 msq",
  },
  {
    id: "17",
    price: "2800",
    url: "https://media.istockphoto.com/photos/modern-cottage-picture-id530444519?k=20&m=530444519&s=612x612&w=0&h=WTH4WWTBMNTDqg20iFygRa4PC6iPsDsd79BDX74dfTw=",
    city: "Boston",
    formattedAddress: "5314 Park Lk, Boston, TX 78244",
    propertyType: "Single Family",
    bedrooms: "4 Bedrooms",
    bathrooms: "2 Bathrooms",
    squareFootage: "1900 msq",
  },
  {
    id: "18",
    price: "18000",
    url: "https://media.istockphoto.com/photos/back-yard-of-two-story-home-picture-id1348833319?k=20&m=1348833319&s=612x612&w=0&h=0dfiAVxuzb9gWp7CxOk-bZragh-sYgEQPbQKQSo7NBQ=",
    city: "San Antonio",
    formattedAddress: "5314 Park Lk, San Antonio, TX 78244",
    propertyType: "Bungalow",
    bedrooms: "10 Bedrooms",
    bathrooms: "6 Bathrooms",
    squareFootage: "18000 msq",
  },
];

function DesignCard() {
  return (
    <div className="flex flex-wrap items-center justify-center ">
      {data.map((items) => {
        const {
          id,
          price,
          url,
          city,
          formattedAddress,
          bedrooms,
          propertyType,
          bathrooms,
          squareFootage,
        } = items;
        return (
          <div
            key={id}
            className="card w-80 m-5 justify-between shadow-xl cursor-pointer bg-base-300"
          >
            <figure>
              <img src={url} alt={city} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-violet-500 font-semibold">
                ${price}
                <p className="text-sm text-white"> / Only</p>
                <FaRegHeart />
              </h2>

              <h2 className="card-title">{city}</h2>
              <p className="text-sm text-white font-semibold">
                {formattedAddress}
              </p>
              <div className="divider"></div>
              <div className="flex justify-between flex-wrap">
                <div className="flex items-center text-violet-500 ">
                  <BiBed />
                  <p className="text-sm text-white font-semibold mx-1">
                    {bedrooms}
                  </p>
                </div>
                <div className="flex items-center text-violet-500">
                  <BiBath />{" "}
                  <p className="text-sm text-white font-semibold mx-1">
                    {bathrooms}
                  </p>
                </div>
                <div className="flex items-center text-violet-500">
                  <TbSquareRotated />{" "}
                  <p className="text-sm text-white font-semibold mx-1">
                    {squareFootage}
                  </p>
                </div>
                <div className="flex items-center text-violet-500">
                  <AiOutlineHome />{" "}
                  <p className="text-sm text-white font-semibold mx-1">
                    {propertyType}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DesignCard;
