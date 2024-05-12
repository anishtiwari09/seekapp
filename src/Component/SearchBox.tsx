import React, { useContext } from "react";
import AllDataContext from "../context/AllDataContext";

export default function SearchBox({ modePath }: { modePath: string }) {
  const { inputSearch, handleInputSearch } = useContext(AllDataContext);
  return (
    <div className="flex items-center searchBoxContainer">
      <div>
        <img src={`/images/icons/${modePath}/search.svg`} />
      </div>
      <div className="grow">
        <input
          placeholder="Search for a country…"
          value={inputSearch}
          onChange={(e) => {
            handleInputSearch(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
