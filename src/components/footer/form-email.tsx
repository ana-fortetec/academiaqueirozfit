"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z
    .string()
    .min(1, { message: "O campo Nome é obrigatório." })
    .max(50, { message: "O Nome não pode ter mais de 50 caracteres." }),
  email: z
    .string()
    .min(1, { message: "O campo Email é obrigatório." })
    .email({ message: "O Email é inválido." }),
  phone: z
    .string()
    .min(1, { message: "O campo Telefone/Whatsapp é obrigatório." })
    .max(15, {
      message: "O telefone/whatsapp não pode ter mais de 15 caracteres.",
    }),
  recommendations: z
    .string()
    .min(1, { message: "O campo Recomendações é obrigatório." })
    .max(500, {
      message: "O campo Recomendações não pode ter mais de 500 caracteres.",
    }),
  message: z
    .string()
    .min(1, { message: "O campo Como Podemos te Ajudar é obrigatório." }),
});

export function FormEmail() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      recommendations: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
      console.log("Dados enviados com sucesso:", data);
      // Simulando envio de dados para uma API
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar os dados.");
      }

      console.log("Resposta da API:", await response.json());
      form.reset();
    } catch (error) {
      console.error("Erro no envio:", error);
    }
  };

  return (
    <div className="mt-16">
      <div>
        <h1 className="w-full text-2xl md:text-3xl font-bold text-primary lg:pb-3 pt-2">
          Fale conosco:
        </h1>
      </div>
      <div className="w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full lg:w-[490px] space-y-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Seu nome"
                      {...field}
                      className="bg-black text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 placeholder-gray-400 hover:bg-white hover:text-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="seu@email.com"
                      {...field}
                      className="bg-black text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 placeholder-gray-400 hover:bg-white hover:text-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Telefone/Whatsapp"
                      {...field}
                      className="bg-black text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 placeholder-gray-400 hover:bg-white hover:text-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="recommendations"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Descreva suas recomendações..."
                      {...field}
                      className="bg-black text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 placeholder-gray-400 hover:bg-white hover:text-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="bg-primary w-full hover:bg-orange-600 text-white"
            >
              Enviar
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
