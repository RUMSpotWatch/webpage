import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQAccordionProps {
  triggerText: string;
  contentText: string;
  value?: string;
}

export default function FAQAccordion({ 
  triggerText, 
  contentText, 
  value = "item-1" 
}: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full max-w-xl">
      <AccordionItem value={value}>
        <AccordionTrigger style={{ color: 'white' }}>{triggerText}</AccordionTrigger>
        <AccordionContent>
          {contentText}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
