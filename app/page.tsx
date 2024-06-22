"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { HomeIcon } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const { toast } = useToast();
  const [input, setInput] = useState<string>();

  const action = () => {
    if (!input) return;
    toast({
      title: "Input value",
      description: input,
    });
    setInput("");
  };

  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <HomeIcon />
              <h1 className="text-2xl font-bold">Home Page</h1>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Input
              type="text"
              value={input}
              placeholder="Some text"
              className="w-[300px]"
              onChange={(e) => setInput(e.target.value)}
            />
            <Button onClick={action}>Submit</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
