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
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Building2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function Empresas() {
  const { mainEntity } = useContext(DataContext);

  return (
    <div>
      <div>
        <div className="flex justify-center items-center flex-col gap-5 h-auto border p-5">
          <div className="text-center bg-[#ededed] py-1 px-4 rounded-md">
            <h2 className="font-semibold text-lg">Empresas</h2>
          </div>
          <div className="flex justify-center items-center gap-10">
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
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="mb-5">Empresa</DialogTitle>
                          <div className="flex justify-center flex-col gap-5">
                            <div className="grid w-full h-full  gap-1.5 self-start ">
                              <Label htmlFor="telefone">Razão Social</Label>
                              <Input
                                value={company.razao_social}
                                type="text"
                                id={`cnpj-${index}`}
                                placeholder=""
                                readOnly
                                className="focus-visible:ring-0"
                              />
                            </div>
                            <div className="grid w-full h-full  gap-1.5 self-start ">
                              <Label htmlFor="telefone">CNPJ</Label>
                              <Input
                                value={company.cnpj}
                                type="text"
                                id={`cnpj-${index}`}
                                placeholder=""
                                readOnly
                                className="focus-visible:ring-0"
                              />
                            </div>
                            {company.admissao && (
                              <div className="grid w-full h-full  gap-1.5 self-start ">
                                <Label htmlFor="telefone">Admissão</Label>
                                <Input
                                  value={company.admissao}
                                  type="text"
                                  id={`cnpj-${index}`}
                                  placeholder=""
                                  readOnly
                                  className="focus-visible:ring-0"
                                />
                              </div>
                            )}

                            <div className="grid w-full h-full  gap-1.5 self-start ">
                              <Label htmlFor="telefone">Vínculo</Label>
                              <Input
                                value={company.vinculo}
                                type="text"
                                id={`cnpj-${index}`}
                                placeholder=""
                                readOnly
                                className="focus-visible:ring-0"
                              />
                            </div>
                            {company.renda && (
                              <div className="grid w-full h-full  gap-1.5 self-start ">
                                <Label htmlFor="telefone">Renda</Label>
                                <Input
                                  value={`R$${company.renda}`}
                                  type="text"
                                  id={`cnpj-${index}`}
                                  placeholder=""
                                  readOnly
                                  className="focus-visible:ring-0"
                                />
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
