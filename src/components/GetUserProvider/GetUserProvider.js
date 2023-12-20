import React, { useEffect } from "react";
import { userService } from "../../../services/userServices";
import { useDispatch } from "react-redux";
import { SET_MY_CVS, SET_SAVED_LIST, SET_USER } from "@/store/types/userTypes";
import { getCurrentUser } from "@/store/action/userAction";
//Chay de kiem tra user truoc khi vao app
const GetUserProvider = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    // (async () => {
    //   try {
    //     const { data } = await userService.me();
    //     dispatch({ type: SET_USER, payload: data.data });
    //     dispatch({ type: SET_SAVED_LIST, payload: data.saved });
    //     dispatch({ type: SET_MY_CVS, payload: data.myCvs });
    //   } catch (error) {
    //     localStorage.removeItem("token");
    //   }
    // })();
    dispatch(getCurrentUser());
  }, []);

  return <>{children}</>;
};

export default GetUserProvider;
