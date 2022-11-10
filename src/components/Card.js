import React, { useState, useEffect, useCallback } from "react";

const Card = ({ offerPrice, image, name, rating, actualPrice }) => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  const carousel = useCallback(() => {
    setTimeout(() => {
      if (index < image.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 1000);
  }, [index, image.length]);

  useEffect(() => {
    show && carousel();
  }, [show, carousel]);

  return (
    <div className="p-4 cursor-pointer">
      <div className="float-right"></div>

      <div className="card__image">
        <img
          style={{ width: "200px", height: "200px", objectFit: "contain" }}
          onMouseOver={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          src={image[index]}
          alt="images"
        />
      </div>
      <div className="productDet">
        <div className="card__details">
          <p>adidas</p>
          <p style={{ padding: "0", margin: "0" }}>running shoes</p>
          <span className="span1">₹{offerPrice}</span>
        </div>
        <div className="card__size">
          <p>
            size <span>6,7,8,9</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
