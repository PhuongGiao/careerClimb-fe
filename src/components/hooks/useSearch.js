import React, { useEffect, useState } from "react";
import { openNotification } from "../Notification";
import { jobService } from "../../../services/jobService";

const useSearch = (params) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const { data } = await jobService.getAll(params);
        setData(data.data);
      } catch (error) {
        openNotification("error", "Please try again!!!");
      }
    })();
    const inter = setInterval(() => {
      setLoading(false);
    }, 1000);
    return () => clearInterval(inter);
  }, []);

  return { data, loading };
};

export default useSearch;
