import React from "react";
import AddProfileForm from "./_component/AddProfileForm";

const Profile = () => {
  return (
    <section className="h-screen container mx-auto flex flex-col gap-2 justify-center items-center">
      <div className="text-2xl font-bold capitalize">
        Create personal profile
      </div>
      <p>Fill the form below</p>
      <AddProfileForm />
    </section>
  );
};

export default Profile;
