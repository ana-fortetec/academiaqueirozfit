import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GymHero(): JSX.Element {
  return (
    <div
      className="relative min-h-screen text-white overflow-hidden bg-cover bg-center w-full"
      style={{ backgroundImage: "url(/image/fundo-hero.png)" }}
    >
      <div className="container mx-auto px-8 py-12 flex flex-col justify-center min-h-[80vh] relative z-10 mt-20 md:px-32 lg:px-44">
        <div className="max-w-[330px]">
          <h1 className="text-4xl font-bold text-justify mb-6 w-full">
            Sua transformação
            <span className="text-[#FF4500] block">começa aqui !</span>
          </h1>

          <div className="space-y-4 mb-8 text-gray-100 text-justify">
            <p className=" text-base">
              Um espaço pensado para você! Ambiente agradável, máquinas
              modernas, avaliação física gratuita e uma área exclusiva de areia
              para treinos funcionais.
            </p>
            <p className=" text-base">
              Venha transformar sua rotina de exercícios!
            </p>
          </div>

          <Button className="bg-[#FF4500] hover:bg-[#FF4500]/90 text-white px-8 py-6 text-sm md:text-base rounded-full w-full md:w-[310px]">
            <Link href="https://wa.me/55999991443864">
              Agende seu treino experimental !
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
