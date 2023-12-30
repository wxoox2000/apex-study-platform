import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useSearchParams } from "react-router-dom";
import { setUserData } from "../Redux/Auth/AuthSlice";

const SF_Auth = () => {
    const dispatch = useDispatch();
    const [qParams] = useSearchParams();
    const params:
      | {
          token?: string | null;
          instance?: string | null;
          userID?: string | null;
          orgID?: string | null;
        }
      | any = Object.fromEntries([...qParams]);
    const isParams = Object.keys(params).length === 0;
    useEffect(() => {
      if (!isParams) {
        dispatch(
          setUserData({
            accessToken: params.token,
            instance: params.instance,
            userID: params.userID,
            orgID: params.orgID,
          })
        );
      }
    }, [isParams]);
    return isParams ? null : <Navigate to="/" />;
  };

  export default SF_Auth