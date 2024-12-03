"use client";
import { Button } from "../ui/button";
import Image from "next/image";

const listCard = [
  {
    imgSrc: "/image/icon-musculacao.png",
    altImg: "Icone Musculação",
    title: "Musculação",
    description:
      "A musculação é indicada para todos os públicos, pode se tornar uma aliada na busca de vários objetivos.",
  },
  {
    imgSrc: "/image/icon-ginastica.png",
    altImg: "Icone de Ginastica",
    title: "Ginástica",
    description:
      "A ginástica combina movimentos dinâmicos, promovendo flexibilidade e condicionamento físico.",
  },
  {
    imgSrc: "/image/icon-funcional.png",
    altImg: "Icone Funcional",
    title: "Funcional",
    description:
      "O funcional é um treinamento que utiliza movimentos naturais do corpo, ajudando na melhora da força, equilíbrio e coordenação.",
  },
];

export default function Modalities(): JSX.Element {
  return (
    <section className="p-4 space-y-9 flex flex-col justify-center items-center">
      <div className="mt-10 w-full max-w-[300px]">
        <h1 className="font-bold text-center text-3xl md:text-4xl">
          Nossas <span className="text-primary">Modalidades</span>
        </h1>
      </div>
      <div className="text-center mt-4">
        <p>Escolha a modalidade que mais se adequa aos seus objetivos!</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {listCard.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-[210px] h-auto border border-primary p-4 text-center flex flex-col items-center justify-center rounded-[40px] transition-colors duration-300 hover:bg-zinc-900 hover:text-white"
          >
            <Image src={item.imgSrc} alt={item.altImg} width={40} height={40} />
            <h1 className="font-bold mt-2">{item.title}</h1>
            <p className="text-sm mt-1">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 pb-10">
        <Button className="bg-[#FF4500] hover:bg-[#FF4500]/90 text-white uppercase px-8 py-6 text-base rounded-full w-full max-w-[300px]">
          Confira Nossos Horários
        </Button>
      </div>
    </section>
  );
}
