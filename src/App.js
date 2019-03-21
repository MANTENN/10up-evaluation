import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import theme from './App.scss';

const App = () => {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}pages`)
      .then(({ data }) => setPages(data))
      .catch((e) => {
        console.log('log this to the server w/ rocketlog', e);
        return [];
      });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <>
        <Routes pages={pages} />
        <ToastContainer autoClose={8000} />
      </>
    </ThemeProvider>
  );
};
export default App;
