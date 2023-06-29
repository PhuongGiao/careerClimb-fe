import React, { useEffect } from "react";
import { userService } from "../../../services/userServices";
import { useDispatch } from "react-redux";
import { SET_USER } from "@/store/types/userTypes";

const GetUserProvider = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await userService.me();
        dispatch({ type: SET_USER, payload: data.data });
      } catch (error) {
        localStorage.removeItem("token");
      }
    })();
  }, []);

  return <>{children}</>;
};

export default GetUserProvider;
