import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "@cps-elements/web/themes/light.css";

import { setBasePath } from "@cps-elements/web/utilities/base-path";
import { registerIconLibrary } from "@cps-elements/web/utilities/icon-library";

setBasePath("https://cdn.jsdelivr.net/npm/@cps-elements/web");

registerIconLibrary("uil", {
  resolver: (name) => {
    const [_, file, mode] = name.match(/^(.*?)(-fill|-mono|-thin)?$/)!;
    const folder =
      { "-fill": "solid", "-mono": "monochrome", "-thin": "thinline" }[mode] ??
      "line";
    return `https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.5/svg/${folder}/${file}.svg`;
  },
  mutator: (svg) => {
    svg.setAttribute("fill", "currentColor");
    svg.removeAttribute("id");
    svg.removeAttribute("data-name");
    svg.innerHTML = svg.innerHTML
      .replace(
        /class="uim-primary"/g,
        'style="color: rgb(var(--cps-color-neutral-600)"'
      )
      .replace(
        /class="uim-secondary"/g,
        'style="color: rgb(var(--cps-color-neutral-500)"'
      )
      .replace(
        /class="uim-tertiary"/g,
        'style="color: rgb(var(--cps-color-neutral-300)"'
      )
      .replace(
        /class="uim-quaternary"/g,
        'style="color: rgb(var(--cps-color-neutral-200)"'
      );
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
