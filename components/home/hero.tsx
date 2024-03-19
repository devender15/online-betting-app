"use client";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-screen h-screen relative">
      <div className="absolute inset-0 w-full h-full bg-black/35 flex flex-col gap-y-10 justify-center items-center">
        <div>
          <h1 className="text-8xl font-semibold text-white text-center">
            9xr Bet
          </h1>
          <p className="text-xl text-center text-gray-100">Play and win</p>
        </div>
        <Link href="/sign-in">
          <button className="rounded-full p-3 border border-zinc-500 text-white bg-gradient-to-tr from-gray-500 to-zinc-700 hover:from-gray-600 hover:to-zinc-800 hover:transition-all duration-500 ease-out">
            Login / Register
          </button>
        </Link>
      </div>
      <div className="w-full h-full">
        <Image
          src="/assets/images/home2222.jpg"
          alt="hero"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
