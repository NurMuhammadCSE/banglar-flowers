import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const useFlowers = () => {
  // const [flowers, setFlowers] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:5000/flowers")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setFlowers(data);
  //       setLoading(false);
  //     });
  // }, []);
  // return [flowers, loading];

  const {
    data: flowers = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["flowers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/flowers");
      return res.json();
    },
  });

  return [flowers, loading, refetch];
};

export default useFlowers;
