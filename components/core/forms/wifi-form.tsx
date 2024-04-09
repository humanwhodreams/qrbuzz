"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { QrWiFi } from "@/utils/values";
import { WandSparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { useQrStore } from "@/hooks/use-qr-store";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const wifiSchema = z.object({
  ssid: z.string().min(2, {
    message: "Must be 2 or more characters long",
  }),
  hidden: z.boolean().default(false).optional(),
  password: z.string(),
  encryption: z.enum(["WEP", "WPA", "blank"], {
    required_error: "You need to select an encryption type.",
  }),
});

export function WifiForm() {
  const form = useForm<z.infer<typeof wifiSchema>>({
    resolver: zodResolver(wifiSchema),
    defaultValues: {
      ssid: "",
      hidden: false,
      password: "",
      encryption: "blank",
    },
  });

  const update = useQrStore((state) => state.updateValues);

  function onSubmit(values: z.infer<typeof wifiSchema>) {
    try {
      const result = QrWiFi(
        values.ssid,
        values.hidden,
        values.password,
        values.encryption
      );

      update(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <div className="space-y-1 grid">
          <FormField
            control={form.control}
            name="ssid"
            render={({ field }) => (
              <FormItem>
                <Label>SSID</Label>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="ex. awesome-example-wifi"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="hidden"
            render={({ field }) => (
              <FormItem className="flex items-center justify-end">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="mr-2"
                  />
                </FormControl>
                <Label>Hidden network</Label>
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-1 grid">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <Label>Password</Label>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="ex. 2GJ%'m/S/]+z7FuHu&@mj]*(RZI*d_"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-2 grid">
          <FormField
            control={form.control}
            name="encryption"
            render={({ field }) => (
              <FormItem>
                <Label>Encryption level</Label>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col md:flex-row md:items-center md:gap-4"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="blank" />
                      </FormControl>
                      <Label>None</Label>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="WPA" />
                      </FormControl>
                      <Label>WPA/WPA2</Label>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="WEP" />
                      </FormControl>
                      <Label>WEP</Label>
                    </FormItem>
                  </RadioGroup>
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
        </div>
      </form>
    </Form>
  );
}
