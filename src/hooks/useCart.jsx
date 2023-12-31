import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

export const useCart = () => {
  const { user } = useContext(AuthContext);

  const token = localStorage.getItem("access-token");

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      if (!user?.email) {
        return [];
      }
      const res = await fetch(
        `http://localhost:5000/carts?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });

  return [cart, refetch];
};
