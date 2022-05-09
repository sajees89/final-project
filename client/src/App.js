import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Singlepost from "./pages/Singlepost";

import Nomatch from "./pages/Nomatch";
import Footer from "./components/Footer";
// import Header from "./components/Header";
import Navbar from "./components/Header/Navbar";
import ReadAll from "./pages/ReadAll";
import Postdata from "./pages/Postdata";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        {/* <Header /> */}
        <div className="App">
          <Navbar />
          App
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/read" element={<ReadAll />} />
          <Route path="/mypost" element={<Postdata />} />
          <Route path="/profile/:username?" element={<Profile />} />
          <Route path="/post/:id" element={<Singlepost />} />
          <Route path="*" element={<Nomatch />} />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
