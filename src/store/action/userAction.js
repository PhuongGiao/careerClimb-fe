import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import firebase, { auth } from "../../config/firebase";
import {
  SET_AUTH,
  SET_LOADING,
  SET_MY_CVS,
  SET_SAVED_LIST,
  SET_USER,
} from "../types/userTypes";
import { openNotification } from "@/components/Notification";
import { userService } from "../../../services/userServices";

export const configureCaptcha = () => {
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          handleSendOtp();
        },
        defaultCountry: "VN",
      }
    );
  }
};
export const googleSignIn = () => async (dispatch) => {
  const provider = new GoogleAuthProvider();
  try {
    dispatch({ type: SET_LOADING, payload: true });
    const res = await signInWithPopup(auth, provider);
    const { data } = await userService.userWithGG(res);
    dispatch({ type: SET_USER, payload: data.data });
    localStorage.setItem("token", data.token);
    dispatch({ type: SET_SAVED_LIST, payload: data.saved });

    dispatch({ type: SET_MY_CVS, payload: data.myCvs });
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: SET_LOADING, payload: false });
};
export const facebookSignIn = () => async (dispatch) => {
  const provider = new FacebookAuthProvider();
  try {
    dispatch({ type: SET_LOADING, payload: true });
    const res = await signInWithPopup(auth, provider);
    const { data } = await userService.userWithGG(res);
    dispatch({ type: SET_USER, payload: data.data });
    localStorage.setItem("token", data.token);
  } catch (error) {
    if (error.code === "auth/account-exists-with-different-credential") {
    } else {
    }
  }
  dispatch({ type: SET_LOADING, payload: false });
};
export const getCurrentUser = () => async (dispatch) => {
  try {
    dispatch({ type: SET_AUTH, payload: true });
    const { data } = await userService.me();
    dispatch({ type: SET_USER, payload: data.data });

    dispatch({ type: SET_SAVED_LIST, payload: data.saved });

    dispatch({ type: SET_MY_CVS, payload: data.myCvs });
    // console.log(data);
  } catch (error) {
    // router.push("/login-register");
    // localStorage.removeItem("token");
  }
  dispatch({ type: SET_AUTH, payload: false });
};
export const updateUser = (data) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING, payload: true });
    await userService.update(data);
  } catch (error) {
    return openNotification(
      "error",
      error?.response?.data?.message || "Try again !"
    );
  }
  dispatch({ type: SET_LOADING, payload: false });
};
export const logOut = (router) => (dispatch) => {
  router.push("/");
  dispatch({ type: SET_USER, payload: null });
  localStorage.removeItem("token");
  openNotification("success", "Bạn đã đăng xuất");
};
