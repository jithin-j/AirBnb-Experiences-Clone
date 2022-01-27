import React from "react";
import "../styles/card.css";

const Card = (props) => {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={process.env.PUBLIC_URL + `${props.item.coverImg}`}
        className="card--image"
        alt="Card-Img"
      />
      <div className="card--stats">
        <img
          src={process.env.PUBLIC_URL + "/images/star1.svg"}
          className="card--star"
          alt="star-img"
        />
        <span>{props.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
};

export default Card;
