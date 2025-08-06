import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage/Home";
import Register from "../pages/RegisterPage/Register";
import Signin from "../pages/SignInPage/Signin";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplication from "../pages/MyApplication/MyApplication";
import AddJobs from "../pages/AddJobs/AddJobs";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
        {
        path: "/",
        element: <HomePage />
        },
        {
        path: "register",
        element: <Register />
        },
        {
        path: "signIn",
        element: <Signin />
        },
        {
          path: "jobDetails/:id",
          element: <PrivateRoute><JobDetails /></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
        },
        {
          path: "jobApply/:id",
          element: <PrivateRoute><JobApply /></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
        },
        {
          path: "myPostedJobs",
          element: <PrivateRoute><MyPostedJobs /></PrivateRoute>,
        },
        {
          path: "viewApplications/:id",
          element: <PrivateRoute><ViewApplications /></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/jobApplications/job/${params.id}`)
        },
        {
          path: "myApplication",
          element: <PrivateRoute><MyApplication /></PrivateRoute>,
        },
        {
          path: "addJobs",
          element: <PrivateRoute><AddJobs /></PrivateRoute>
        },
        {
          path: "*",
          element: <ErrorPage />
        }
    ],
  },
]);

export default router;
