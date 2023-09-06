import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
  // Index should not be used as a key, use unique keys. but index is better as
};
export default Body;
