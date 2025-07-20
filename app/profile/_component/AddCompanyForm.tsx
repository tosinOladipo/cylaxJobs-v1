"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  CustomFormField,
} from "@/components/form/FormComponents";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createAndEditCompanySchema, CreateAndEditCompanyType } from "@/utils/schema";
import { createCompanyAction } from "@/utils/actions/company/actions";


const AddCompanyForm = () => {

  // logic
const queryClient = useQueryClient();
const router = useRouter();
const { mutate, isPending } = useMutation({
  mutationFn: (values: CreateAndEditCompanyType) => createCompanyAction(values),
  onSuccess: (data) => {
    if (!data) {
      toast("Something went wrong", {
          description: "Unable to create company",
        })
      return;
    } 

    toast("Successfull", {
          description: "Your company has been created",
        })
    queryClient.invalidateQueries({ queryKey: ['companies'] });
      router.refresh()
      router.push('/')
    // form.reset();
  },
});


  // 1. Define your form.
  const form = useForm<z.infer<typeof createAndEditCompanySchema>>({
    resolver: zodResolver(createAndEditCompanySchema),
    defaultValues: {
      companyName: "",
      description: "",
      email: "",
      phonenumber: "",
      location: ""
    },
  });

function onSubmit(values: CreateAndEditCompanyType) {
  mutate(values);
  console.log(values)
}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-4 md:grid-cols-2 items-start">
          {/* firstname */}
          <CustomFormField name="companyName" control={form.control} />

          {/* lastname */}
          <CustomFormField name="description" control={form.control} />

          {/* email */}
          <CustomFormField name="email" control={form.control} />

          {/* email */}
          <CustomFormField name="phonenumber" control={form.control} />

          {/* email */}
          <CustomFormField name="location" control={form.control} />
        </div>

        <Button type="submit" className="w-full py-6 capitalize" disabled={isPending}>
          {isPending ? 'loading...' : 'create company'}
        </Button>
      </form>
    </Form>
  );
};

export default AddCompanyForm;
