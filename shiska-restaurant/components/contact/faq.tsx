import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "Do you take reservations?",
      answer:
        "Yes, we recommend making reservations, especially for dinner and weekends. You can reserve a table online through our website or by calling us directly.",
    },
    {
      question: "Is there a dress code?",
      answer:
        "We suggest smart casual attire. While we don't have a strict dress code, we appreciate our guests dressing appropriately for a fine dining experience.",
    },
    {
      question: "Do you accommodate dietary restrictions?",
      answer:
        "We offer vegetarian, vegan, and gluten-free options. Please inform us of any allergies or dietary restrictions when making your reservation, and our chef will be happy to accommodate your needs.",
    },
    {
      question: "Can I host a private event at your restaurant?",
      answer:
        "Yes, we have several private dining spaces available for events of various sizes. Please contact us for more information about our private event options and pricing.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We request that cancellations be made at least 24 hours in advance. Late cancellations or no-shows may incur a fee for larger parties or during peak times.",
    },
  ]

  return (
    <section className="my-12">
      <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

