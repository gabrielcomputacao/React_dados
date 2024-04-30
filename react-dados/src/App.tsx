import { useEffect, useState } from "react";

import "./global.css";
import { Empresa, Endereco, Snap, Telefone } from "./models/models";

function App() {
  const [mainEntity, setMainEntity] = useState<Array<Snap>>([]);

  useEffect(() => {
    async function getApiResult() {
      try {
        const { SNAP } = await import("./data/api-result.json");

        const createNewObjectMain: Snap = {
          email: [],
          empresa: [],
          endereco: [],
          pessoa: [],
          telefone: [],
        } as Snap;

        SNAP.map((dataSnap) => {
          dataSnap.email.map((element) => {
            const email_address = element["email address"];
            createNewObjectMain.email.push({ email_address });
          });

          dataSnap.empresa.map((element) => {
            const objectEmpresa = {
              endereco: [] as Endereco[],
              telefone: [] as Telefone[],
            } as Empresa;

            objectEmpresa.cnpj = element.cnpj;
            objectEmpresa.vinculo = element.vinculo;
            objectEmpresa.admissao = element.admissao;
            objectEmpresa.renda = element.renda;
            objectEmpresa.razao_social = element["razao social"];

            element.endereco.map((enderecoValue) => {
              const objectEnderecoEmpresa = {} as Endereco;

              objectEnderecoEmpresa.area = enderecoValue.area;
              objectEnderecoEmpresa.bairro = enderecoValue.bairro;
              objectEnderecoEmpresa.city = enderecoValue.city;
              objectEnderecoEmpresa.endereco = enderecoValue.endereco;
              if ("complemento" in enderecoValue) {
                objectEnderecoEmpresa.complemento = enderecoValue.complemento;
              }
              if ("area code" in enderecoValue) {
                objectEnderecoEmpresa.complemento = enderecoValue["area code"];
              }
              if ("numero" in enderecoValue) {
                objectEnderecoEmpresa.numero = enderecoValue.numero;
              }
              if ("cep ou zipcode" in enderecoValue) {
                objectEnderecoEmpresa.cep_ou_zipcode =
                  enderecoValue["cep ou zipcode"];
              }

              objectEmpresa.endereco.push(objectEnderecoEmpresa);
            });

            element.telefone?.map((telefoneValue) => {
              const objectTelefone = {} as Telefone;

              objectTelefone.operadora = telefoneValue.operadora ?? "";
              objectTelefone.phone_number = telefoneValue["phone number"] ?? "";
              objectTelefone.whatsapp = telefoneValue.whatsapp ?? "";

              objectEmpresa.telefone.push(objectTelefone);
            });

            createNewObjectMain.empresa.push(objectEmpresa);
          });
        });

        setMainEntity(() => [createNewObjectMain]);
      } catch (error) {
        console.log(error);
      }
    }
    getApiResult();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <p>teste</p>
      </div>
    </div>
  );
}

export default App;
