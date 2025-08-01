"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  CustomFormField,
  CustomFormSwitch,
} from "@/components/form/FormComponents";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createUserAction } from "@/utils/actions/users/actions";
import { useRouter } from "next/navigation";
import { createAndEditUserSchema, CreateAndEditUserType } from "@/utils/schema";


const AddProfileForm = () => {

  // logic
const queryClient = useQueryClient();
const router = useRouter();
const { mutate, isPending } = useMutation({
  mutationFn: (values: CreateAndEditUserType) => createUserAction(values),
  onSuccess: (data) => {
    if (!data) {
      toast("Something went wrong", {
          description: "Unable to create profile",
        })
      return;
    } 

    toast("Successfull", {
          description: "Your profile has been created",
        })
    queryClient.invalidateQueries({ queryKey: ['users'] });

    if (data.employer === true) {
        router.replace('/profile/company');
    }

    if (data.employer === false) {
      router.refresh()
      router.push('/')
    }
    // form.reset();
  },
});


  // 1. Define your form.
  const form = useForm<z.infer<typeof createAndEditUserSchema>>({
    resolver: zodResolver(createAndEditUserSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      employer: false
    },
  });

function onSubmit(values: CreateAndEditUserType) {
  mutate(values);
  console.log(values)
}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-4 md:grid-cols-2 items-start">
          {/* firstname */}
          <CustomFormField name="firstname" control={form.control} />

          {/* lastname */}
          <CustomFormField name="lastname" control={form.control} />

          {/* email */}
          <CustomFormField name="email" control={form.control} />

          {/* email */}
          <CustomFormField name="phonenumber" control={form.control} />
        </div>

        <div>
          <CustomFormSwitch
            name="employer"
            labelText="Are you an employer"
            desc="Switch on the button, if you are posting jobs"
            control={form.control}
          />
        </div>

        <Button type="submit" className="w-full py-6 capitalize" disabled={isPending}>
          {isPending ? 'loading...' : 'create profile'}
        </Button>
      </form>
    </Form>
  );
};

export default AddProfileForm;
