"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { QrVCard } from "@/utils/values";
import { WandSparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { useQrStore } from "@/hooks/use-qr-store";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  forename: z.string(),
  surname: z.string(),
  mobile: z.string(),
  street: z.string(),
  city: z.string(),
  zip: z.string().max(5, { message: "Must be 5 or fewer characters" }),
  state: z.string(),
  country: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  fax: z.string().optional(),
  company: z.string().optional(),
  job: z.string().optional(),
  website: z.string().optional(),
});

export function VcardForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      forename: "",
      surname: "",
      mobile: "",
      street: "",
      city: "",
      zip: "",
      state: "",
      country: "",
      email: "",
      phone: "",
      fax: "",
      company: "",
      job: "",
      website: "",
    },
  });

  const update = useQrStore((state) => state.updateValues);
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const result = QrVCard(
        values.forename,
        values.surname,
        values.mobile,
        values.street,
        values.city,
        values.zip,
        values.state,
        values.country,
        values.email,
        values.phone,
        values.fax,
        values.company,
        values.job,
        values.website
      );
      update(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
            <span className="font-semibold text-lg self-center">Name</span>
            <FormField
              control={form.control}
              name="forename"
              render={({ field }) => (
                <FormItem className="space-y-0 col-span-1 md:col-span-2">
                  <Label htmlFor="forename" className="sr-only">
                    Forename
                  </Label>
                  <FormControl>
                    <Input
                      id="forename"
                      type="text"
                      placeholder="Forename"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem className="space-y-0 col-span-1 md:col-span-2">
                  <Label htmlFor="surname" className="sr-only">
                    Surname
                  </Label>
                  <FormControl>
                    <Input
                      id="surname"
                      type="text"
                      placeholder="Surname"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
            <span className="font-semibold text-lg self-center">Contact</span>
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem className="space-y-0 col-span-1 md:col-span-4">
                  <Label htmlFor="mobile" className="sr-only">
                    Mobile
                  </Label>
                  <FormControl>
                    <Input
                      id="mobile"
                      type="text"
                      placeholder="Mobile no."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="space-y-0 col-span-1 md:col-start-2 md:col-end-4">
                  <Label htmlFor="phone" className="sr-only">
                    Phone
                  </Label>
                  <FormControl>
                    <Input
                      id="phone"
                      type="text"
                      placeholder="Phone no."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fax"
              render={({ field }) => (
                <FormItem className="space-y-0 col-span-1 md:col-start-4 md:col-end-6">
                  <Label htmlFor="fax" className="sr-only">
                    Fax
                  </Label>
                  <FormControl>
                    <Input
                      id="fax"
                      type="text"
                      placeholder="Fax no."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
            <span className="font-semibold text-lg self-center">Email</span>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-0 col-span-1 md:col-span-4">
                  <Label htmlFor="email" className="sr-only">
                    Email address
                  </Label>{" "}
                  <FormControl>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
            <span className="font-semibold text-lg self-center">Company</span>
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem className="space-y-0 col-span-1 md:col-span-2">
                  <Label htmlFor="company" className="sr-only">
                    Company
                  </Label>
                  <FormControl>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Company"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="job"
              render={({ field }) => (
                <FormItem className="space-y-0 col-span-1 md:col-span-2">
                  <Label htmlFor="job" className="sr-only">
                    Job
                  </Label>
                  <FormControl>
                    <Input id="job" type="text" placeholder="Job" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
            <span className="font-semibold text-lg self-center">Address</span>
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem className="space-y-0 col-span-1 md:col-span-4">
                  <Label htmlFor="street" className="sr-only">
                    Street
                  </Label>
                  <FormControl>
                    <Input
                      id="street"
                      type="text"
                      placeholder="Street"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="space-y-0 col-span-1 md:col-start-2 md:col-end-4">
                  <Label htmlFor="city" className="sr-only">
                    City
                  </Label>
                  <FormControl>
                    <Input
                      id="city"
                      type="text"
                      placeholder="City"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="zip"
              render={({ field }) => (
                <FormItem className="space-y-0 col-span-1 md:col-start-4 md:col-end-6">
                  <Label htmlFor="zip" className="sr-only">
                    ZIP
                  </Label>
                  <FormControl>
                    <Input id="zip" type="text" placeholder="ZIP" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem className="space-y-0 col-span-1 md:col-start-2 md:col-end-6">
                  <Label htmlFor="state" className="sr-only">
                    State
                  </Label>
                  <FormControl>
                    <Input
                      id="state"
                      type="text"
                      placeholder="State"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="space-y-0 col-span-1 md:col-start-2 md:col-end-6">
                  <Label htmlFor="country" className="sr-only">
                    Country
                  </Label>
                  <FormControl>
                    <Input
                      id="country"
                      type="text"
                      placeholder="Country"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
            <span className="font-semibold text-lg self-center">Website</span>
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem className="space-y-0 col-span-1 md:col-span-4">
                  <Label htmlFor="website" className="sr-only">
                    Website
                  </Label>
                  <FormControl>
                    <Input
                      id="website"
                      type="url"
                      placeholder="ex. www.yourwebsite.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="pt-3">
            <Button type="submit" className="w-full sm:w-fit">
              Generate <WandSparkles className="size-4 flex-shrink-0 ml-2" />
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
