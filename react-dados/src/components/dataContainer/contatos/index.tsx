import { Input } from "@/components/ui/input";
import { useContext } from "react";
import DataContext from "@/context";
import { Label } from "@/components/ui/label";

export function Contatos() {
  const { mainEntity } = useContext(DataContext);

  return (
    <div>
      <div>
        <div className="flex justify-center items-center flex-col gap-5 h-auto border p-5">
          <div className="text-center bg-[#ededed] py-1 px-4 rounded-md">
            <h2 className="font-semibold text-lg">Telefone</h2>
          </div>
          <div className="flex flex-col justify-center items-start gap-14">
            {mainEntity.telefone.map((tel, index) => (
              <div className="flex  gap-8 justify-start items-start border p-5 min-w-full">
                <div className="grid w-full h-full  gap-1.5 self-start ">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input
                    value={tel.phone_number}
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
                    value={tel.whatsapp}
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
          <div className="text-center bg-[#ededed] py-1 px-4 rounded-md">
            <h2 className="font-semibold text-lg">Email</h2>
          </div>
          <div className="flex flex-col justify-center items-start w-full">
            {mainEntity.email.map((emailValue, index) => (
              <div
                className={`flex  gap-8 justify-start items-start w-full px-8 ${
                  index === 0 ? "py-0" : "py-6"
                }`}
              >
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
