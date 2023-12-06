import Counter from "@/components/Counter";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Services from "@/components/Services";
import Tags from "@/components/Tags";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Counter />
      <Services />
      <News />
      <Tags />
    </main>
  );
}
