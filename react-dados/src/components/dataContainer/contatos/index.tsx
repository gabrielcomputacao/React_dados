import { Input } from "@/components/ui/input";
import { useContext } from "react";
import DataContext from "@/context";
import { Label } from "@/components/ui/label";
import { formatarTelefone, formatterNao } from "@/utils/functions";

export function Contatos() {
  const { mainEntity } = useContext(DataContext);

  return (
    <div>
      <div>
        <div className="flex justify-center items-center flex-col gap-5 h-auto w-full">
          <div className="flex flex-col justify-center items-start w-full gap-8">
            {mainEntity.telefone.map((tel, index) => (
              <div className="flex  gap-5 justify-start items-start border p-5 min-w-full">
                <div className="grid w-full h-full  gap-1.5 self-start ">
                  <Label htmlFor="telefone">Número</Label>
                  <Input
                    value={formatarTelefone(tel.phone_number)}
                    type="text"
                    id={`phone_number-${index}`}
                    placeholder=""
                    readOnly
                    className="focus-visible:ring-0"
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="Whatsapp">Whatsapp</Label>
                  <Input
                    value={formatterNao(tel.whatsapp)}
                    type="text"
                    id={`whatsapp-${index}`}
                    placeholder=""
                    readOnly
                    className="focus-visible:ring-0"
                  />
                </div>

                {tel.operadora && (
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="Operadora">Operadora</Label>
                    <Input
                      value={tel.operadora}
                      type="text"
                      id={`operadora-${index}`}
                      placeholder=""
                      readOnly
                      className="focus-visible:ring-0"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center items-start w-full gap-8">
            {mainEntity.email.map((emailValue, index) => (
              <div className={`flex justify-start items-start w-full px-1`}>
                <div className=" min-w-full  gap-1.5 self-start ">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    value={emailValue.email_address}
                    type="email"
                    id={`email_address-${index}`}
                    placeholder=""
                    readOnly
                    className="focus-visible:ring-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
