import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductPage from "./pages/ProductPage";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/Cart";
import CheckoutSuccess from "./pages/CheckoutSuccess";

// dashboard pages
import AccountView from "./pages/DashboardPages/AccountView";
import InboxView from "./pages/DashboardPages/InboxView";
import VoucherView from "./pages/DashboardPages/VoucherView";
import SavedItemsViews from "./pages/DashboardPages/SavedItemsViews";
import AccountManagementView from "./pages/DashboardPages/AccountManagementView";
import DashboardLayout from "./layouts/DashboardLayout";

// layouts
import RootLayout from "./layouts/RootLayout";
import OrdersView from "./pages/DashboardPages/OrdersView";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blog" element={<Blog />} />
      <Route path="login" element={<Login />} />
      <Route path="drugs/:id" element={<ProductPage />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout-success" element={<CheckoutSuccess />} />
      <Route path="register" element={<Register />} />
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<AccountView />} />
        <Route path="orders" element={<OrdersView />} />
        <Route path="inbox" element={<InboxView />} />
        <Route path="voucher" element={<VoucherView />} />
        <Route path="saved-items" element={<SavedItemsViews />} />
        <Route path="account-management" element={<AccountManagementView />} />
      </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
