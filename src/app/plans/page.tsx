import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Plans() {
  return (
    <section className="bg-black min-h-screen py-16 px-4 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Conheça</h1>
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Nossos Planos
          </h1>
        </div>

        {/* Primeira Grade */}
        <div className="grid md:grid-cols-3 gap-6 justify-center mb-8">
          {/* Horário Livre Plans */}
          <Card className="bg-gradient-to-b from-[#1a1a1a] to-black border-[#ff4d12]/20 hover:border-[#ff4d12]/50 transition-colors">
            <CardHeader className="text-center pb-2">
              <p className="text-[#ff4d12] text-sm font-semibold tracking-wide">
                HORÁRIO LIVRE
              </p>
              <h3 className="text-lg font-medium text-white">Mensal</h3>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex items-baseline justify-center">
                <span className="text-white text-sm align-top">R$</span>
                <span className="text-4xl font-bold text-white">100</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-b from-[#1a1a1a] to-black border-[#ff4d12]/20 hover:border-[#ff4d12]/50 transition-colors">
            <CardHeader className="text-center pb-2">
              <p className="text-[#ff4d12] text-sm font-semibold tracking-wide">
                HORÁRIO LIVRE
              </p>
              <h3 className="text-lg font-medium text-white">
                Mensal (Família)
              </h3>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex items-baseline justify-center">
                <span className="text-white text-sm align-top">R$</span>
                <span className="text-4xl font-bold text-white">90</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-b from-[#1a1a1a] to-black border-[#ff4d12]/20 hover:border-[#ff4d12]/50 transition-colors">
            <CardHeader className="text-center pb-2">
              <p className="text-[#ff4d12] text-sm font-semibold tracking-wide">
                HORÁRIO LIVRE
              </p>
              <h3 className="text-lg font-medium text-white">
                Trimestral (3x)
              </h3>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex items-baseline justify-center">
                <span className="text-white text-sm align-top">R$</span>
                <span className="text-4xl font-bold text-white">300</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Segunda Grade */}
        <div className="grid md:grid-cols-2 gap-6 justify-center">
          {/* Universitário Plans */}
          <Card className="bg-gradient-to-b from-[#1a1a1a] to-black border-[#ff4d12]/20 hover:border-[#ff4d12]/50 transition-colors">
            <CardHeader className="text-center pb-2">
              <p className="text-[#ff4d12] text-sm font-semibold tracking-wide">
                HORÁRIO LIVRE
              </p>
              <h3 className="text-lg font-medium text-white">Semestral (6x)</h3>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex items-baseline justify-center">
                <span className="text-white text-sm align-top">R$</span>
                <span className="text-4xl font-bold text-white">600</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-b from-[#1a1a1a] to-black border-[#ff4d12]/20 hover:border-[#ff4d12]/50 transition-colors">
            <CardHeader className="text-center pb-2">
              <p className="text-[#ff4d12] text-sm font-semibold tracking-wide">
                HORÁRIO LIVRE
              </p>
              <h3 className="text-lg font-medium text-white">Anual (12x)</h3>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex items-baseline justify-center">
                <span className="text-white text-sm align-top">R$</span>
                <span className="text-4xl font-bold text-white">1200</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
