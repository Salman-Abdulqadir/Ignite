import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Monitor,
  Apple,
  Terminal,
  Gamepad,
  Play,
  Smartphone,
  Bot,
  Tablet,
  Gamepad2,
} from "lucide-react";

const platformIcons = {
  pc: <Monitor className="h-4 w-4" />,
  mac: <Apple className="h-4 w-4" />,
  linux: <Terminal className="h-4 w-4" />,
  xbox: <Gamepad className="h-4 w-4" />,
  playstation: <Play className="h-4 w-4" />,
  android: <Smartphone className="h-4 w-4" />,
  sega: <Bot className="h-4 w-4" />,
  ios: <Tablet className="h-4 w-4" />,
  nintendo: <Gamepad2 className="h-4 w-4" />,
};

export default function PlatformProgress({ platforms, isLoading }) {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Release Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Skeleton className="w-4 h-4" />
                    <Skeleton className="w-16 h-4" />
                  </div>
                  <Skeleton className="w-12 h-4" />
                </div>
                <Skeleton className="h-2 w-full" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Release Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {platforms?.results?.map((item) => (
            <div key={item.platform.id} className="space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {platformIcons[item.platform.slug] || (
                    <Gamepad className="h-4 w-4" />
                  )}
                  <span className="text-sm text-muted-foreground">
                    {item.platform.name}
                  </span>
                </div>
                <span className="text-sm font-medium">{item.percent}%</span>
              </div>
              <Progress value={item.percent} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
