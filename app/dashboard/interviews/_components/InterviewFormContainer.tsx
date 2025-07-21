import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import interviewTypeList, { InterViewType } from "@/utils/data/interviewType";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";



// Define prop types
type InterviewFormContainerProps = {
  onHandleInputChange: (field: string, value: string | string[]) => void,
  GotoNext: (...args: any[]) => void
};

const InterviewFormContainer = ({onHandleInputChange, GotoNext} : InterviewFormContainerProps) => {

  const [interviewType, setInterviewType] = useState<string[]>([])

  useEffect(()=> {
    if(interviewType) {
            onHandleInputChange('type',interviewType)
    }
  },[interviewType])

  const AddInterviewType = (title: string) => {
  const alreadySelected = interviewType.includes(title);
  if (!alreadySelected) {
    setInterviewType(prev => [...prev, title]);
  } else {
    const result = interviewType.filter(item => item !== title);
    setInterviewType(result);
  }
};


  return (
    <form className="flex flex-col gap-4 p-5 rounded-2xl bg-white shadow-sm">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold capitalize">Job title</h3>
        <Input type="text" disabled className="bg-blue-50"  
        onChange={(event => onHandleInputChange('jobtitle',event.target.value))}/>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold capitalize">Job description</h3>
        <Textarea
          placeholder="Type your message here."
          className="min-h-[100px] bg-blue-50"
          disabled
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold capitalize">Experience</h3>
        <Input type="text" disabled className="bg-blue-50" />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold capitalize">Interview duration</h3>
        <Select onValueChange={(value => onHandleInputChange('interviewDuration',value))}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="5 Mins">5 Mins</SelectItem>
              <SelectItem value="15 Mins">15 Mins</SelectItem>
              <SelectItem value="30 Mins">30 Mins</SelectItem>
              <SelectItem value="45 Mins">45 Mins</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2 my-3">
        <h3 className="text-sm font-semibold capitalize">interview type</h3>
        <div className="flex gap-2.5 flex-wrap">
          {interviewTypeList.map((type) => (
            <div  key={type.title} 
                className={`flex gap-2 px-2 py-1.5 border text-blue-600 text-sm items-center font-medium rounded-2xl cursor-pointer hover:bg-blue-100
                    ${interviewType.includes(type.title) && 'bg-blue-700 text-white hover:text-blue-700'}
                    `}
            onClick={()=> AddInterviewType(type.title)}>
              {type.icon}
              <span>{type.title}</span>
            </div>
          ))}
        </div>
      </div>
    
       <div className="flex justify-end">
          <Button className="capitalize bg-blue-600 text-white py-5" onClick={GotoNext}>Genearate question <ArrowRight/></Button>
       </div>
      

    </form>
  );
};

export default InterviewFormContainer;
