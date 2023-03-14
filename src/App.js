import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from './views/Landing';
import Search from './views/Search';
import Product from './views/Product';
import Cart from './views/Cart';
import Checkout from './views/Checkout';

import './App.css';

const router = createBrowserRouter([
  {
    path: "",
    element: <Landing />,
  },
  {
    path: "search",
    element: <Search />
  },
  {
    path: "product",
    element: <Product />
  },
  {
    path: "cart",
    element: <Cart />
  },
  {
    path: "checkout",
    element: <Checkout />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
