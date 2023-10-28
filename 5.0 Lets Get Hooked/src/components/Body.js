import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

let listofRestaurants2 = [
  {
    id: "84073",
    name: "Gurukripa Restaurant  Sarwate",
    cloudinaryImageId: "g5txnz35wlrgbskk3r8y",
    costForTwo: "₹250 for two",
    cuisines: [
      "North Indian",
      "Thalis",
      "Indian",
      "Fast Food",
      "Chinese",
      "Beverages",
      "Desserts",
      "Jain",
      "Punjabi",
    ],
    avgRating: 4.1,
  },
  {
    id: "84078",
    name: "KFC",
    cloudinaryImageId: "g5txnz35wlrgbskk3r8y",
    costForTwo: "₹250 for two",
    cuisines: [
      "North Indian",
      "Thalis",
      "Indian",
      "Fast Food",
      "Chinese",
      "Beverages",
      "Desserts",
      "Jain",
      "Punjabi",
    ],
    avgRating: 2.7,
  },
  {
    id: "84071",
    name: "La Pinos's",
    cloudinaryImageId: "g5txnz35wlrgbskk3r8y",
    costForTwo: "₹250 for two",
    cuisines: [
      "North Indian",
      "Thalis",
      "Indian",
      "Fast Food",
      "Chinese",
      "Beverages",
      "Desserts",
      "Jain",
      "Punjabi",
    ],
    avgRating: 4.7,
  },
];

const Body = () => {
  let [listofRestaurants, setListofRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listofRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListofRestaurants(filteredList);
          }}>
          Sort by Rating
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
  // Index should not be used as a key, use unique keys. but index is better as
};
export default Body;
