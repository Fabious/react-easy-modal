import { defineConfig } from "tsup";

export default defineConfig({
  esbuildOptions: (options) => {
    // Append "use client" to the top of the react entry point
    options.banner = {
      js: '"use client";',
    };
  },
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  minify: true,
  dts: true,
  sourcemap: true,
  clean: true,
});
