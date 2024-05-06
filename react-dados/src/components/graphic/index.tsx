import {
  ResponsiveContainer,
  BarChart,
  Bar,
  YAxis,
  XAxis,
  Tooltip,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import DataContext from "@/context";
import { useContext, useMemo } from "react";
import { Email, Empresa, Endereco, Pessoa, Telefone } from "@/models/models";
import { capitalizeWords } from "@/utils/functions";

interface IDataMain {
  telefones: Telefone[];
  emails: Email[];
  empresas: Empresa[];
  pessoas: Pessoa[];
  enderecos: Endereco[];
}

export function Graphic() {
  const { mainEntity, mainPerson } = useContext(DataContext);

  const dataMain = useMemo<IDataMain>(() => {
    return {
      telefones: mainEntity.telefone,
      emails: mainEntity.email,
      empresas: mainEntity.empresa,
      pessoas: mainEntity.pessoa,
      enderecos: mainEntity.endereco,
    };
  }, [mainEntity]);

  const data = useMemo(() => {
    return [
      {
        amount: dataMain.telefones ? dataMain.telefones.length : [],
        name: "Telefones",
      },
      {
        amount: dataMain.emails ? dataMain.emails.length : [],
        name: "Emails",
      },
      {
        amount: dataMain.empresas ? dataMain.empresas.length : [],
        name: "Empresas",
      },
      {
        amount: dataMain.pessoas ? dataMain.pessoas.length : [],
        name: "Pessoas",
      },
      {
        amount: dataMain.enderecos ? dataMain.enderecos.length : [],
        name: "Endereços",
      },
    ];
  }, [dataMain]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border p-2 text-azulClaroTech">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  const error = console.error;
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };

  return (
    <div className="w-full mb-10">
      <Card>
        <CardHeader className="flex-row items-center justify-between pb-8">
          <div className="space-y-1">
            <CardTitle className="text-base font-medium">
              <span className="text-lg">Gráfico: </span> Dados sobre{" "}
              {capitalizeWords(
                String(mainPerson.full_name?.toLocaleLowerCase())
              )}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={data} barSize={60}>
              <YAxis />
              <XAxis dataKey="name" className="text-xs sm:text-base" />
              <Bar dataKey="amount" strokeWidth={2} fill="#4b9be1" />
              <Tooltip cursor={{ fill: "none" }} content={<CustomTooltip />} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
