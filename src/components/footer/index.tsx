import Image from "next/image";
import { FormEmail } from "./form-email";

export default function Footer() {
    return (
      <div className="flex flex-col min-h-screen bg-black">
        <section className="flex lg:flex-row justify-center gap-20 items-center p-10 text-white">
          <div>
            <div>
              <Image
                alt="Queiroz Fit"
                src={'/image/logo-queiroz.png'}
                height={40}
                width={156}
              />
            </div>
            <div>
              <h1>Horário de Funcionamento</h1>
              <p>Segunda à sexta: 05h45 às 22h</p>
            </div>
            <div>
              <h1>Endereço:</h1>
              <p>Rua Paraiba,1688A</p>
              <p>Imperatriz - MA</p>
            </div>
            <div>
              <h1>Email:</h1>
              <p>queirozfit@gmail.com</p>
            </div>
          </div>
          <div>
            <FormEmail />
          </div>
        </section>
        <footer className="bg-black text-white py-4 text-center">
          <p>&copy; 2024 Queiroz Fit. Todos os direitos reservados.</p>
        </footer>
      </div>
    );
  }
  