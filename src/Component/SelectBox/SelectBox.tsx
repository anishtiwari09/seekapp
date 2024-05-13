import { useContext, useState } from "react";
import AllFilterData from "../../data/AllFilterData";
import AllDataContext from "../../context/AllDataContext";

export default function SelectBox({ modePath }: { modePath: string }) {
  const [open, setOpen] = useState(false);
  const allDataContextValue = useContext(AllDataContext);
  const handleFilter = allDataContextValue!.handleFilter;
  const filter = allDataContextValue!.filter;
  const handleClick = (value: object) => {
    setOpen(false);
    handleFilter(value);
  };
  return (
    <div
      className="flex flex-col filterContainer"
      style={{ position: "relative" }}
    >
      <div
        className="flex justify-between filterRegion"
        onClick={() => setOpen(!open)}
      >
        <div>{filter?.name}</div>
        <div className="flex justify-center items-center">
          <img
            src={`images/icons/${modePath}/chevron_down.svg`}
            className={open ? "rotate-180" : ""}
          />
        </div>
      </div>
      {open && (
        <div
          className="flex flex-col regionList w-full"
          style={{ position: "absolute", top: 60 }}
        >
          {AllFilterData?.map((item, index: number) => {
            return (
              <div onClick={() => handleClick(item)} key={index}>
                {item?.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
