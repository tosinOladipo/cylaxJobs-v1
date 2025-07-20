import Image from "next/image";
import Hero from "./_components/Hero";
import CategoryCarousel from "./_components/CategoryCarousel";
import Container from "@/components/container";
import FeaturedJobs from "./_components/FeaturedJobs";

export default async function Home () {

  return (
    <main className="pb-10">
      <Hero />

      <section className="flex flex-col">
        <Container>
          <h2 className="text-2xl font-bold pt-14 text-center text-blue-600">
            Popular Job Categories
          </h2>
          <p className="text-center text-gray-600 text-md py-3 mb-6">
            500+ jobs - 30 new jobs added
          </p>
          <CategoryCarousel />
        </Container>
      </section>

      <section className="flex flex-col">
        <Container>
          <h2 className="text-2xl font-bold pt-14 text-center  text-blue-600">
            Featured Jobs
          </h2>
          <p className="text-center text-gray-600 text-md py-3 mb-6">
            Find your deserving job to build your career
          </p>
          <FeaturedJobs/>
        </Container>
      </section>
    </main>
  );
}
