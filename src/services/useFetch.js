import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const API_URL = "http://127.0.0.1:8000";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [cookie] = useCookies("mr-token"); // The unique name for this cookie is "mr-token".

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      await new Promise((resolve) => setTimeout(resolve, 3000));

      try {
        const response = await fetch(`${API_URL}${url}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${cookie["mr-token"]}`,
          },
        });

        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
