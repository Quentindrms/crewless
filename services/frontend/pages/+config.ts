import type { Config } from "vike/types";
import vikeSolid from "vike-solid/config";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/head-tags
  title: "Crewless",
  description: "Demo showcasing Vike",

  extends: [vikeSolid],
} satisfies Config;
