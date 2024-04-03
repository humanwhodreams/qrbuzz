"use client";

import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { QRCodeCanvas } from "qrcode.react";

export function GenerateQR() {
  return (
    <Card>
      <CardHeader>
        <CardDescription>Generated QR code</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 justify-self-center md:col-span-3">
            <div
              style={{
                height: "auto",
                margin: "0 auto",
                maxWidth: 240,
                width: "100%",
              }}
            >
              <QRCodeCanvas
                size={240}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                level={"L"}
                includeMargin={false}
                value="https://reactjs.org/"
              />
            </div>
          </div>

          <div className="col-span-2 md:col-span-3 space-y-3">
            <div className="space-y-1">
              <Label>Background</Label>
              <Input type="color" />
            </div>

            <div className="space-y-1">
              <Label>Foreground</Label>
              <Input type="color" />
            </div>

            <div className="space-y-1">
              <Label>Format</Label>
              <Select defaultValue="png">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="png">PNG</SelectItem>
                  <SelectItem value="svg">SVG</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4">
              <Button className="w-full">
                Download <Download className="size-4 flex-shrink-0 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
