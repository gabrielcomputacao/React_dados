import { Pessoa, Snap } from "@/models/models";
import React from "react";

export interface IContextSnap {
  mainEntity: Snap;
  mainPerson: Pessoa;
}

const DataContext = React.createContext<IContextSnap>({} as IContextSnap);

export default DataContext;
