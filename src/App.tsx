import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import { ApolloProvider } from "@apollo/client";
import { client } from "../client";
import Login from './routes/Login';


function App(): React.ReactElement {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider >
  );
}

export default App;
