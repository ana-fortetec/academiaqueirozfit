import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ScheduleClass(): JSX.Element {
  return (
    <section className="bg-primary flex justify-center items-center flex-col h-[300px] w-full space-y-10 px-6">
      <div>
        <h1 className="text-black text-4xl font-bold w-full md:w-[400px] text-center">
          Faça uma aula experimental{" "}
          <span className="text-white">gratuita</span>
        </h1>
      </div>
      <div>
        <Button className="bg-black hover:bg-transparent/90 text-white px-8 py-6 text-xs md:text-base rounded-full w-full md:w-[310px]">
          <Link href="https://wa.me/55999991443864">
            QUERO AGENDAR MINHA AULA !
          </Link>
        </Button>
      </div>
    </section>
  );
}
