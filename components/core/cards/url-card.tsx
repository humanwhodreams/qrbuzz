import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";

import { UrlForm } from "../forms/url-form";

export function UrlCard() {
  return (
    <Card>
      <CardHeader>
        <CardDescription>
          Create a QR code to redirect to an existing web URL
        </CardDescription>
      </CardHeader>
      <CardContent>
        <UrlForm />
      </CardContent>
    </Card>
  );
}
