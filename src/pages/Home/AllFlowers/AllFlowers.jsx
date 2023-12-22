/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useFlowers from "../../../hooks/useFlowers";
import { AuthContext } from "../../../providers/AuthProviders";
import Flower from "../Flower/Flower";

const AllFlowers = () => {
  // const [flowers, setFlowers] = useState([]);
  // useEffect(() => {
  //   fetch("flowers.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setFlowers(data);
  //     });
  // }, []);

  const { user } = useContext(AuthContext);
  const [flowers] = useFlowers();


  return (
    <div>
      <SectionTitle
        heading={"Glass Vase Flowers"}
        subHeading={"Premium Glass vase"}
      ></SectionTitle>
      <div className="grid md:grid-cols-3 gap-10">
        {flowers.map((flower) => (
          <Flower key={flower._id} flower={flower}></Flower>
        ))}
      </div>
    </div>
  );
};

export default AllFlowers;
