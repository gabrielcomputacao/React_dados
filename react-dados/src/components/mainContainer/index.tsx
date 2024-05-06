import { useContext } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import DataContext from "@/context";
import { Contatos } from "../dataContainer/contatos";
import { Empresas } from "../dataContainer/empresas";
import { Pessoas } from "../dataContainer/pessoas";
import { PersonMain } from "../dataContainer/personMain";

export function MainContainer() {
  const { mainPerson } = useContext(DataContext);

  return (
    <div className="h-screen  p-5">
      <div className="flex items-end justify-center flex-wrap lg:flex-nowrap lg:justify-start gap-2 lg:pl-5 mb-8 w-full">
        <span className="text-md font-medium ">Dados:</span>
        <h1 className="font-medium text-xl sm:text-2xl">
          {mainPerson.full_name}
        </h1>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="flex flex-col gap-5 w-full justify-center items-center">
          <div className="w-[90%] lg:w-[900px] border px-5 rounded-md">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger> Dados Pessoais </AccordionTrigger>
                <AccordionContent>
                  <PersonMain />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-[90%] lg:w-[900px] border px-5 rounded-md">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger> Contatos </AccordionTrigger>
                <AccordionContent>
                  <Contatos />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-[90%] lg:w-[900px] border px-5 rounded-md">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger> Histórico de Empresas </AccordionTrigger>
                <AccordionContent>
                  <Empresas />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-[90%] lg:w-[900px] border px-5 rounded-md mb-5">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {`Vínculos Pessoais (Familiares e sociais)`}
                </AccordionTrigger>
                <AccordionContent>
                  <Pessoas />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
