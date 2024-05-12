import { useContext } from "react";
import Country from "./Country";
import AllDataContext from "../../context/AllDataContext";

export default function AllCountry() {
  const { data } = useContext(AllDataContext);
  return (
    <div className="flex flex-wrap allCountryListContainer">
      {data?.map((country) => (
        <Country key={country?.id} country={country} />
      ))}
    </div>
  );
}
