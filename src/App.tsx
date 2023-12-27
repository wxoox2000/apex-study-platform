import { Navigate, Route, Routes, useSearchParams } from "react-router-dom";
import SharedLayout from "./Components/SharedLayout";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Task from "./Pages/Task";
import About from "./Pages/About";
import { useDispatch, useSelector } from "react-redux";
import { selectAccessToken } from "./Redux/Auth/selectors";
import { setUserData } from "./Redux/Auth/AuthSlice";
import { useEffect } from "react";

function App() {
  const token = useSelector(selectAccessToken);
  console.log(token);
  const Fn = () => {
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
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <>
                <Home />
                <Fn />
              </>
            }
          />
          <Route path="courses" element={<Courses />}>
            <Route path=":id" element={<Task />} />
          </Route>
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
