import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./Component/Header/Header";

import AllPageRoutes from "./Router/AllPageRoutes";
import { getAllCountryData } from "./api";
import AllFilterData, { AllFilterRegionInterface } from "./data/AllFilterData";
import { useLocation } from "react-router-dom";
import { CountryInterface } from "./context/type";
import AllDataContext from "./context/AllDataContext";
const delay = 1000;
function App() {
  const [allData, setAllData] = useState<CountryInterface[] | []>([]);
  const [inputSearch, setInputSearch] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const delayRef = useRef<any>(null);
  const [filter, setFilter] = useState<AllFilterRegionInterface>(
    AllFilterData[0]
  );
  const [afterFilterData, setAfterFilterData] = useState<
    CountryInterface[] | []
  >([]);
  const [darkMode, setDarkMode] = useState(false);
  const { pathname } = useLocation();
  const fetchData = async () => {
    try {
      let { data } = await getAllCountryData();
      data = data?.map((item: object, index: number) => ({
        ...item,
        id: index,
      }));
      console.log(data);
      setAllData(data);
      setAfterFilterData(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  const applySearchFilter = (value: string): void => {
    value = value.trim();
    if (!value) {
      handleFilter(filter);
      return;
    }
    let newData = afterFilterData.filter((data) => {
      let common = data?.name?.common || "";
      let official = data?.name?.official || "";
      official = official?.trim().toLowerCase();
      value = value.toLowerCase();
      common = common.trim().toLowerCase();
      return common.includes(value) || official.includes(value);
    });
    setAfterFilterData(newData);
    return;
  };
  const handleInputSearch = (value: string) => {
    setInputSearch(value);
    clearTimeout(delayRef.current);
    delayRef.current = setTimeout(() => {
      applySearchFilter(value);
    }, delay);
  };
  const handleFilter = (selectdFilter: AllFilterRegionInterface): void => {
    setInputSearch("");
    setFilter(selectdFilter);
    if (!selectdFilter?.value) {
      setAfterFilterData(allData);
    } else {
      let newData = allData.filter((item) => {
        let region = item?.region || "";
        region = region?.trim()?.toLowerCase();
        let value = selectdFilter.value.trim().toLowerCase();
        return region === value;
      });
      setAfterFilterData(newData);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AllDataContext.Provider
      value={{
        data: afterFilterData,
        inputSearch,
        handleInputSearch,
        handleFilter,
        filter,
        allData,
        darkMode,
        setDarkMode,
      }}
    >
      <div
        className={`main_container ${darkMode ? "darkMode" : ""} ${
          pathname.includes("details") ? "main_container2" : ""
        }`}
      >
        <Header />
        {loading ? <h3>Loading...</h3> : <AllPageRoutes />}
      </div>
    </AllDataContext.Provider>
  );
}

export default App;
