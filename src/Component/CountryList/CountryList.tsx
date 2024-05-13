import { useContext } from "react";
import SearchBox from "../SearchBox";
import SelectBox from "../SelectBox/SelectBox";
import AllCountry from "./AllCountry";
import AllDataContext from "../../context/AllDataContext";

export default function CountryList() {
  const { darkMode } = useContext(AllDataContext) ?? { darkMode: false };
  return (
    <div className="countryListContainer commonContryContainer">
      <div className="flex justify-between filterContainerBox">
        <SearchBox modePath={darkMode ? "darkMode" : "LightBackground"} />
        <SelectBox modePath={darkMode ? "darkMode" : "LightBackground"} />
      </div>
      <AllCountry />
    </div>
  );
}
