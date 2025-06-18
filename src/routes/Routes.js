import { Spin } from "antd";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { ver } from "../constants/url";
import { startLoadEstatus } from "../context/actions/estatusActions";
import { startLoadMotivos } from "../context/actions/motivosActions";
import LayoutPage from "../layout/LayoutPage";

import Servicios from "../views/servicios/Servicios";
import PrivateRoute from "./PrivateRoute";
import Logo from "../assets/Logo.jpg";
import Detalle from "../views/detalle/Detalle";
export default function Routes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadEstatus());
    dispatch(startLoadMotivos());
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <div style={{ textAlign: "center" }}>
        <img src={Logo} style={{ marginBottom: 10, height: 40 }} />
      </div>
      <Router>
        <Switch>
          <LayoutPage>
            <Suspense
              fallback={
                <div style={{ marginTop: 30 }}>
                  {" "}
                  <Spin size="large" />
                </div>
              }
            >
              <PrivateRoute
                isAuthenticated={true}
                exact
                path="/"
                component={Servicios}
              />
              <PrivateRoute
                isAuthenticated={true}
                exact
                path="/detalle/:folioAsignacion"
                component={Detalle}
              />
            </Suspense>
            <div className="ver">ver {ver}</div>
          </LayoutPage>
        </Switch>
      </Router>
    </div>
  );
}
