import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function VcardForm() {
  return (
    <>
      <form action="" className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          <span className="font-semibold text-lg self-center">
            Name
          </span>

          <div className="col-span-1 md:col-span-2">
            <Label htmlFor="forename" className="sr-only">
              Forename
            </Label>
            <Input id="forename" type="text" placeholder="Forename" />
          </div>

          <div className="col-span-1 md:col-span-2">
            <Label htmlFor="surname" className="sr-only">
              Forename
            </Label>
            <Input id="surname" type="text" placeholder="Surname" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          <span className="font-semibold text-lg self-center">
            Contact
          </span>

          <div className="col-span-1 md:col-span-4">
            <Label htmlFor="mobile" className="sr-only">
              Mobile
            </Label>
            <Input id="mobile" type="text" placeholder="Mobile no." />
          </div>

          <div className="col-span-1 md:col-start-2 md:col-end-4">
            <Label htmlFor="phone" className="sr-only">
              Phone
            </Label>
            <Input id="phone" type="text" placeholder="Phone no." />
          </div>

          <div className="col-span-1 md:col-start-4 md:col-end-6">
            <Label htmlFor="fax" className="sr-only">
              Fax
            </Label>
            <Input id="fax" type="text" placeholder="Fax no." />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          <span className="font-semibold text-lg self-center">
            Email
          </span>

          <div className="col-span-1 md:col-span-4">
            <Label htmlFor="email" className="sr-only">
              Email address
            </Label>
            <Input id="email" type="email" placeholder="Email address" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          <span className="font-semibold text-lg self-center">
            Company
          </span>

          <div className="col-span-1 md:col-span-2">
            <Label htmlFor="company" className="sr-only">
              Company
            </Label>
            <Input id="company" type="text" placeholder="Company" />
          </div>

          <div className="col-span-1 md:col-span-2">
            <Label htmlFor="job" className="sr-only">
              Job
            </Label>
            <Input id="job" type="text" placeholder="Job" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          <span className="font-semibold text-lg self-center">
            Address
          </span>

          <div className="col-span-1 md:col-span-4">
            <Label htmlFor="street" className="sr-only">
              Street
            </Label>
            <Input id="street" type="text" placeholder="Street" />
          </div>

          <div className="col-span-1 md:col-start-2 md:col-end-4">
            <Label htmlFor="city" className="sr-only">
              City
            </Label>
            <Input id="city" type="text" placeholder="City" />
          </div>

          <div className="col-span-1 md:col-start-4 md:col-end-6">
            <Label htmlFor="zip" className="sr-only">
              ZIP
            </Label>
            <Input id="zip" type="text" placeholder="ZIP" />
          </div>

          <div className="col-span-1 md:col-start-2 md:col-end-6">
            <Label htmlFor="state" className="sr-only">
              State
            </Label>
            <Input id="state" type="text" placeholder="State" />
          </div>

          <div className="col-span-1 md:col-start-2 md:col-end-6">
            <Label htmlFor="country" className="sr-only">
              Country
            </Label>
            <Input id="country" type="text" placeholder="Country" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          <span className="font-semibold text-lg self-center">
            Website
          </span>

          <div className="col-span-1 md:col-span-4">
            <Label htmlFor="website" className="sr-only">
              Website
            </Label>
            <Input id="website" type="url" placeholder="ex. www.yourwebsite.com" />
          </div>
        </div>
      </form>
    </>
  );
}
