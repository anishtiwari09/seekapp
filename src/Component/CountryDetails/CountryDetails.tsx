import { useContext } from "react";
import BackButton from "./BackButton";
import DetailsList from "./DetailsList";
import AllDataContext from "../../context/AllDataContext";

export default function CountryDetails() {
  const { darkMode } = useContext(AllDataContext) ?? { darkMode: false };
  return (
    <div className="w-full h-full countryListOuter">
      <div className="countryDetailsOuter w-full h-full">
        <div
          className="countryDetailsContainer commonContryContainer"
          style={{ gap: 80 }}
        >
          <div className="w-full">
            <BackButton modeInput={darkMode ? "darkMode" : "LightBackground"} />
          </div>
          <DetailsList />
        </div>
      </div>
    </div>
  );
}
