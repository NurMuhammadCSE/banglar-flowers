import { useEffect, useState } from "react";

const useFlowers = () => {
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/flowers")
      .then((res) => res.json())
      .then((data) => {
        setFlowers(data);
        setLoading(false);
      });
  }, []);
  return [flowers, loading];
};

export default useFlowers;
