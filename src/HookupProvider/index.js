import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../store/action/userAction";
import { useRouter } from "next/router";
const HookupProvider = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser(router));
  }, []);
  return <>{children}</>;
};

export default HookupProvider;
