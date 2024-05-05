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
import { User } from "lucide-react";
import { useContext } from "react";

export function Pessoas() {
  const { mainEntity } = useContext(DataContext);

  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-5 h-auto  p-5">
        <div className="flex justify-center items-center gap-10 flex-wrap">
          {mainEntity.pessoa.map((person, index) => (
            <div>
              {person.bookmark !== "true" && (
                <Card className="min-h-64 min-w-48 flex flex-col justify-around items-center ">
                  <CardHeader className="flex justify-center flex-col items-center">
                    <User size={48} />
                    <CardDescription className="flex flex-col items-center text-center gap-1.5">
                      <span className="font-medium text-base">
                        {person.first_name}
                      </span>

                      <span className=" text-sm">{person.vinculo}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <Dialog>
                      <DialogTrigger className="border bg-azulClaroTech py-2 px-4 rounded-md font-semibold">
                        Ver dados
                      </DialogTrigger>
                      <DialogContent className="w-[855px] max-h-[600px] max-w-full overflow-y-scroll  sm:rounded-none mt-1">
                        <DialogHeader>
                          <DialogTitle className="mb-5">Pessoa</DialogTitle>
                          <div className="flex flex-col items-center gap-5">
                            <div className="flex justify-start gap-5 items-center w-full">
                              <div className="grid w-full h-full  gap-1.5 ">
                                <Label htmlFor="name">Nome Completo</Label>
                                <Input
                                  value={person.full_name ?? ""}
                                  type="text"
                                  id={`name-${index}`}
                                  placeholder=""
                                  readOnly
                                  className="focus-visible:ring-0"
                                />
                              </div>
                              <div className="grid w-full max-w-40 h-full  gap-1.5  ">
                                <Label htmlFor="cpf">CPF</Label>
                                <Input
                                  value={person.cpf ?? ""}
                                  type="text"
                                  id={`cpf-${index}`}
                                  placeholder=""
                                  readOnly
                                  className="focus-visible:ring-0 "
                                />
                              </div>
                              <div className="grid w-full max-w-40 h-full  gap-1.5  self-start">
                                <Label htmlFor="nascimento">
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
                              <div className="grid w-auto h-full  gap-1.5  ">
                                <Label htmlFor="nascimento">Sexo</Label>
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
                            <div className="flex justify-start gap-5 items-center w-full">
                              <div className="grid w-full h-full  gap-1.5  ">
                                <Label htmlFor="vinculo">Vínculo</Label>
                                <Input
                                  value={person.vinculo ?? ""}
                                  type="text"
                                  id={`vinculo-${index}`}
                                  placeholder=""
                                  readOnly
                                  className="focus-visible:ring-0 "
                                />
                              </div>
                              <div className="grid w-full h-full  gap-1.5  ">
                                <Label htmlFor="surname">Apelido</Label>
                                <Input
                                  value={person.surname ?? ""}
                                  type="text"
                                  id={`surname-${index}`}
                                  placeholder=""
                                  readOnly
                                  className="focus-visible:ring-0 "
                                />
                              </div>
                              <div className="grid w-full h-full  gap-1.5  ">
                                <Label htmlFor="procon">Procon</Label>
                                <Input
                                  value={person.procon ?? ""}
                                  type="text"
                                  id={`procon-${index}`}
                                  placeholder=""
                                  readOnly
                                  className="focus-visible:ring-0 "
                                />
                              </div>

                              <div className="grid w-full h-full  gap-1.5  ">
                                <Label htmlFor="titulo">
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
                                <div className="text-center bg-[#ededed] py-1 px-4 rounded-md  my-5 w-2/6">
                                  <h2 className="font-semibold text-lg ">
                                    Endereço
                                  </h2>
                                </div>
                                <div className="w-full">
                                  {person.endereco.map(
                                    (personEnd, indexEnd) => (
                                      <div className="flex flex-col gap-3 w-full">
                                        <div className="flex justify-between  gap-4 w-full">
                                          <div className="grid w-full h-full  gap-1.5 self-start ">
                                            <Label htmlFor="bairro">
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
                                            <Label htmlFor="bairro">
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
                                            <Label htmlFor="rua">Rua</Label>
                                            <Input
                                              value={personEnd.endereco}
                                              type="text"
                                              id={`rua-${indexEnd}`}
                                              placeholder=""
                                              readOnly
                                              className="focus-visible:ring-0"
                                            />
                                          </div>
                                          {personEnd.numero && (
                                            <div className="grid    gap-1.5  ">
                                              <Label htmlFor="numero">
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
                                              <Label htmlFor="complemento">
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
                                            <Label htmlFor="uf">UF</Label>
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
                                            <Label htmlFor="cep">CEP</Label>
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
                                    <div className="text-center bg-[#ededed] py-1 px-4 rounded-md w-2/6 my-5">
                                      <h2 className="font-semibold text-lg">
                                        Telefone
                                      </h2>
                                    </div>

                                    {person.telefone.map(
                                      (personTel, indexTel) => (
                                        <div className="flex justify-start w-full gap-5">
                                          <div className="grid w-[40%] h-full  gap-1.5 ">
                                            <Label htmlFor="phone_numberTel">
                                              Número
                                            </Label>
                                            <Input
                                              value={personTel.phone_number}
                                              type="text"
                                              id={`personTelphone_number-${indexTel}`}
                                              placeholder=""
                                              readOnly
                                              className="focus-visible:ring-0"
                                            />
                                          </div>
                                          <div className="grid  h-full  gap-1.5 ">
                                            <Label htmlFor="whatsapp">
                                              Whatsapp
                                            </Label>
                                            <Input
                                              value={personTel.whatsapp}
                                              type="text"
                                              id={`personTelwhatsapp-${indexTel}`}
                                              placeholder=""
                                              readOnly
                                              className="focus-visible:ring-0 w-auto"
                                            />
                                          </div>
                                          <div className="grid h-full  gap-1.5 ">
                                            <Label htmlFor="operadora">
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
