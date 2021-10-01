import { useState, useEffect } from "react";
import { API } from "../API";

export const useFetchTeam = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      const { data: wolverine } = await API.get("/717");
      const { data: thor } = await API.get("/659");
      const { data: hulk } = await API.get("/332");
      const { data: thanos } = await API.get("/655");
      const { data: loki } = await API.get("/414");
      const { data: magneto } = await API.get("/423");

      setData([wolverine, thor, hulk, thanos, loki, magneto]);
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
