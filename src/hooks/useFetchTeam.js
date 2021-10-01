import { useState, useEffect } from "react";
import { API } from "../API";

export const useFetchTeam = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      const { data } = await API.get("/717");
      console.log(data);
      setData(data);
    } catch (e) {
      console.error(e);
      setError(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return [data, loading, error];
};
