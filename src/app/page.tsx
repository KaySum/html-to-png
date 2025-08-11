"use client";

import { domToPng } from "modern-screenshot";
import { useState } from "react";
import CodeEditor from "@/components/CodeEditor";
import { Button } from "@/components/ui/button";
import { author, authorUrl, description, title } from "@/data/info";

export default function Home() {
  const [htmlInput, setHtmlInput] = useState("");

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
      <div className="m-5 flex justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">{title}</h1>
          <h2 className="text-xl">
            By{" "}
            <a className="text-blue-500 hover:underline" href={authorUrl}>
              {author}
            </a>
          </h2>
          <p>{description}</p>
        </div>

        <Button onClick={saveScreenshot} type="button">
          Download
        </Button>
      </div>
      <CodeEditor onChange={(value) => setHtmlInput(value ?? "")} />
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
