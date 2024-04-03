import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function UrlForm() {
  return (
    <form action="" className="space-y-1">
      <Label htmlFor="url">URL</Label>
      <Input id="url" type="url" placeholder="ex. https://www.example.com" />
    </form>
  );
}
