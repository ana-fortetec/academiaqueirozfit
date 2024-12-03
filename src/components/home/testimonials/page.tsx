import TestimonialCarousel from "./testimonial-carousel";

export default function Testimonials(): JSX.Element {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          O que dizem <span className="text-primary">Nossos Clientes</span>
        </h1>
      </div>
      <div className="w-full max-w-4xl">
        <TestimonialCarousel />
      </div>
    </section>
  );
}
