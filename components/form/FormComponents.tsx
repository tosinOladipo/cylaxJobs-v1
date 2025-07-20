import { Control } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormDescription,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "../ui/switch";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { NigerianStateType } from "@/utils/data/nigeriaStates";
import { ReactNode } from "react";


type CustomFormFieldProps = {
  name: string;
  labelText?: string;
  control: Control<any>;
  className?: string;
};

export function CustomFormField({ name, control, labelText, className }: CustomFormFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize">{labelText}</FormLabel>
          <FormControl>
            <Input {...field} className={cn(className)}/>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

type CustomFormTextAreaProps = {
  name: string;
  labelText?: string;
  control: Control<any>;
  message: string;
  placeholder: string;
  className?: string;
}


export function CustomFormTextArea({
  name,
  labelText,
  control,
  className,
  placeholder,
  message
} : CustomFormTextAreaProps) {
  return (
    <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{labelText}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={placeholder}
                  className={cn("resize-none",className)}
                  {...field}
                />
              </FormControl>
              <FormDescription>
               {message}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
  )
} 


type CustomFormSwitchProps = {
  name: string;
  labelText?: string;
  control: Control<any>;
  desc: string;
  className?: string
};

export function CustomFormSwitch({
  name,
  labelText,
  control,
  desc,
  className
}: CustomFormSwitchProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("flex flex-row items-center justify-between rounded-lg border p-4 shadow-sm",className)}>
          <div className="space-y-2">
            <FormLabel className="font-semibold">{labelText}</FormLabel>
            <FormDescription className="text-xs">{desc}</FormDescription>
          </div>
          <FormControl>
            <Switch checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
        </FormItem>
      )}
    />
  );
}


type CustomFormStateSelectProps = {
  name: string;
  control: Control<any>;
  items: NigerianStateType[];
  labelText?: string;
  className?: string
};


export function CustomFormStateSelect({
  name,
  control,
  items,
  labelText,
  className
}: CustomFormStateSelectProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize">{labelText || name}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className={cn("w-full",className)}>
                <SelectValue />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {items.map((item) => {
                return (
                  <SelectItem key={item.name} value={item.name}>
                    {item.name}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}




type CustomFormSelectProps = {
  name: string;
  control: Control<any>;
  items: string[];
  labelText?: string;
  className?: string;
};

export function CustomFormSelect({
  name,
  control,
  items,
  labelText,
  className

}: CustomFormSelectProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize">{labelText || name}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className={cn("w-full",className)}>
                <SelectValue />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {items.map((item) => {
                return (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
export default CustomFormSelect;




