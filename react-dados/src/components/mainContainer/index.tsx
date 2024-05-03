import { useContext } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import DataContext from "@/context";

export function MainContainer() {
  const dataObject = useContext(DataContext);

  return (
    <div className="h-screen w-screen p-5">
      <div className="flex justify-center items-center flex-col">
        <h1> Dados:</h1>
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
        </div>
      </div>
    </div>
  );
}
