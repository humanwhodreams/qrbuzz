import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function PlainTextForm() {
  return (
    <form action="" className="space-y-1">
      <Label htmlFor="pt">Plain Text</Label>
      <Textarea id="pt" placeholder="ex. An awesome example" />
    </form>
  );
}
