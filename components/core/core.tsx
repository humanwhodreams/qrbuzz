import { FileText, Link2, User, Wifi } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { GenerateQR } from "./generate-qr";
import { PlainTextCard } from "./cards/plain-text-card";
import { UrlCard } from "./cards/url-card";
import { VcardCard } from "./cards/vcard-card";
import { WifiCard } from "./cards/wifi-card";

export function Core() {
  return (
    <Tabs defaultValue="url" className="grid">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="url">
          <Link2 className="flex-shrink-0 mr-2 size-4" />
          URL
        </TabsTrigger>
        <TabsTrigger value="text">
          <FileText className="flex-shrink-0 mr-2 size-4" />
          Plain Text
        </TabsTrigger>
        <TabsTrigger value="wifi">
          <Wifi className="flex-shrink-0 mr-2 size-4" />
          Wi-Fi
        </TabsTrigger>
        <TabsTrigger value="vcard">
          <User className="flex-shrink-0 mr-2 size-4" />
          vCard
        </TabsTrigger>
      </TabsList>
      <TabsContent value="url">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          <div className="md:col-span-2">
            <UrlCard />
          </div>
          <div className="md:grid-cols-1">
            <GenerateQR />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="text">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          <div className="md:col-span-2">
            <PlainTextCard />
          </div>
          <div className="md:grid-cols-1">
            <GenerateQR />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="wifi">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          <div className="md:col-span-2">
            <WifiCard />
          </div>
          <div className="md:grid-cols-1">
            <GenerateQR />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="vcard">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          <div className="md:col-span-2">
            <VcardCard />
          </div>
          <div className="md:grid-cols-1">
            <GenerateQR />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
