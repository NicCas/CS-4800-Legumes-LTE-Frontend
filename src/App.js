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
const Handbasket = lazy(() => import("./handbasket/HandbasketPage"));

function App() {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/storehome">
              <Header />
              <StoreHome />
              <Footer />
            </Route>
            <Route path="/storepage">
              <Header />
              <StorePage />
              <Footer />
            </Route>
            <Route path="/signin">
              <Header />
              <SignIn />
              <Footer />
            </Route>
            <Route path="/signup">
              <Header />
              <SignUp />
              <Footer />
            </Route>
            <Route path="/handbasket">
              <Header />
              <Handbasket />
              <Footer />
            </Route>
            <Route path="/">
              <Header />
              <Home />
              <Footer />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
