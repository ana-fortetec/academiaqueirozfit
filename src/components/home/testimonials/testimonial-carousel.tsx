"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechFlow",
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
  },
  {
    id: 2,
    name: "Alex Rivera",
    role: "Senior Developer",
    company: "CodeCraft",
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "The platform's intuitive design and powerful features have significantly improved our team's productivity.",
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Design Director",
    company: "PixelPerfect",
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "An exceptional tool that has streamlined our design process and enhanced collaboration across teams.",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-12">
      <div className="overflow-hidden relative bg-black rounded-xl p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
          >
            <div className="relative w-48 h-48 md:w-32 md:h-32 lg:w-48 lg:h-48 flex-shrink-0">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                layout="fill"
                objectFit="cover"
                className="rounded-full md:rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-4 text-center md:text-left">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-400">
                  {testimonials[currentIndex].role} at{" "}
                  {testimonials[currentIndex].company}
                </p>
              </div>
              <blockquote className="text-lg md:text-xl text-white">
                "{testimonials[currentIndex].quote}"
              </blockquote>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center md:justify-end gap-2 mt-8 md:mt-0 md:absolute md:bottom-8 md:right-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevious}
            className="h-10 w-10 rounded-full bg-gray-800/50 hover:bg-gray-800 text-white"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous testimonial</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            className="h-10 w-10 rounded-full bg-gray-800/50 hover:bg-gray-800 text-white"
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
