import React from "react";
import AddProfileForm from "./_component/AddProfileForm";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const Profile = () => {
  const queryClient = new QueryClient();
  return (
    <section className="h-screen container mx-auto flex flex-col gap-2 justify-center items-center">
      <div className="text-2xl font-bold capitalize text-blue-400">
        Create personal profile
      </div>
      <p className="mb-10 text-gray-500">Fill the form below</p>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <AddProfileForm />
      </HydrationBoundary>
    </section>
  );
};

export default Profile;
