import React from "react";
import AddCompanyForm from "../_component/AddCompanyForm";

const Company = () => {
  return (
    <section className="h-screen container mx-auto flex flex-col gap-2 justify-center items-center">
      <div className="text-2xl font-bold capitalize">
        Create company profile
      </div>
      <p>Fill the form below</p>
      <AddCompanyForm />
    </section>
  );
};

export default Company;
