import { googleSignIn } from "@/store/action/userAction";
import { GoogleOutlined, LoadingOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

const GoogleButton = () => {
  const loading = useSelector((state) => state.userReducer.loading);
  const dispatch = useDispatch();
  return (
    <Button
      disabled={loading}
      onClick={() => dispatch(googleSignIn())}
      style={{ margin: "20px 0 10px", position: "relative" }}
      size="large"
      type="default"
      block
    >
      {loading ? (
        <LoadingOutlined />
      ) : (
        <div>
          <GoogleOutlined style={{ paddingRight: "10px" }} />
          Continue with Google
        </div>
      )}
    </Button>
  );
};

export default GoogleButton;
