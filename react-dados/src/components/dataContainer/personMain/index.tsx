import { Input } from "@/components/ui/input";
import DataContext from "@/context";
import { useContext } from "react";
import { Label } from "@/components/ui/label";

export function PersonMain() {
  const { mainPerson } = useContext(DataContext);

  return (
    <div>
      <div className="flex flex-col gap-7 mt-5">
        <div className="flex justify-between items-center gap-7">
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
              value={mainPerson.cpf}
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
        <div className="flex justify-start items-center gap-7">
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
        <div className="flex justify-start items-center gap-7">
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
        <div className="flex justify-start items-center gap-7">
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
            <Label htmlFor="nome">Estado</Label>
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
        <div className="flex justify-start items-center gap-7">
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
      </div>
    </div>
  );
}
