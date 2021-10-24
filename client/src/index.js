import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";

import customTheme from "./utils/theme";

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

