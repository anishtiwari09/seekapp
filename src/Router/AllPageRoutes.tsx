import React from "react";
import { Route, Routes } from "react-router-dom";
import CountryList from "../Component/CountryList/CountryList";

import CountryDetails from "../Component/CountryDetails/CountryDetails";

export default function AllPageRoutes() {
  return (
    <>
      <Routes>
        <Route path={"/"} Component={CountryList}></Route>
        <Route path={"/details/:id"} Component={CountryDetails}></Route>
        <Route path={"*"} element={<h1>No page found</h1>}></Route>
      </Routes>
    </>
  );
}
