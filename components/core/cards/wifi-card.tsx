import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import { WifiForm } from "../forms/wifi-form";

export function WifiCard() {
  return (
    <Card>
      <CardHeader>
        <CardDescription>
          Create a QR code to share Wi-Fi credentails
        </CardDescription>
      </CardHeader>
      <CardContent>
        <WifiForm />
      </CardContent>
    </Card>
  );
}
