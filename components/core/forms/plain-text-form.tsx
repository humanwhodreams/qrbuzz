"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { QrPlainText } from "@/utils/values";
import { Textarea } from "@/components/ui/textarea";
import { WandSparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { useQrStore } from "@/hooks/use-qr-store";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  text: z.string().min(2).max(128),
});

export function PlainTextForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  });

  const update = useQrStore((state) => state.updateValues);
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const result = QrPlainText(values.text);
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
          name="text"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="pt">Plain Text</Label>
              <FormControl>
                <Textarea
                  id="pt"
                  placeholder="ex. An awesome example"
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
