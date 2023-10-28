import { CDN_LINK } from "../utils/constant";
const RestaurantCard = (props) => {
  // const {resName,cusine} = props;
  //destructuring of object
  // props == {resName,cusine} too
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_LINK + resData.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating: {avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
export default RestaurantCard;
