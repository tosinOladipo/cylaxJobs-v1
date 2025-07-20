"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormSelect, {
  CustomFormField,
  CustomFormStateSelect,
  CustomFormSwitch,
  CustomFormTextArea,
} from "@/components/form/FormComponents";
import { createAndEditJobSchema, CreateAndEditJobType } from "@/utils/schema";
import { nigerianStates } from "@/utils/data/nigeriaStates";
import { jobPostType, qualification } from "@/utils/types";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createJobAction } from "@/utils/actions/jobs/actions";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

const JobForm = () => {

 const { user } = useSelector((state: RootState) => state.user);

    // logic
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditJobType) => createJobAction(values),
    onSuccess: (data) => {
      if (!data) {
        toast("Something went wrong", {
            description: "Unable to create job",
          })
        return;
      } 
  
      toast("Successfull", {
            description: "Your job has been created",
          })
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
        router.push('/dashboard/manage-jobs')
      // form.reset();
    },
  });


    
  // 1. Define your form.
  const form = useForm<z.infer<typeof createAndEditJobSchema>>({
  resolver: zodResolver(createAndEditJobSchema),
  defaultValues: {
    jobTitle: "",
    companyId: user?.companyId ?? "",
    jobDesc: "",
    jobIndustry: "",
    jobCategory: "",
    jobType: "",
    experience: "",
    qualification: "",
    salary: "",
    email: "",
    location: "",
    state: "",
    featured: false,
    endDate: "",
  },
});




  function onSubmit(values: CreateAndEditJobType) {
    mutate(values);
    console.log(values);
  }


  return (
    <section className="flex flex-col">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <CustomFormField
            name="companyId"
            labelText="Company Id"
            control={form.control}
            className="border-0 bg-blue-50 py-6"
          />
          <CustomFormField
            name="jobTitle"
            labelText="Job Title"
            control={form.control}
            className="border-0 bg-blue-50 py-6"
          />
          <CustomFormTextArea
            name="jobDesc"
            labelText="Job Description"
            placeholder="Enter job description"
            message="Include rquirements and skills"
            control={form.control}
            className="border-0 bg-blue-50 min-h-[100px]"
          />

          <div className="grid gap-6 md:grid-cols-2 items-start">
            {/* firstname */}
            <CustomFormField
              name="jobIndustry"
              labelText="Job Industry"
              control={form.control}
              className="border-0 bg-blue-50 py-6"
            />

            {/* lastname */}
            <CustomFormField
              name="jobCategory"
              labelText="Job Category"
              control={form.control}
              className="border-0 bg-blue-50 py-6"
            />

               {/* job type */}
          <CustomFormSelect
            name='jobType'
            control={form.control}
            labelText='Job type'
            items={Object.values(jobPostType)}
            className="border-0 bg-blue-50 py-6"
          />

            {/* email */}
            <CustomFormField
              name="experience"
              labelText="Experience"
              control={form.control}
              className="border-0 bg-blue-50 py-6"
            />

              {/* job qualification */}
          <CustomFormSelect
            name='qualification'
            control={form.control}
            labelText='Qualification'
            items={Object.values(qualification)}
            className="border-0 bg-blue-50 py-6"
          />

            {/* email */}
            <CustomFormField
              name="salary"
              labelText="Salary"
              control={form.control}
              className="border-0 bg-blue-50 py-6"
            />


            {/* email */}
            <CustomFormField
              name="email"
              labelText="Email"
              control={form.control}
              className="border-0 bg-blue-50 py-6"
            />


            {/* email */}
            <CustomFormField
              name="location"
              labelText="Location"
              control={form.control}
              className="border-0 bg-blue-50 py-6"
            />

            {/* job state */}
          <CustomFormStateSelect
            name='state'
            control={form.control}
            labelText='State'
            items={Object.values(nigerianStates)}
            className="border-0 bg-blue-50 py-6"
          />

            <CustomFormField
              name="endDate"
              labelText="End Date"
              control={form.control}
              className="border-0 bg-blue-50 py-6"
            />
          </div>

          <div>
            <CustomFormSwitch
              name="featured"
              labelText="Feature the job post"
              desc="Switch on the button, if you are posting jobs"
              control={form.control}
              className="bg-green-200 text-green-700 border-0"
            />
          </div>

          <Button type="submit" className="w-full py-6 capitalize">
            Post job
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default JobForm;
