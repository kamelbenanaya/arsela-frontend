import "./App.css";
import Routing from "./Routing";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";

function App() {
  return (
    <Layout>
      <Routing />
    </Layout>
  );
}

export default App;
