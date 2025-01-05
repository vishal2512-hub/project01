<<<<<<< HEAD
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./component/Navbar/Navbar";
import ProductCard from "./component/ProductCard/ProductCard";


function App() {
  return (
    <div>
      <Navbar />
      <ProductCard />
    </div>
  );
}

=======
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import ProductCard from "./component/ProductCard/ProductCard";
import KidsPage from "./pages/KidsPage";
import "./index.css";
import MensPage from "./pages/MensPage";
import WomenPage from "./pages/WomenPage";
import ProductDetail from "./component/ProductDetail";
import About from "./pages/About";
import Grocery from "./component/Grocery";
import { lazy, Suspense, useState } from "react";
import CompoA from "./component/CompoA";
import UserContext from "./component/Context/Usercontext";

const grocery = lazy(() => import("./component/Grocery"));

function AppLayout() {
  const [userName, setuserName] = useState("Patel mernstack");

  return (
    <UserContext.Provider value={{name:userName,setuserName}}>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <ProductCard /> },
      { path: "/mens", element: <MensPage /> },
      { path: "/women", element: <WomenPage /> },
      { path: "/kids", element: <KidsPage /> },
      { path: "/about", element: <About /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/product/:productid", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

>>>>>>> f40fda7 (Initial commit)
export default App;
