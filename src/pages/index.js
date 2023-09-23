
import { Inter } from "next/font/google";
import {
  IntroMain,
  Ideas,
  RulesMain,
  AttributesSection,
  FaqsSection,
  TimelineSection,
  PrizesSection,
  PartnersSection,
  PoliciesSection,
} from "@/exports";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <IntroMain />
      <Ideas />
      <RulesMain />
      <AttributesSection />
      <FaqsSection />
      <TimelineSection />
      <PrizesSection />
      <PartnersSection />
      <PoliciesSection />
    </main>
  );
}
