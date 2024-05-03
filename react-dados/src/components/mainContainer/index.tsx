import { useContext } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import DataContext from "@/context";

export function MainContainer() {
  const { mainEntity, mainPerson } = useContext(DataContext);

  return (
    <div className="h-screen w-screen p-5">
      <div className="flex items-end gap-2 pl-5 mb-8">
        <span className="text-md font-medium ">Dados:</span>
        <h1 className="font-medium text-2xl">{mainPerson.full_name}</h1>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="flex flex-col gap-5">
          <div className="w-[800px] border px-5 rounded-md">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger> Dados Pessoais </AccordionTrigger>
                <AccordionContent></AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-[800px] border px-5 rounded-md">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger> Contatos </AccordionTrigger>
                <AccordionContent></AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-[800px] border px-5 rounded-md">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger> Empresas </AccordionTrigger>
                <AccordionContent></AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-[800px] border px-5 rounded-md">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {`Vínculos Pessoais (Familiares e sociais)`}
                </AccordionTrigger>
                <AccordionContent></AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
