import { useContext, useEffect, useState } from "react";
import AllDataContext from "../../context/AllDataContext";
import { Navigate, useParams } from "react-router-dom";
import { CountryInterface } from "../../context/type";

export default function DetailsList() {
  const { allData } = useContext(AllDataContext) ?? { allData: [] };
  const [borderCountry, setBorderCountry] = useState<string[]>([]);
  const { id } = useParams<{ id: string }>() ?? { id: undefined };

  let country: CountryInterface | null =
    id !== undefined ? allData[Number(id)] : null;

  const findBorderCountry = (selectedCountry: CountryInterface) => {
    let borders = selectedCountry?.borders || [];
    let bordersCountry = [];
    for (let item of borders) {
      for (let country of allData) {
        let alpha3Code = country?.cca3 || "";
        if (item === alpha3Code) {
          let name = country?.name?.common || country?.name?.official;
          bordersCountry.push(name);
          break;
        }
      }
    }
    setBorderCountry(bordersCountry);
  };
  useEffect(() => {
    if (country !== null) findBorderCountry(country);
  }, [id]);
  if (!country) {
    return (
      <>
        <h1>Invalid url</h1>
        <Navigate to={"/"} />
      </>
    );
  }
  console.log(country);
  return (
    <div className="flex countryDetailsContainer ">
      <div className="country_flag1">
        <img
          src={country?.flags?.svg || country?.flags?.png}
          alt={country?.flags?.alt}
        />
      </div>

      <div className="flex flex-col grow-1 justify-center">
        <h2 className="countryTitle">
          {country?.name?.common || country?.name?.official}
        </h2>
        <div className="flex group4">
          <div className="flex flex-col ">
            <div>
              <b>Native Name: </b>
              <span className="inline-block">
                {(() => {
                  let nativeNames = [];
                  let native = country?.name?.nativeName || {};
                  for (let key in native) {
                    nativeNames.push(
                      native[key]?.common || native[key]?.official
                    );
                  }

                  return nativeNames.join(", ");
                })()}
                {country?.name?.nativeName?.ron?.common ||
                  country?.name?.nativeName?.ron?.official}
              </span>
            </div>
            <div>
              <b>Population: </b>
              <span className="inline-block">{country?.population || 0}</span>
            </div>
            <div>
              <b>Region: </b>
              <span className="inline-block">{country?.region}</span>
            </div>
            <div>
              <b>Sub Region: </b>
              <span className="inline-block">{country?.subregion}</span>
            </div>
            <div>
              <b>Capital: </b>
              <span className="inline-block">
                {country?.capital.join(", ")}
              </span>
            </div>
          </div>
          <div className="flex flex-col ">
            <div>
              <b>Top Level Domain: </b>
              <span className="inline-block">{country?.tld.join(", ")}</span>
            </div>
            <div>
              <b>Currencies: </b>
              <span className="inline-block">
                {(() => {
                  let arr = [];
                  let { currencies } = country;
                  currencies = currencies || {};
                  for (let key in currencies) {
                    arr.push(currencies[key].name);
                  }
                  return arr.join(", ");
                })()}
              </span>
            </div>
            <div>
              <b>Languages: </b>
              <span className="inline-block">
                {(() => {
                  let arr = [];
                  let { languages } = country;
                  languages = languages || {};

                  for (let key in languages) {
                    arr.push(languages[key]);
                  }

                  return arr.join(", ");
                })()}
              </span>
            </div>
          </div>
        </div>
        <div className="flex borderCountriesContainer">
          <div>Border Countries:</div>
          <div
            className="flex borderCountriesChild2 flex-wrap"
            style={{ gap: 10 }}
          >
            {borderCountry?.map((item, i) => (
              <div
                className="flex borderCountryBox items-center justify-center"
                key={i}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
