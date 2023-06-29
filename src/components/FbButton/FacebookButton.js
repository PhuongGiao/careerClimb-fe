import { facebookSignIn } from "@/store/action/userAction";
import { FacebookOutlined, LoadingOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
const FacebookButton = () => {
  const loading = useSelector((state) => state.userReducer.loading);
  const dispatch = useDispatch();
  return (
    <Button
      disabled={loading}
      onClick={() => dispatch(facebookSignIn())}
      style={{ margin: "20px 0", position: "relative" }}
      block
      size="large"
      type="default"
    >
      {loading ? (
        <LoadingOutlined />
      ) : (
        <div>
          <FacebookOutlined style={{ paddingRight: "10px" }} />
          Continue with Facebook
        </div>
      )}
    </Button>
  );
};

export default FacebookButton;
