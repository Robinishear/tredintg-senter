import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../All-Page/Home/Home";
import Error from "../All-Page/Error/Error";
import Login from "../All-Page/Authintications/login";
import Register from "../All-Page/Authintications/Register";
import BranchesList from "../All-Page/BranchesList/BranchesList";
import StudentsList from "../All-Page/StudentsList/StudentsList";
import CourseList from "../All-Page/CourseList/CourseList";
import StudentResult from "../All-Page/StudentResult/StudentResult";
import OnlineExam from "../All-Page/OnlineExam/OnlineExam";
import Institutes from "../All-Page/Institutes/Institutes";
import PrivateRouts from "../Routs/PrivateRouts";
import AdminRoot from "../All-Page/AdminDhasbort/AdminRoot";
import AdHome from "../All-Page/AdminDhasbort/AdminPage/AdHome";




const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "CourseList",
        element: (
          <PrivateRouts>
            <CourseList />{" "}
          </PrivateRouts>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "BranchesList",
        element: (
          <PrivateRouts>
            <BranchesList />
          </PrivateRouts>
        ),
      },
      {
        path: "StudentsList",
        element: (
          <PrivateRouts>
            {" "}
            <StudentsList />
          </PrivateRouts>
        ),
      },
      {
        path: "StudentResult",
        element: (
          <PrivateRouts>
            <StudentResult />
          </PrivateRouts>
        ),
      },
      {
        path: "OnlineExam",
        element: (
          <PrivateRouts>
            <OnlineExam />
          </PrivateRouts>
        ),
      },
      {
        path: "Institutes",
        element: (
          <PrivateRouts>
            {" "}
            <Institutes />
          </PrivateRouts>
        ),
      },

      {
        path: "*",
        element: <Error />,
      },
    ],
  },
  {
    path: "/",
    element: <AdminRoot />,
    children: [
      {
         path: "AdHome",
        element: <AdHome />,
      },
      
    ],
  },
]);

export default Router;
