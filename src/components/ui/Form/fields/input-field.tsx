import { type Control } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "..";
import Input, { InputProps } from "@/components/ui/input";

type Props = InputProps & {
  description?: string;
  loading?: boolean;
  control: Control<any>;
};

export default function InputField({
  loading,
  control,
  name,
  label,
  description,
  type = "text",
  ...props
}: Props) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} disabled={loading} {...field} {...props} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
