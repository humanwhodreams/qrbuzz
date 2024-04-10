"use client";

import * as React from "react";

import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { HexColorInput, HexColorPicker } from "react-colorful";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { Label } from "../ui/label";
import QRCodeCanvas from "qrcode.react";
import { cn } from "@/lib/utils";
import { useQrStore } from "@/hooks/use-qr-store";

export function QrBox() {
  const [foregroundColor, setForegroundColor] = React.useState("#000000");
  const [backgroundColor, setBackgroundColor] = React.useState("#ffffff");

  const value = useQrStore((state) => state.values);
  const update = useQrStore((state) => state.updateValues);

  const rf = React.useRef<HTMLDivElement>(null);

  const download = () => {
    if (rf.current) {
      const qrc = rf.current.querySelector("canvas");
      const dl = document.createElement("a");

      dl.href = qrc!!.toDataURL("image/png");
      dl.download = "generated-" + value.type + "-qrcode-by-qrbuzz.png";
      document.body.appendChild(dl);
      dl.click();
      document.body.removeChild(dl);
      update({ type: "url", value: "" });
    } else {
      console.log("Failed to process qrcode.");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardDescription>Generated QR code</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 justify-self-center md:col-span-3">
            <div
              ref={rf}
              style={{
                height: "auto",
                margin: "0 auto",
                maxWidth: 440,
                width: "100%",
                backgroundColor: backgroundColor,
              }}
            >
              <QRCodeCanvas
                size={440}
                bgColor={backgroundColor}
                fgColor={foregroundColor}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                level={"H"}
                includeMargin={true}
                value={value.value}
              />
            </div>
          </div>

          <div className="col-span-2 md:col-span-3 space-y-3">
            <div className="space-y-1">
              <Label>Background</Label>
              <Popover>
                <PopoverTrigger className="w-full border px-3 py-2 rounded-md h-10">
                  <div
                    className={cn(`w-full h-4 border border-border`)}
                    style={{ backgroundColor: backgroundColor }}
                  ></div>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="grid grid-cols-1">
                    <div className="pb-4">
                      <p className="text-sm text-muted-foreground font-medium ">
                        Select background color
                      </p>
                    </div>
                    <HexColorPicker
                      color={backgroundColor}
                      onChange={setBackgroundColor}
                      style={{
                        width: "254px",
                      }}
                    />
                    <div className=" mt-4 pb-1">
                      <p className="text-sm text-muted-foreground font-medium">
                        Color input &mdash; hex
                      </p>
                    </div>
                    <HexColorInput
                      color={backgroundColor}
                      onChange={setBackgroundColor}
                      className="px-3 py-2 h-10 border border-border rounded-md"
                      placeholder="#000000"
                    />
                    <p className="text-xs text-muted-foreground font-medium pt-4">
                      🎉 powered by react-colorful
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-1">
              <Label>Foreground</Label>
              <Popover>
                <PopoverTrigger className="w-full border px-3 py-2 rounded-md h-10">
                  <div
                    className={cn(`w-full h-4 border border-border`)}
                    style={{ backgroundColor: foregroundColor }}
                  ></div>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="grid grid-cols-1">
                    <div className="pb-4">
                      <p className="text-sm text-muted-foreground font-medium ">
                        Select foreground color
                      </p>
                    </div>
                    <HexColorPicker
                      color={foregroundColor}
                      onChange={setForegroundColor}
                      style={{
                        width: "254px",
                      }}
                    />
                    <div className=" mt-4 pb-1">
                      <p className="text-sm text-muted-foreground font-medium">
                        Color input &mdash; hex
                      </p>
                    </div>
                    <HexColorInput
                      color={foregroundColor}
                      onChange={setForegroundColor}
                      className="px-3 py-2 h-10 border border-border rounded-md"
                      placeholder="#000000"
                    />
                    <p className="text-xs text-muted-foreground font-medium pt-4">
                      🎉 powered by react-colorful
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <div className="pt-4">
              <Button
                className="w-full"
                onClick={download}
                disabled={value.value.length < 1 ? true : false}
              >
                Download <Download className="size-4 flex-shrink-0 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
