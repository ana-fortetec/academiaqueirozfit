import Image from "next/image";
import { FormEmail } from "./form-email";
import { Instagram, PhoneIcon as WhatsApp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:gap-20">
          <div className="flex flex-col space-y-3 w-full md:w-auto mt-10">
            <Image
              alt="Queiroz Fit"
              src="/image/logo-queiroz.png"
              height={40}
              width={216}
            />

            <div>
              <h2 className="font-semibold text-lg md:text-xl mb-3">
                Horário de Funcionamento:
              </h2>
              <p className="text-gray-300">Segunda à sexta: 05h45 às 22h</p>
              <p className="text-gray-300">Sábado: 05h45 às 12h</p>
            </div>

            <div>
              <h2 className="font-semibold text-lg md:text-xl mb-3">
                Endereço:
              </h2>
              <p className="text-gray-300">Rua Paraiba, 1688A</p>
              <p className="text-gray-300">Imperatriz - MA</p>
            </div>

            <div>
              <h2 className="font-semibold text-lg md:text-xl mb-3">Email:</h2>
              <p className="text-gray-300">queirozfit@gmail.com</p>
            </div>

            <div className="flex gap-10">
              <a
                href="https://www.instagram.com/queiroz_fit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="hover:text-gray-300 transition-colors"
              >
                <Instagram size={24} />
              </a>

              <a href="#" className="hover:text-gray-300 transition-colors">
                <WhatsApp size={24} />
              </a>
            </div>
          </div>

          <div className="w-full md:w-[500px] mt-10 md:mt-0 md:ml-20">
            <FormEmail />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-4 text-center text-sm text-gray-400">
          <p>&copy; 2024 Queiroz Fit. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
