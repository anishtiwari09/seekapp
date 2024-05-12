import React from "react";

export interface AllDataInterface {}
export default React.createContext<AllDataInterface | null>(null);
