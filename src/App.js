import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./main/Home"));
const Header = lazy(() => import("./main/Header"));
const Footer = lazy(() => import("./main/Footer"));
const StoreHome = lazy(() => import("./stores/StoreHome"));
const StorePage = lazy(() => import("./stores/StorePage"));
const SignIn = lazy(() => import("./account/SignIn"));
const SignUp = lazy(() => import("./account/SignUp"));
const Account = lazy(() => import("./account/Account"));
const Handbasket = lazy(() => import("./handbasket/HandbasketPage"));
const Checkout = lazy(() => import("./checkout/Checkout"));
const Search = lazy(() => import("./stores/Search"));
const OrderPlaced = lazy(() => import("./checkout/OrderPlaced"));

function App() {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/storehome">
              <StoreHome />
            </Route>
            <Route path="/storepage/:store_id" component={StorePage} />
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/handbasket" component={Handbasket} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/order-placed" component={OrderPlaced} />
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/search/:search_query" component={Search} />
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
