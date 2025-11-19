import { Contact } from "@/components/Contact";
import { portfolioData } from "@/data/portfolio";

export const ContactPage = () => {
  return <Contact contact={portfolioData.contact} />;
};
