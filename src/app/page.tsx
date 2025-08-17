"use client";

import { Download, Eraser } from "lucide-react";
import { domToPng } from "modern-screenshot";
import { useEffect, useState } from "react";
import CodeEditor from "@/components/CodeEditor";
import { Button } from "@/components/ui/button";
import { exampleHtml } from "@/data/example";
import { description, title } from "@/data/info";

export default function Home() {
  const [htmlInput, setHtmlInput] = useState("");

  useEffect(() => {
    setHtmlInput(exampleHtml);
  }, []);

  const saveScreenshot = () => {
    domToPng(document.querySelector("#screenshot-element") as Node).then(
      (dataUrl) => {
        const link = document.createElement("a");
        link.download = "screenshot.png";
        link.href = dataUrl;
        link.click();
      }
    );
  };

  return (
    <div>
      <div className="m-5 flex justify-between gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">{title}</h1>
          <h2>{description}</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setHtmlInput("")}
            type="button"
            variant="destructive"
          >
            Clear <Eraser className="size-4" />
          </Button>
          <Button onClick={saveScreenshot} type="button">
            Download <Download className="size-4" />
          </Button>
        </div>
      </div>
      <CodeEditor
        onChange={(value) => setHtmlInput(value ?? "")}
        value={htmlInput}
      />
      <div className="m-5">
        <div
          className="size-fit"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: This is needed for the app to work
          dangerouslySetInnerHTML={{ __html: htmlInput }}
          id="screenshot-element"
        />
      </div>
    </div>
  );
}
