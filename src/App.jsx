import "./index.css";
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar";
import ChatRoom from "./pages/ChatRoom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./pages/Error";
import PrivateRoute from "./pages/PrivateRoute";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
    errorElement: <Error />,
  },
  {
    path: "/chat", element: (
      <PrivateRoute>
        <Navbar />
        <ChatRoom />
      </PrivateRoute>
    )
  }
])

function App() {
  return (
    <RouterProvider router={router}>
      <ToastContainer />
    </RouterProvider>
  )
}

export default App
