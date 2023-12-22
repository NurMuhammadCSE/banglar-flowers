/* eslint-disable react/prop-types */
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProviders";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";

const Flower = ({ flower }) => {
  const { _id, image, name, price, rating } = flower;
  const [, refetch] = useCart();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = () => {
    const item = {
      flowerId: _id,
      name,
      price,
      rating,
      image,
      email: user?.email,
    };
    if (user && user?.email) {
      fetch(`http://localhost:5000/carts`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Flower Added Successfully",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to the order food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div key={_id} className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Flowers" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price}</p>
          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(flower._id)}
              className="btn btn-accent"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flower;
