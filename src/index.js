import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import "./index.css";
import Home from "./containers/home";
import * as serviceWorker from "./serviceWorker";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0px !important",
    padding: "0px !important",
  },
}));

ReactDOM.render(
  <ThemeProvider>
    <React.StrictMode>
      <div style={useStyles.root}>
        <Home />
      </div>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
