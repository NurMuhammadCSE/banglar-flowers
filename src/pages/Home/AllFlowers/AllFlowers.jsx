import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const AllFlowers = () => {
  const [flowers, setFlowers] = useState([]);
  useEffect(() => {
    fetch("flowers.json")
      .then((res) => res.json())
      .then((data) => {
        setFlowers(data);
      });
  }, []);
  return (
    <div>
      <SectionTitle
        heading={"Glass Vase Flowers"}
        subHeading={"Premium Glass vase"}
      ></SectionTitle>
      <div className="grid md:grid-cols-3 gap-10">
        {flowers.map((flower) => (
          <div key={flower.name} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={flower.image}
                alt="Flowers"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{flower.name}</h2>
              <p>Price: ${flower.price}</p>
              <div className="card-actions">
                <button className="btn btn-accent">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFlowers;
