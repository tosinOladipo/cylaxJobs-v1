import React from "react";
import heroImg from "@/public/Hero-Img.png";
import Image from "next/image";
import HeroSearch from "./HeroSearch";
import Container from "@/components/container";

function Hero() {
  return (
    <section className="bg-[url(/heroBg.png)] bg-center bg-cover h-[95%] ">
      <div className="container mx-auto grid lg:grid-cols-7 gap-4">
        <div className="col-span-4 flex items-center">
          <div className="flex flex-col gap-2 pt-10">
            <h2 className="text-6xl font-bold tracking-tight space-x-1.5">
              Built for people. <span className="text-blue-600">Powered by AI</span>
            </h2>
            <span className="text-2xl font-light tracking-tight">
              With AI-powered interviews, your hiring never sleeps.
            </span>

            <div className="flex flex-col gap-3 pt-14">
              <span className="text-gray-600">
                Find Jobs, employment, career opportunities
              </span>
              <HeroSearch />
            </div>
          </div>
        </div>
        <div className="col-span-3 pt-30">
          <Image
            src={heroImg}
            alt="hero-image"
            className="hidden lg:block w-full h-[100%] object-contain"
          />
        </div>
      </div>  
    </section>
  );
}

export default Hero;
