"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft } from "lucide-react";
import InterviewFormContainer from "../../_components/InterviewFormContainer";
import QuestionList from "../../_components/QuestionList";
import { toast } from "sonner";


export type InterviewFormDataType = {
  [key: string]: any; // customize this based on your form structure
};

const CreateInterview = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<InterviewFormDataType>({});
  const onHandleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onGotoNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!formData['interviewDuration']) {
      toast('Please select interview duruation')
      return;
    }
   setStep(step + 1);
  }

  return (
    <section className="flex flex-col gap-6 pt-8 w-[50%] mx-auto justify-center">
      <h2 className="text-2xl font-bold capitalize  flex gap-3 items-center text-blue-600">
        <ArrowLeft className="cursor-pointer" onClick={() => router.back()} />{" "}
        Create new interview
      </h2>

      <Progress value={step * 33.3} className="w-full bg-blue-200" />
      {step == 1 ? (
        <InterviewFormContainer onHandleInputChange={onHandleInputChange} GotoNext={onGotoNext} />
      ) : step == 2 ? (
        <QuestionList formData={formData} />
      ) : null}
    </section>
  );
};

export default CreateInterview;
