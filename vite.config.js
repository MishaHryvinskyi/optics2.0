import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import path from "path";
import { defineConfig } from "vite";
import glob from "fast-glob";
import { fileURLToPath } from "url";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      png: {
        quality: 86,
      },
      jpeg: {
        quality: 86,
      },
      jpg: {
        quality: 86,
      },
    }),
    {
      name: 'imagemin-webp',
      async generateBundle() {
        const files = await glob("./src/images/**/*.{jpg,png,jpeg}");
        await imagemin(files, {
          destination: "./src/images/webp/",
          plugins: [imageminWebp({ quality: 86 })],
        });
      },
    },
  ],
  build: {
    minify: false, // disable minification
    rollupOptions: {
      input: Object.fromEntries(
        glob
          .sync(["./*.html", "./pages/**/*.html"])
          .map((file) => [
            path.relative(__dirname, file.slice(0, file.length - path.extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      // output unminified CSS file
      output: {
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});