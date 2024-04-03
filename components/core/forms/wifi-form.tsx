import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function WifiForm() {
  return (
    <>
      <form action="" className="space-y-3">
        <div className="space-y-1 grid">
          <Label htmlFor="ssid">SSID</Label>
          <Input id="ssid" type="text" placeholder="ex. awesome-example-wifi" />

          <div className="flex items-center justify-end">
            <Checkbox id="hidden" className="mr-2" />
            <Label htmlFor="hidden">Hidden network</Label>
          </div>
        </div>

        <div className="space-y-1 grid">
          <Label htmlFor="passw">Password</Label>
          <Input
            id="passw"
            type="password"
            placeholder="ex. 2GJ%'m/S/]+z7FuHu&@mj]*(RZI*d_"
          />
        </div>

        <div className="space-y-2 grid">
          <Label htmlFor="encryp">Encryption level</Label>

          <RadioGroup
            defaultValue="nopass"
            className="flex flex-col md:flex-row md:items-center md:gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="nopass" id="nopass" />
              <Label htmlFor="nopass">None</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="wpa" id="wpa-wpa2" />
              <Label htmlFor="wpa-wpa2">WPA/WPA2</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="wep" id="wep" />
              <Label htmlFor="wep">WEP</Label>
            </div>
          </RadioGroup>
        </div>
      </form>
    </>
  );
}
