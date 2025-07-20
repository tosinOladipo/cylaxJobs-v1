import React from "react";
import AddCompanyForm from "../_component/AddCompanyForm";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";


const Company = () => {
  const queryClient = new QueryClient();
  return (
    <section className="h-screen container mx-auto flex flex-col gap-2 justify-center items-center">
      <div className="text-2xl font-bold capitalize">
        Create company profile
      </div>
      <p className="mb-4 text-sm text-gray-500">Fill the form below</p>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <AddCompanyForm />
      </HydrationBoundary>
      
    </section>
  );
};

export default Company;
