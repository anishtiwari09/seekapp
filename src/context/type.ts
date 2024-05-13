import { AllFilterRegionInterface } from "../data/AllFilterData";

export interface CountryInterface {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        common: string;
        official: string;
      };
    };
  };

  flags: {
    svg: string;
    png: string;
    alt: string;
  };
  population: string;
  region: string;
  capital: string[];
  id: number;
  borders: [];
  cca3: string;
  subregion: string;
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  tld: string[];
}
type InputSearchType = string;
export interface AllDataInterface {
  data: CountryInterface[];
  inputSearch: InputSearchType;
  handleInputSearch: Function;
  handleFilter: Function;
  filter: AllFilterRegionInterface;
  allData: CountryInterface[];
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
