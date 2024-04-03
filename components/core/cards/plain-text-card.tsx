import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import { PlainTextForm } from "../forms/plain-text-form";

export function PlainTextCard() {
  return (
    <Card>
      <CardHeader>
        <CardDescription>
          Create a QR code to display a short message
        </CardDescription>
      </CardHeader>
      <CardContent>
        <PlainTextForm />
      </CardContent>
    </Card>
  );
}
