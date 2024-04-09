"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { QrURL } from "@/utils/values";
import { WandSparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { useQrStore } from "@/hooks/use-qr-store";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  url: z
    .string()
    .min(2, { message: "Must be 5 or more characters long" })
    .url({ message: "Invalid url" }),
});

export function UrlForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  });
  const update = useQrStore((state) => state.updateValues);
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const result = QrURL(values.url);
      update(result);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="url">URL</Label>
              <FormControl>
                <Input
                  id="url"
                  type="url"
                  placeholder="ex. https://www.example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="pt-3">
          <Button type="submit" className="w-full sm:w-fit">
            Generate <WandSparkles className="size-4 flex-shrink-0 ml-2" />
          </Button>
        </div>
      </form>
    </Form>
  );
}
