import { Route, Routes, useLocation } from "react-router-dom";
import SharedLayout from "./Components/SharedLayout";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Task from "./Pages/Task";
import About from "./Pages/About";
import SF_Auth from "./Components/SF_Auth";
import { refreshSF_Token } from "./Redux/Auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "./Redux/Auth/selectors";
import { useEffect } from "react";
import { PulseLoader } from "react-spinners";

function App() {
  const dispatch: any = useDispatch();
  const location = useLocation();
  const refreshing = useSelector(selectIsRefreshing);
  const loggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    if (loggedIn) {
      dispatch(refreshSF_Token());
    }
  }, [loggedIn, dispatch, location]);
  return (
    <>
      {refreshing ? (
        <PulseLoader />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              element={
                <>
                  <Home />
                  <SF_Auth />
                </>
              }
            />
            <Route path="courses" element={<Courses />}>
              <Route path=":id" element={<Task />} />
            </Route>
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
