import { Route, Routes } from "react-router-dom";
import SharedLayout from "./Components/SharedLayout";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Task from "./Pages/Task";
import About from "./Pages/About";
import SF_Auth from "./Components/SF_Auth";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
