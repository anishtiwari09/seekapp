import { Link } from "react-router-dom";

export default function Country({ country }) {
  return (
    <Link className="countryBox" to={"/details/" + country?.id}>
      <div className="country_flag">
        <img
          src={country?.flags?.svg || country?.flags?.png}
          alt={country?.flags?.alt}
        />
      </div>
      <div className="flex flex-col countryBoxDetails">
        <h2 className="countryTitle">
          {country?.name?.common || country?.name?.official}
        </h2>
        <div className="flex flex-col" style={{ gap: 8 }}>
          <div className="countryText1">
            <b>Population: </b>
            {country?.population || 0}
          </div>
          <div className="countryText1">
            <b>Region: </b>
            {country?.region}
          </div>
          <div className="countryText1">
            <b>Capital: </b>
            {country?.capital?.join(", ")}
          </div>
        </div>
      </div>
    </Link>
  );
}
