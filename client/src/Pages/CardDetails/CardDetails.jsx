import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardDetailsDesign from "../../Components/Design/CardDetailsDesign";

const CardDetails = () => {
  const { id } = useParams();
  const [cardDetails, setCardDetails] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCardDetails(data);
      });
  }, [id]);

  if (!cardDetails) {
    return (
       <div className="flex justify-center items-center">
         <span className="loading loading-dots loading-xl text-[#9F62F2]"></span>
       </div>
    );
  }

  return (
    <div>
      <CardDetailsDesign
        key={cardDetails._id}
        _id={cardDetails._id}
        image={cardDetails.image}
        description={cardDetails.description}
        condition={cardDetails.condition}
        usage={cardDetails.usage}
        title={cardDetails.title}
        price_min={cardDetails.price_min}
        price_max={cardDetails.price_max}
        created_at={cardDetails.created_at}
        seller_image={cardDetails.seller_image}
        seller_name={cardDetails.seller_name}
        seller_contact={cardDetails.seller_contact}
        location={cardDetails.location}
        status={cardDetails.status}
      />
    </div>
  );
};

export default CardDetails;
