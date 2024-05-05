import { useEffect, useState } from "react";
import loaderGif from "@/assets/loader.gif";
import "./global.css";
import { Empresa, Endereco, Pessoa, Snap, Telefone } from "./models/models";
import { Header } from "./components/header";
import { MainContainer } from "./components/mainContainer";
import DataContext from "./context";

function App() {
  const [mainEntity, setMainEntity] = useState<Snap>({} as Snap);
  const [mainPerson, setMainPerson] = useState<Pessoa>({} as Pessoa);
  const [loading, setLoading] = useState(true);

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

        await SNAP.map((dataSnap) => {
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
                objectEnderecoEmpresa.area_code = enderecoValue["area code"];
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

          dataSnap.endereco.map((element) => {
            const objectEnderecoMainEntity = {} as Endereco;

            objectEnderecoMainEntity.area = element.area;
            objectEnderecoMainEntity.area_code = element["area code"];
            objectEnderecoMainEntity.bairro = element.bairro;
            objectEnderecoMainEntity.city = element.city;
            objectEnderecoMainEntity.complemento = element.complemento;
            objectEnderecoMainEntity.logradouro = element.logradouro;
            objectEnderecoMainEntity.nome = element.nome;
            objectEnderecoMainEntity.logradouro = element.logradouro;
            objectEnderecoMainEntity.telefone_relacionado =
              element["telefone relacionado"];

            createNewObjectMain.endereco.push(objectEnderecoMainEntity);
          });
          dataSnap.telefone.map((element) => {
            const objectTelefoneMainEntity = {} as Telefone;

            objectTelefoneMainEntity.operadora = element.operadora ?? "";
            objectTelefoneMainEntity.whatsapp = element.whatsapp ?? "";
            objectTelefoneMainEntity.phone_number =
              element["phone number"] ?? "";

            createNewObjectMain.telefone.push(objectTelefoneMainEntity);
          });

          dataSnap.pessoa.map((element) => {
            const createNewPessoa = {
              endereco: [] as Endereco[],
              telefone: [] as Telefone[],
            } as Pessoa;

            createNewPessoa.bookmark = element.bookmark;
            createNewPessoa.cpf = element.cpf;
            createNewPessoa.data_nascimento = element["data nascimento"];
            createNewPessoa.cidade_nascimento = element.cidade_nascimento;
            createNewPessoa.ctps = element.ctps;
            createNewPessoa.escolaridade = element.escolaridade;
            createNewPessoa.estado_nascimento = element.estado_nascimento;
            createNewPessoa.first_name = element["first names"];
            createNewPessoa.full_name = element["full name"];
            createNewPessoa.idade = element.idade;
            createNewPessoa.identidade = element.identidade;
            createNewPessoa.nacionalidade = element.nacionalidade;
            createNewPessoa.pais_nascimento = element.pais_nascimento;
            createNewPessoa.pis_pasep = element["pis/pasep"];
            createNewPessoa.procon = element.procon;
            createNewPessoa.profissao = element.profissao;
            createNewPessoa.sexo = element.sexo;
            createNewPessoa.status_receita = element["status receita"];
            createNewPessoa.surname = element.surname;
            createNewPessoa.titulo_de_eleitor = element["titulo de eleitor"];
            createNewPessoa.vinculo = element.vinculo;

            element.telefone?.map((telefoneValuePessoa) => {
              const objectTelefonePessoa = {} as Telefone;

              objectTelefonePessoa.phone_number =
                telefoneValuePessoa["phone number"];

              if ("whatsapp" in telefoneValuePessoa) {
                objectTelefonePessoa.whatsapp = telefoneValuePessoa.whatsapp;
              }
              if ("operadora" in telefoneValuePessoa) {
                objectTelefonePessoa.operadora = telefoneValuePessoa.operadora;
              }

              createNewPessoa.telefone.push(objectTelefonePessoa);
            });
            element.endereco?.map((enderecoValuePessoa) => {
              const newObjectEnderecoPessoa = {} as Endereco;

              newObjectEnderecoPessoa.area = enderecoValuePessoa.area;
              newObjectEnderecoPessoa.bairro = enderecoValuePessoa.bairro;
              newObjectEnderecoPessoa.city = enderecoValuePessoa.city;
              newObjectEnderecoPessoa.cep_ou_zipcode =
                enderecoValuePessoa["cep ou zipcode"];
              newObjectEnderecoPessoa.numero = enderecoValuePessoa.numero;

              if ("nome" in enderecoValuePessoa) {
                newObjectEnderecoPessoa.nome = enderecoValuePessoa.nome;
              }
              if ("endereco" in enderecoValuePessoa) {
                newObjectEnderecoPessoa.endereco = enderecoValuePessoa.endereco;
              }
              if ("complemento" in enderecoValuePessoa) {
                newObjectEnderecoPessoa.complemento =
                  enderecoValuePessoa.complemento;
              }
              if ("logradouro" in enderecoValuePessoa) {
                newObjectEnderecoPessoa.logradouro =
                  enderecoValuePessoa.logradouro;
              }

              createNewPessoa.endereco.push(newObjectEnderecoPessoa);
            });
            element.location?.map((enderecoValuePessoa) => {
              const newObjectLocationPessoa = {} as Endereco;

              newObjectLocationPessoa.area = enderecoValuePessoa.area;
              newObjectLocationPessoa.bairro = enderecoValuePessoa.bairro;
              newObjectLocationPessoa.city = enderecoValuePessoa.city;
              newObjectLocationPessoa.area_code =
                enderecoValuePessoa["area code"];
              newObjectLocationPessoa.numero = enderecoValuePessoa.numero;

              if ("logradouro" in enderecoValuePessoa) {
                newObjectLocationPessoa.logradouro =
                  enderecoValuePessoa.logradouro;
              }

              createNewPessoa.endereco.push(newObjectLocationPessoa);
            });

            if (element.bookmark === "true") {
              setMainPerson(createNewPessoa);
            }

            createNewObjectMain.pessoa.push(createNewPessoa);
          });
        });

        setMainEntity(createNewObjectMain);
      } catch (error) {
        console.log(error);
      }
    }
    getApiResult();
    setLoading(false);
  }, []);

  return (
    <div className="h-screen w-full">
      <div>
        {loading ? (
          <img src={loaderGif} alt="Carregando" title="Carregando" />
        ) : (
          <div className="pb-20">
            <DataContext.Provider value={{ mainEntity, mainPerson }}>
              <Header />
              <MainContainer />
            </DataContext.Provider>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
