import React, { useEffect, useMemo, useRef, useState } from "react";
import { openNotification } from "../Notification";
import { jobService } from "../../../services/jobService";
import qs from "query-string";

const getListJob = async (params) => {
  const { data } = await jobService.getAll(params);
  return data.data;
};
const useSearch = (params) => {
  const newParams = useMemo(() => {
    return qs.parse(params.toString());
  }, [params]);
  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const data = await getListJob(newParams);
        setData(data);
      } catch (error) {
        openNotification("error", "Please try again!!!");
      } finally {
        setLoading(false);
      }
    })();
  }, [newParams]);

  return { data, loading };
};

export default useSearch;
