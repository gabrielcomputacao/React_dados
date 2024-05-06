import { useContext } from "react";
import DataContext from "@/context";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Building2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import {
  formatarCNPJ,
  formatarTelefone,
  formatterNao,
} from "@/utils/functions";

export function Empresas() {
  const { mainEntity } = useContext(DataContext);

  return (
    <div>
      <div>
        <div className="flex justify-center items-center flex-col gap-5 h-auto  p-5">
          <div className="flex justify-center items-center gap-10 flex-wrap lg:flex-nowrap">
            {mainEntity.empresa.map((company, index) => (
              <div>
                <Card className="min-h-64 min-w-48 flex flex-col justify-around items-center ">
                  <CardHeader className="flex justify-center flex-col items-center">
                    <Building2 size={48} />
                    <CardDescription className="flex flex-col items-center text-center text-xs font-medium">
                      {company.razao_social}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <Dialog>
                      <DialogTrigger className="border bg-azulClaroTech py-2 px-4 rounded-md font-semibold">
                        Ver dados
                      </DialogTrigger>
                      <DialogContent className="w-[90%] sm:min-w-[600px] lg:w-[855px] max-h-[600px] max-w-full overflow-y-scroll sm:rounded-none">
                        <DialogHeader>
                          <DialogTitle className="mb-5">Empresa</DialogTitle>
                          <div className="flex justify-center flex-col gap-5">
                            <div className="flex justify-center gap-5 items-center flex-wrap lg:flex-nowrap">
                              <div className="grid w-full lg:h-full  gap-1.5 self-start ">
                                <Label className="text-start" htmlFor="razao">
                                  Razão Social
                                </Label>
                                <Input
                                  value={company.razao_social}
                                  type="text"
                                  id={`razao-${index}`}
                                  placeholder=""
                                  readOnly
                                  className="focus-visible:ring-0"
                                />
                              </div>
                              <div className="grid w-full lg:w-2/6 lg:h-full  gap-1.5 self-start ">
                                <Label className="text-start" htmlFor="cnpj">
                                  CNPJ
                                </Label>
                                <Input
                                  value={formatarCNPJ(company.cnpj)}
                                  type="text"
                                  id={`cnpj-${index}`}
                                  placeholder=""
                                  readOnly
                                  className="focus-visible:ring-0"
                                />
                              </div>
                            </div>
                            <div className="flex justify-start gap-5 lg:items-center flex-wrap lg:flex-nowrap">
                              <div className="grid w-full lg:h-full  lg:max-w-60  gap-1.5 ">
                                <Label className="text-start" htmlFor="Vínculo">
                                  Vínculo
                                </Label>
                                <Input
                                  value={company.vinculo}
                                  type="text"
                                  id={`Vínculo-${index}`}
                                  placeholder=""
                                  readOnly
                                  className="focus-visible:ring-0"
                                />
                              </div>
                              {company.admissao && (
                                <div className="grid w-full lg:h-full  gap-1.5 self-start ">
                                  <Label
                                    className="text-start"
                                    htmlFor="Admissão"
                                  >
                                    Admissão
                                  </Label>
                                  <Input
                                    value={company.admissao}
                                    type="text"
                                    id={`Admissão-${index}`}
                                    placeholder=""
                                    readOnly
                                    className="focus-visible:ring-0"
                                  />
                                </div>
                              )}
                              {company.renda && (
                                <div className="grid w-full lg:h-full  gap-1.5 self-start ">
                                  <Label className="text-start" htmlFor="renda">
                                    Renda
                                  </Label>
                                  <Input
                                    value={`R$${company.renda}`}
                                    type="text"
                                    id={`renda-${index}`}
                                    placeholder=""
                                    readOnly
                                    className="focus-visible:ring-0"
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex justify-center flex-col items-center">
                            <div className="text-center bg-[#ededed] py-1 px-4 rounded-md w-auto lg:w-2/6 my-5">
                              <h2 className="font-semibold text-lg">
                                Endereço
                              </h2>
                            </div>
                            <div className="w-full">
                              {company.endereco.map((compEnd, indexEnd) => (
                                <div className="flex flex-col items-center justify-between gap-3 w-full ">
                                  <div className="flex justify-between  gap-4 w-full flex-wrap lg:flex-nowrap">
                                    <div className="grid w-full h-full  gap-1.5 self-start ">
                                      <Label
                                        className="text-start"
                                        htmlFor="bairro"
                                      >
                                        Cidade
                                      </Label>
                                      <Input
                                        value={compEnd.city}
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
                                        value={compEnd.bairro}
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
                                        value={compEnd.endereco}
                                        type="text"
                                        id={`rua-${indexEnd}`}
                                        placeholder=""
                                        readOnly
                                        className="focus-visible:ring-0"
                                      />
                                    </div>
                                    {compEnd.numero && (
                                      <div className="grid    gap-1.5  ">
                                        <Label
                                          className="text-start"
                                          htmlFor="numero"
                                        >
                                          Número
                                        </Label>
                                        <Input
                                          value={compEnd.numero}
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
                                    {compEnd.complemento && (
                                      <div className="grid w-full gap-1.5 self-start">
                                        <Label
                                          className="text-start"
                                          htmlFor="complemento"
                                        >
                                          Complemento
                                        </Label>
                                        <Input
                                          value={compEnd.complemento}
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
                                        value={compEnd.area}
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
                                          compEnd.area_code
                                            ? compEnd.area_code
                                            : compEnd.cep_ou_zipcode
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
                              ))}
                            </div>
                          </div>
                          <div>
                            {company.telefone.length > 0 && (
                              <div className="flex justify-center flex-col items-center gap-2">
                                <div className="text-center bg-[#ededed] py-1 px-4 rounded-md w-2/6 my-5">
                                  <h2 className="font-semibold text-lg">
                                    Telefone
                                  </h2>
                                </div>

                                {company.telefone.map((compTel, indexTel) => (
                                  <div className="flex justify-start w-full gap-5">
                                    <div className="grid w-full h-full  gap-1.5 ">
                                      <Label
                                        className="text-start"
                                        htmlFor="phone_numberTel"
                                      >
                                        Número
                                      </Label>
                                      <Input
                                        value={formatarTelefone(
                                          compTel.phone_number
                                        )}
                                        type="text"
                                        id={`phone_numberTel-${indexTel}`}
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
                                        value={formatterNao(compTel.whatsapp)}
                                        type="text"
                                        id={`whatsapp-${indexTel}`}
                                        placeholder=""
                                        readOnly
                                        className="focus-visible:ring-0 w-auto"
                                      />
                                    </div>
                                    <div className="grid w-full h-full  gap-1.5 ">
                                      <Label
                                        className="text-start"
                                        htmlFor="operadora"
                                      >
                                        Operadora
                                      </Label>
                                      <Input
                                        value={compTel.operadora}
                                        type="text"
                                        id={`operadora-${indexTel}`}
                                        placeholder=""
                                        readOnly
                                        className="focus-visible:ring-0 "
                                      />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
