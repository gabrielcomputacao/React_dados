import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DataContext from "@/context";
import {
  acentuarPalavra,
  formatarCPF,
  formatarTelefone,
  formatterNao,
} from "@/utils/functions";
import { User } from "lucide-react";
import { useContext } from "react";

export function Pessoas() {
  const { mainEntity } = useContext(DataContext);

  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-5 h-auto  p-5">
        <div className="flex justify-center items-center gap-10 flex-wrap">
          {mainEntity.pessoa.map((person, index) => (
            <div key={`${person.first_name}-${index}`}>
              {person.bookmark !== "true" && (
                <Card className="min-h-64 min-w-48 flex flex-col justify-around items-center ">
                  <CardHeader className="flex justify-center flex-col items-center">
                    <User size={48} />
                    <CardDescription className="flex flex-col items-center text-center gap-1.5">
                      <span className="font-medium text-base">
                        {person.first_name}
                      </span>

                      <span className=" text-sm">
                        {acentuarPalavra(String(person.vinculo))}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <Dialog>
                      <DialogTrigger className="border bg-azulClaroTech py-2 px-4 rounded-md font-semibold">
                        Ver dados
                      </DialogTrigger>
                      <DialogContent className="w-[90%] sm:min-w-[600px] lg:w-[855px] max-h-[600px] max-w-full overflow-y-scroll  sm:rounded-none mt-1">
                        <DialogHeader>
                          <DialogTitle className="mb-5">Pessoa</DialogTitle>
                          <div className="flex flex-col items-center gap-5">
                            <div className="flex justify-start gap-5 items-center w-full flex-wrap lg:flex-nowrap">
                              <div className="grid w-full lg:h-full  gap-1.5 ">
                                <Label className="text-start" htmlFor="name">
                                  Nome Completo
                                </Label>
                                <Input
                                  value={person.full_name ?? ""}
                                  type="text"
                                  id={`name-${index}`}
                                  placeholder=""
                                  readOnly
                                  className="focus-visible:ring-0"
                                />
                              </div>
                              <div className="grid w-full lg:max-w-40 lg:h-full  gap-1.5  ">
                                <Label className="text-start" htmlFor="cpf">
                                  CPF
                                </Label>
                                <Input
                                  value={formatarCPF(person.cpf ?? "") ?? ""}
                                  type="text"
                                  id={`cpf-${index}`}
                                  placeholder=""
                                  readOnly
                                  className="focus-visible:ring-0 "
                                />
                              </div>
                              <div className="grid w-full max-w-40 lg:h-full  gap-1.5  self-start">
                                <Label
                                  className="text-start"
                                  htmlFor="nascimento"
                                >
                                  Data de Nascimento
                                </Label>
                                <Input
                                  value={person.data_nascimento ?? ""}
                                  type="text"
                                  id={`nascimento-${index}`}
                                  placeholder=""
                                  readOnly
                                  className="focus-visible:ring-0 "
                                />
                              </div>
                              <div className="grid w-auto lg:h-full  gap-1.5  ">
                                <Label
                                  className="text-start"
                                  htmlFor="nascimento"
                                >
                                  Sexo
                                </Label>
                                <Input
                                  value={person.sexo ?? ""}
                                  type="text"
                                  id={`sexo-${index}`}
                                  placeholder=""
                                  readOnly
                                  className="focus-visible:ring-0 w-16"
                                />
                              </div>
                            </div>
                            <div className="flex justify-start gap-5 items-center w-full flex-wrap lg:flex-nowrap">
                              <div className="grid w-full lg:h-full  gap-1.5  ">
                                <Label className="text-start" htmlFor="vinculo">
                                  Vínculo
                                </Label>
                                <Input
                                  value={person.vinculo ?? ""}
                                  type="text"
                                  id={`vinculo-${index}`}
                                  placeholder=""
                                  readOnly
                                  className="focus-visible:ring-0 "
                                />
                              </div>
                              <div className="grid w-full lg:h-full  gap-1.5  ">
                                <Label className="text-start" htmlFor="surname">
                                  Apelido
                                </Label>
                                <Input
                                  value={person.surname ?? ""}
                                  type="text"
                                  id={`surname-${index}`}
                                  placeholder=""
                                  readOnly
                                  className="focus-visible:ring-0 "
                                />
                              </div>
                              <div className="grid w-full lg:h-full  gap-1.5  ">
                                <Label className="text-start" htmlFor="procon">
                                  Procon
                                </Label>
                                <Input
                                  value={person.procon ?? ""}
                                  type="text"
                                  id={`procon-${index}`}
                                  placeholder=""
                                  readOnly
                                  className="focus-visible:ring-0 "
                                />
                              </div>

                              <div className="grid w-full lg:h-full  gap-1.5  ">
                                <Label className="text-start" htmlFor="titulo">
                                  Título de eleitor
                                </Label>
                                <Input
                                  value={person.titulo_de_eleitor ?? ""}
                                  type="text"
                                  id={`titulo-${index}`}
                                  placeholder=""
                                  readOnly
                                  className="focus-visible:ring-0 "
                                />
                              </div>
                            </div>
                            {person.endereco.length > 0 && (
                              <div className="flex  flex-col items-center w-full">
                                <div className="text-center bg-[#ededed] py-1 px-4 rounded-md  my-5 lg:w-2/6">
                                  <h2 className="font-semibold text-lg ">
                                    Endereço
                                  </h2>
                                </div>
                                <div className="w-full">
                                  {person.endereco.map(
                                    (personEnd, indexEnd) => (
                                      <div
                                        key={`${personEnd.city}-${indexEnd}`}
                                        className="flex flex-col gap-3 w-full"
                                      >
                                        <div className="flex justify-between  gap-4 w-full flex-wrap lg:flex-nowrap">
                                          <div className="grid w-full h-full  gap-1.5 self-start ">
                                            <Label
                                              className="text-start"
                                              htmlFor="bairro"
                                            >
                                              Cidade
                                            </Label>
                                            <Input
                                              value={personEnd.city}
                                              type="text"
                                              id={`cidade-${indexEnd}`}
                                              placeholder=""
                                              readOnly
                                              className="focus-visible:ring-0"
                                            />
                                          </div>
                                          <div className="grid w-full h-full  gap-1.5 self-start ">
                                            <Label
                                              className="text-start"
                                              htmlFor="bairro"
                                            >
                                              Bairro
                                            </Label>
                                            <Input
                                              value={personEnd.bairro}
                                              type="text"
                                              id={`bairro-${indexEnd}`}
                                              placeholder=""
                                              readOnly
                                              className="focus-visible:ring-0"
                                            />
                                          </div>
                                          <div className="grid w-full h-full  gap-1.5 self-start ">
                                            <Label
                                              className="text-start"
                                              htmlFor="rua"
                                            >
                                              Rua
                                            </Label>
                                            <Input
                                              value={
                                                personEnd.endereco ??
                                                personEnd.logradouro
                                              }
                                              type="text"
                                              id={`rua-${indexEnd}`}
                                              placeholder=""
                                              readOnly
                                              className="focus-visible:ring-0"
                                            />
                                          </div>
                                          {personEnd.numero && (
                                            <div className="grid    gap-1.5  ">
                                              <Label
                                                className="text-start"
                                                htmlFor="numero"
                                              >
                                                Número
                                              </Label>
                                              <Input
                                                value={personEnd.numero}
                                                type="text"
                                                id={`numero-${indexEnd}`}
                                                placeholder=""
                                                readOnly
                                                className="focus-visible:ring-0 w-20"
                                              />
                                            </div>
                                          )}
                                        </div>

                                        <div className="flex justify-start gap-4 w-full">
                                          {personEnd.complemento && (
                                            <div className="grid w-full gap-1.5 self-start">
                                              <Label
                                                className="text-start"
                                                htmlFor="complemento"
                                              >
                                                Complemento
                                              </Label>
                                              <Input
                                                value={personEnd.complemento}
                                                type="text"
                                                id={`complemento-${indexEnd}`}
                                                placeholder=""
                                                readOnly
                                                className="focus-visible:ring-0"
                                              />
                                            </div>
                                          )}
                                          <div className="grid   gap-1.5 ">
                                            <Label
                                              className="text-start"
                                              htmlFor="uf"
                                            >
                                              UF
                                            </Label>
                                            <Input
                                              value={personEnd.area}
                                              type="text"
                                              id={`uf-${indexEnd}`}
                                              placeholder=""
                                              readOnly
                                              className="focus-visible:ring-0 w-20"
                                            />
                                          </div>
                                          <div className="grid w-full max-w-60  gap-1.5 ">
                                            <Label
                                              className="text-start"
                                              htmlFor="cep"
                                            >
                                              CEP
                                            </Label>
                                            <Input
                                              value={
                                                personEnd.area_code
                                                  ? personEnd.area_code
                                                  : personEnd.cep_ou_zipcode
                                              }
                                              type="text"
                                              id={`cep-${indexEnd}`}
                                              placeholder=""
                                              readOnly
                                              className="focus-visible:ring-0"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            )}
                            <div className="flex  flex-col items-center w-full">
                              <div className="w-full">
                                {person.telefone.length > 0 && (
                                  <div className="flex justify-center flex-col items-center gap-5 w-full">
                                    <div className="text-center bg-[#ededed] py-1 px-4 rounded-md lg:w-2/6 my-5">
                                      <h2 className="font-semibold text-lg">
                                        Telefone
                                      </h2>
                                    </div>

                                    {person.telefone.map(
                                      (personTel, indexTel) => (
                                        <div
                                          key={`${personTel.phone_number}-${indexTel}`}
                                          className="flex justify-start w-full gap-5 border p-3 flex-wrap lg:flex-nowrap"
                                        >
                                          <div className="grid lg:w-[40%] h-full  gap-1.5 ">
                                            <Label
                                              className="text-start"
                                              htmlFor="phone_numberTel"
                                            >
                                              Número
                                            </Label>
                                            <Input
                                              value={formatarTelefone(
                                                personTel.phone_number
                                              )}
                                              type="text"
                                              id={`personTelphone_number-${indexTel}`}
                                              placeholder=""
                                              readOnly
                                              className="focus-visible:ring-0"
                                            />
                                          </div>
                                          <div className="grid  h-full  gap-1.5 ">
                                            <Label
                                              className="text-start"
                                              htmlFor="whatsapp"
                                            >
                                              Whatsapp
                                            </Label>
                                            <Input
                                              value={formatterNao(
                                                personTel.whatsapp
                                              )}
                                              type="text"
                                              id={`personTelwhatsapp-${indexTel}`}
                                              placeholder=""
                                              readOnly
                                              className="focus-visible:ring-0 w-auto"
                                            />
                                          </div>
                                          <div className="grid h-full  gap-1.5 ">
                                            <Label
                                              className="text-start"
                                              htmlFor="operadora"
                                            >
                                              Operadora
                                            </Label>
                                            <Input
                                              value={personTel.operadora}
                                              type="text"
                                              id={`personTeloperadora-${indexTel}`}
                                              placeholder=""
                                              readOnly
                                              className="focus-visible:ring-0 w-auto"
                                            />
                                          </div>
                                        </div>
                                      )
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
