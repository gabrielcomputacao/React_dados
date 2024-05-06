import { Input } from "@/components/ui/input";
import DataContext from "@/context";
import { useContext } from "react";
import { Label } from "@/components/ui/label";
import { formatarCPF } from "@/utils/functions";

export function PersonMain() {
  const { mainEntity, mainPerson } = useContext(DataContext);

  return (
    <div>
      <div className="flex flex-col gap-7 mt-5">
        <div className="flex justify-between items-center gap-7 flex-wrap lg:flex-nowrap">
          <div className="grid w-full h-full  gap-1.5 ">
            <Label htmlFor="nome">Nome Completo</Label>
            <Input
              value={mainPerson.full_name ?? ""}
              type="text"
              id={`nome-${mainPerson.full_name}`}
              placeholder=""
              readOnly
              className="focus-visible:ring-0"
            />
          </div>
          <div className="grid w-full h-full  gap-1.5 ">
            <Label htmlFor="nome">CPF</Label>
            <Input
              value={formatarCPF(mainPerson.cpf ?? "")}
              type="text"
              id={`cpf-${mainPerson.cpf}`}
              placeholder=""
              readOnly
              className="focus-visible:ring-0"
            />
          </div>
          <div className="grid w-full h-full  gap-1.5 ">
            <Label htmlFor="nome">Identidade</Label>
            <Input
              value={mainPerson.identidade}
              type="text"
              id={`identidade-${mainPerson.identidade}`}
              placeholder=""
              readOnly
              className="focus-visible:ring-0"
            />
          </div>
          <div className="grid  h-full  gap-1.5 ">
            <Label htmlFor="nome">Idade</Label>
            <Input
              value={mainPerson.idade}
              type="text"
              id={`idade-${mainPerson.idade}`}
              placeholder=""
              readOnly
              className="focus-visible:ring-0 w-20"
            />
          </div>
        </div>
        <div className="flex justify-start items-center gap-7 flex-wrap lg:flex-nowrap">
          <div className="grid w-full h-full  gap-1.5 ">
            <Label htmlFor="nome">Data de nascimento</Label>
            <Input
              value={mainPerson.data_nascimento}
              type="text"
              id={`data_nascimento-${mainPerson.data_nascimento}`}
              placeholder=""
              readOnly
              className="focus-visible:ring-0"
            />
          </div>
          <div className="grid  h-full  gap-1.5 ">
            <Label htmlFor="nome">Sexo</Label>
            <Input
              value={mainPerson.sexo}
              type="text"
              id={`sexo-${mainPerson.sexo}`}
              placeholder=""
              readOnly
              className="focus-visible:ring-0 w-20"
            />
          </div>
          <div className="grid h-full  gap-1.5 ">
            <Label htmlFor="nome">Ctps</Label>
            <Input
              value={mainPerson.ctps}
              type="text"
              id={`ctps-${mainPerson.ctps}`}
              placeholder=""
              readOnly
              className="focus-visible:ring-0 w-32"
            />
          </div>
          <div className="grid w-full h-full  gap-1.5 ">
            <Label htmlFor="nome">Profissão</Label>
            <Input
              value={mainPerson.profissao}
              type="text"
              id={`profissao-${mainPerson.profissao}`}
              placeholder=""
              readOnly
              className="focus-visible:ring-0"
            />
          </div>
        </div>
        <div className="flex justify-start items-center gap-7 flex-wrap lg:flex-nowrap">
          <div className="grid w-full h-full  gap-1.5 ">
            <Label htmlFor="nome">Escolaridade</Label>
            <Input
              value={mainPerson.escolaridade}
              type="text"
              id={`escolaridade-${mainPerson.escolaridade}`}
              placeholder=""
              readOnly
              className="focus-visible:ring-0"
            />
          </div>

          <div className="grid  h-full  gap-1.5 ">
            <Label htmlFor="nome">Pis/pasep</Label>
            <Input
              value={mainPerson.pis_pasep}
              type="text"
              id={`pis_pasep-${mainPerson.pis_pasep}`}
              placeholder=""
              readOnly
              className="focus-visible:ring-0 w-32"
            />
          </div>
          <div className="grid w-full h-full  gap-1.5 ">
            <Label htmlFor="nome">Status na receita federal</Label>
            <Input
              value={mainPerson.status_receita}
              type="text"
              id={`status_receita-${mainPerson.status_receita}`}
              placeholder=""
              readOnly
              className="focus-visible:ring-0 "
            />
          </div>
        </div>
        <div className="flex justify-start items-center gap-7 flex-wrap lg:flex-nowrap">
          <div className="grid h-full  gap-1.5 ">
            <Label htmlFor="nome">País</Label>
            <Input
              value={mainPerson.pais_nascimento}
              type="text"
              id={`pais_nascimento-${mainPerson.pais_nascimento}`}
              placeholder=""
              readOnly
              className="focus-visible:ring-0 w-20"
            />
          </div>
          <div className="grid w-full h-full  gap-1.5 ">
            <Label htmlFor="nome">Nacionalidade</Label>
            <Input
              value={mainPerson.nacionalidade}
              type="text"
              id={`nacionalidade-${mainPerson.nacionalidade}`}
              placeholder=""
              readOnly
              className="focus-visible:ring-0"
            />
          </div>

          <div className="grid h-full  gap-1.5 ">
            <Label htmlFor="nome">UF</Label>
            <Input
              value={mainPerson.estado_nascimento}
              type="text"
              id={`estado_nascimento-${mainPerson.estado_nascimento}`}
              placeholder=""
              readOnly
              className="focus-visible:ring-0 w-20"
            />
          </div>
          <div className="grid w-full h-full  gap-1.5 ">
            <Label htmlFor="nome">Cidade</Label>
            <Input
              value={mainPerson.cidade_nascimento}
              type="text"
              id={`c.cidade_nascimento-${mainPerson.cidade_nascimento}`}
              placeholder=""
              readOnly
              className="focus-visible:ring-0 "
            />
          </div>
        </div>
        <div className="flex justify-start items-center gap-7 flex-wrap lg:flex-nowrap">
          <div className="grid w-full h-full  gap-1.5 ">
            <Label htmlFor="nome">Apelido</Label>
            <Input
              value={mainPerson.surname}
              type="text"
              id={`surname-${mainPerson.surname}`}
              placeholder=""
              readOnly
              className="focus-visible:ring-0"
            />
          </div>
          <div className="grid w-full h-full  gap-1.5 ">
            <Label htmlFor="nome">Título de eleitor</Label>
            <Input
              value={mainPerson.titulo_de_eleitor}
              type="text"
              id={`titulo_de_eleitor-${mainPerson.titulo_de_eleitor}`}
              placeholder=""
              readOnly
              className="focus-visible:ring-0"
            />
          </div>
        </div>
        {mainEntity.endereco.length > 0 && (
          <div className="flex  flex-col items-center w-full">
            <div className="text-center bg-[#ededed] py-1 px-4 rounded-md  my-5 w-2/6">
              <h2 className="font-semibold text-lg ">Endereço</h2>
            </div>
            <div className="w-full flex flex-col gap-5">
              {mainEntity.endereco.map((personMain, indexEnd) => (
                <div className="flex flex-col gap-5 w-full border p-5">
                  <div className="flex justify-between  gap-4 w-full flex-wrap lg:flex-nowrap">
                    <div className="grid w-full h-full  gap-1.5 self-start ">
                      <Label htmlFor="bairro">Cidade</Label>
                      <Input
                        value={personMain.city}
                        type="text"
                        id={`cidade-${indexEnd}`}
                        placeholder=""
                        readOnly
                        className="focus-visible:ring-0"
                      />
                    </div>
                    <div className="grid w-full h-full  gap-1.5 self-start ">
                      <Label htmlFor="bairro">Bairro</Label>
                      <Input
                        value={personMain.bairro}
                        type="text"
                        id={`bairro-${indexEnd}`}
                        placeholder=""
                        readOnly
                        className="focus-visible:ring-0"
                      />
                    </div>
                    <div className="grid w-full h-full  gap-1.5 self-start ">
                      <Label htmlFor="rua">Rua</Label>
                      <Input
                        value={personMain.endereco ?? personMain.logradouro}
                        type="text"
                        id={`rua-${indexEnd}`}
                        placeholder=""
                        readOnly
                        className="focus-visible:ring-0"
                      />
                    </div>
                    {personMain.numero && (
                      <div className="grid    gap-1.5  ">
                        <Label htmlFor="numero">Número</Label>
                        <Input
                          value={personMain.numero}
                          type="text"
                          id={`numero-${indexEnd}`}
                          placeholder=""
                          readOnly
                          className="focus-visible:ring-0 w-20"
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex justify-start gap-4 w-full flex-wrap lg:flex-nowrap">
                    <div className="grid w-full gap-1.5 self-start">
                      <Label htmlFor="complemento">Complemento</Label>
                      <Input
                        value={personMain.complemento}
                        type="text"
                        id={`complemento-${indexEnd}`}
                        placeholder=""
                        readOnly
                        className="focus-visible:ring-0"
                      />
                    </div>

                    <div className="grid   gap-1.5 ">
                      <Label htmlFor="uf">UF</Label>
                      <Input
                        value={personMain.area}
                        type="text"
                        id={`uf-${indexEnd}`}
                        placeholder=""
                        readOnly
                        className="focus-visible:ring-0 w-20"
                      />
                    </div>
                    <div className="grid w-full max-w-60  gap-1.5 ">
                      <Label htmlFor="cep">CEP</Label>
                      <Input
                        value={
                          personMain.area_code
                            ? personMain.area_code
                            : personMain.cep_ou_zipcode
                        }
                        type="text"
                        id={`cep-${indexEnd}`}
                        placeholder=""
                        readOnly
                        className="focus-visible:ring-0"
                      />
                    </div>
                    <div className="grid w-full max-w-60  gap-1.5 ">
                      <Label htmlFor="cep">Telefone relacionado</Label>
                      <Input
                        value={personMain.telefone_relacionado}
                        type="text"
                        id={`cep-${indexEnd}`}
                        placeholder=""
                        readOnly
                        className="focus-visible:ring-0"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
