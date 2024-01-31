import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './Pages/App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Plague from './Pages/Plague';

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 720,
      laptop: 830,
      desktop: 1024,
    },
  },
});

const router = createBrowserRouter([
  {
  path: "/",
  element: <App />,
  },
  {
  path: "/Plague",
  element: <Plague />,
  },
  ]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);