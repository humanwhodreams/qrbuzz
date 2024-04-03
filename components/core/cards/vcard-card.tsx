import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import { VcardForm } from "../forms/vcard-form";

export function VcardCard() {
  return (
    <Card>
      <CardHeader>
        <CardDescription>
          Create a QR code to share contact information easily
        </CardDescription>
      </CardHeader>
      <CardContent>
        <VcardForm />
      </CardContent>
    </Card>
  );
}
