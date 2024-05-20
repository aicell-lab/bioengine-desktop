// .electron-vendors.cache.json
var node = "16";

// packages/main/vite.config.js
import { join } from "path";
import { builtinModules } from "module";

// vitest-shared-extensions.config.js
import path from "node:path";
function coverageConfig(packageRoot, packageName) {
  const obj = {
    coverage: {
      all: true,
      clean: true,
      src: [packageRoot],
      exclude: [
        "**/builtin/**",
        "**/cypress/**",
        "**/dist/**",
        "**/node_modules/**",
        "**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
        "**/*.{tsx,cjs,js,d.ts}",
        "**/*-info.ts",
        "**/.{cache,git,idea,output,temp,cdix}/**",
        "**/*{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tailwind,postcss}.config.*"
      ],
      provider: "v8",
      reportsDirectory: path.join(packageRoot, "../../", `test-resources/coverage/${packageName}`),
      reporter: ["lcov", "text"]
    }
  };
  return obj;
}

// packages/main/vite.config.js
var __vite_injected_original_dirname = "/home/jeremy/documents/kth/bioengine-desktop/packages/main";
var PACKAGE_ROOT = __vite_injected_original_dirname;
var PACKAGE_NAME = "main";
var config = {
  mode: process.env.MODE,
  root: PACKAGE_ROOT,
  envDir: process.cwd(),
  resolve: {
    alias: {
      "/@/": join(PACKAGE_ROOT, "src") + "/"
    }
  },
  build: {
    sourcemap: "inline",
    target: `node${node}`,
    outDir: "dist",
    assetsDir: ".",
    minify: process.env.MODE === "production" ? "esbuild" : false,
    lib: {
      entry: "src/index.ts",
      formats: ["cjs"]
    },
    rollupOptions: {
      external: [
        "electron",
        "chokidar",
        "@kubernetes/client-node",
        "tar-fs",
        "ssh2",
        "analytics-node",
        "electron-devtools-installer",
        ...builtinModules.flatMap((p) => [p, `node:${p}`])
      ],
      output: {
        entryFileNames: "[name].cjs"
      }
    },
    emptyOutDir: true,
    reportCompressedSize: false
  },
  test: {
    ...coverageConfig(PACKAGE_ROOT, PACKAGE_NAME)
  }
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLmVsZWN0cm9uLXZlbmRvcnMuY2FjaGUuanNvbiIsICJwYWNrYWdlcy9tYWluL3ZpdGUuY29uZmlnLmpzIiwgInZpdGVzdC1zaGFyZWQtZXh0ZW5zaW9ucy5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcbiAgXCJjaHJvbWVcIjogXCI5OFwiLFxuICBcIm5vZGVcIjogXCIxNlwiXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL2plcmVteS9kb2N1bWVudHMva3RoL2Jpb2VuZ2luZS1kZXNrdG9wL3BhY2thZ2VzL21haW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2plcmVteS9kb2N1bWVudHMva3RoL2Jpb2VuZ2luZS1kZXNrdG9wL3BhY2thZ2VzL21haW4vdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvamVyZW15L2RvY3VtZW50cy9rdGgvYmlvZW5naW5lLWRlc2t0b3AvcGFja2FnZXMvbWFpbi92aXRlLmNvbmZpZy5qc1wiOy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjMgUmVkIEhhdCwgSW5jLlxuICogXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKiBcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICogXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmltcG9ydCB7bm9kZX0gZnJvbSAnLi4vLi4vLmVsZWN0cm9uLXZlbmRvcnMuY2FjaGUuanNvbic7XG5pbXBvcnQge2pvaW59IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHtidWlsdGluTW9kdWxlc30gZnJvbSAnbW9kdWxlJztcbmltcG9ydCB7IGNvdmVyYWdlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdml0ZXN0LXNoYXJlZC1leHRlbnNpb25zLmNvbmZpZyc7XG5cbmNvbnN0IFBBQ0tBR0VfUk9PVCA9IF9fZGlybmFtZTtcbmNvbnN0IFBBQ0tBR0VfTkFNRSA9ICdtYWluJztcbi8qKlxuICogQHR5cGUge2ltcG9ydCgndml0ZScpLlVzZXJDb25maWd9XG4gKiBAc2VlIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG4gKi9cbmNvbnN0IGNvbmZpZyA9IHtcbiAgbW9kZTogcHJvY2Vzcy5lbnYuTU9ERSxcbiAgcm9vdDogUEFDS0FHRV9ST09ULFxuICBlbnZEaXI6IHByb2Nlc3MuY3dkKCksXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJy9ALyc6IGpvaW4oUEFDS0FHRV9ST09ULCAnc3JjJykgKyAnLycsXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBzb3VyY2VtYXA6ICdpbmxpbmUnLFxuICAgIHRhcmdldDogYG5vZGUke25vZGV9YCxcbiAgICBvdXREaXI6ICdkaXN0JyxcbiAgICBhc3NldHNEaXI6ICcuJyxcbiAgICBtaW5pZnk6IHByb2Nlc3MuZW52Lk1PREUgPT09ICdwcm9kdWN0aW9uJyA/ICdlc2J1aWxkJyA6IGZhbHNlLFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6ICdzcmMvaW5kZXgudHMnLFxuICAgICAgZm9ybWF0czogWydjanMnXSxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXG4gICAgICAgICdlbGVjdHJvbicsXG4gICAgICAgICdjaG9raWRhcicsXG4gICAgICAgICdAa3ViZXJuZXRlcy9jbGllbnQtbm9kZScsXG4gICAgICAgICd0YXItZnMnLFxuICAgICAgICAnc3NoMicsXG4gICAgICAgICdhbmFseXRpY3Mtbm9kZScsXG4gICAgICAgICdlbGVjdHJvbi1kZXZ0b29scy1pbnN0YWxsZXInLFxuICAgICAgICAuLi5idWlsdGluTW9kdWxlcy5mbGF0TWFwKHAgPT4gW3AsIGBub2RlOiR7cH1gXSksXG4gICAgICBdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnW25hbWVdLmNqcycsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZW1wdHlPdXREaXI6IHRydWUsXG4gICAgcmVwb3J0Q29tcHJlc3NlZFNpemU6IGZhbHNlLFxuICB9LFxuICB0ZXN0OiB7XG4gICAgLi4uY292ZXJhZ2VDb25maWcoUEFDS0FHRV9ST09ULCBQQUNLQUdFX05BTUUpLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9qZXJlbXkvZG9jdW1lbnRzL2t0aC9iaW9lbmdpbmUtZGVza3RvcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvamVyZW15L2RvY3VtZW50cy9rdGgvYmlvZW5naW5lLWRlc2t0b3Avdml0ZXN0LXNoYXJlZC1leHRlbnNpb25zLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9qZXJlbXkvZG9jdW1lbnRzL2t0aC9iaW9lbmdpbmUtZGVza3RvcC92aXRlc3Qtc2hhcmVkLWV4dGVuc2lvbnMuY29uZmlnLmpzXCI7LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIENvcHlyaWdodCAoQykgMjAyMyBSZWQgSGF0LCBJbmMuXG4gKiBcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqIFxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKiBcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJztcblxuLyoqXG4gKiBEZWZhdWx0IHByb2plY3QgY29kZSBjb3ZlcmFnZSBjb25maWd1cmF0aW9uIGZvciB2aXRlc3RcbiAqIEBwYXJhbSB7Kn0gcGFja2FnZVJvb3Qgcm9vdCBvZiB0aGUgcHJvamVjdCB3aGVyZSBjb3ZlcmFnZSBpcyBiZWluZyBjYWxjdWxhdGVkXG4gKiBAcGFyYW0geyp9IHBhY2thZ2VOYW1lIHBhY2thZ2UgbmFtZSB0byBhcHBlYXIgaW4gdGVzdC1yZXNvdXJjZXMvY292ZXJhZ2UgaW4gcHJvamVjdCByb290IGZvbGRlclxuICogQHJldHVybnMgb2JqZWN0IGZvciBjb2RlIGNvdmVyYWdlIGNvbmZpZ3VyYXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvdmVyYWdlQ29uZmlnKHBhY2thZ2VSb290LCBwYWNrYWdlTmFtZSkge1xuICBjb25zdCBvYmogPSB7IGNvdmVyYWdlOiB7XG4gICAgICBhbGw6IHRydWUsXG4gICAgICBjbGVhbjogdHJ1ZSxcbiAgICAgIHNyYzogW3BhY2thZ2VSb290XSxcbiAgICAgIGV4Y2x1ZGU6IFtcbiAgICAgICAgJyoqL2J1aWx0aW4vKionLFxuICAgICAgICAnKiovY3lwcmVzcy8qKicsXG4gICAgICAgICcqKi9kaXN0LyoqJyxcbiAgICAgICAgJyoqL25vZGVfbW9kdWxlcy8qKicsXG4gICAgICAgICcqKi8qLnt0ZXN0LHNwZWN9LntqcyxtanMsY2pzLHRzLG10cyxjdHMsanN4LHRzeH0nLFxuICAgICAgICAnKiovKi57dHN4LGNqcyxqcyxkLnRzfScsXG4gICAgICAgICcqKi8qLWluZm8udHMnLFxuICAgICAgICAnKiovLntjYWNoZSxnaXQsaWRlYSxvdXRwdXQsdGVtcCxjZGl4fS8qKicsXG4gICAgICAgICcqKi8qe2thcm1hLHJvbGx1cCx3ZWJwYWNrLHZpdGUsdml0ZXN0LGplc3QsYXZhLGJhYmVsLG55YyxjeXByZXNzLHRhaWx3aW5kLHBvc3Rjc3N9LmNvbmZpZy4qJyxcbiAgICAgIF0sXG4gICAgICBwcm92aWRlcjogJ3Y4JyxcbiAgICAgIHJlcG9ydHNEaXJlY3Rvcnk6IHBhdGguam9pbihwYWNrYWdlUm9vdCwgJy4uLy4uLycsIGB0ZXN0LXJlc291cmNlcy9jb3ZlcmFnZS8ke3BhY2thZ2VOYW1lfWApLFxuICAgICAgcmVwb3J0ZXI6IFsnbGNvdicsICd0ZXh0J10sXG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIG9iajtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlc3RDb25maWcoKSB7XG4gIHJldHVybiB7XG4gICAgZXhjbHVkZTogW1xuICAgICAgJyoqL2J1aWx0aW4vKionLFxuICAgICAgJyoqL25vZGVfbW9kdWxlcy8qKicsXG4gICAgICAnKiovZGlzdC8qKicsXG4gICAgICAnKiovLntpZGVhLGdpdCxjYWNoZSxvdXRwdXQsdGVtcCxjZGl4fS8qKicsXG4gICAgICAnKiovey5lbGVjdHJvbi1idWlsZGVyLGJhYmVsLGNoYW5nZWxvZyxkb2N1c2F1cnVzLGplc3QscG9zdGNzcyxwcmV0dGllcixyb2xsdXAsc3ZlbHRlLHRhaWx3aW5kLHZpdGUsdml0ZXN0Kix3ZWJwYWNrfS5jb25maWcuKicsXG4gICAgXSxcbiAgfTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFFRSxXQUFROzs7QUNpQlYsU0FBUSxZQUFXO0FBQ25CLFNBQVEsc0JBQXFCOzs7QUNGN0IsT0FBTyxVQUFVO0FBUVYsU0FBUyxlQUFlLGFBQWEsYUFBYTtBQUN2RCxRQUFNLE1BQU07QUFBQSxJQUFFLFVBQVU7QUFBQSxNQUNwQixLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxLQUFLLENBQUMsV0FBVztBQUFBLE1BQ2pCLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxVQUFVO0FBQUEsTUFDVixrQkFBa0IsS0FBSyxLQUFLLGFBQWEsVUFBVSwyQkFBMkIsV0FBVyxFQUFFO0FBQUEsTUFDM0YsVUFBVSxDQUFDLFFBQVEsTUFBTTtBQUFBLElBQzNCO0FBQUEsRUFDRjtBQUNBLFNBQU87QUFDVDs7O0FEaERBLElBQU0sbUNBQW1DO0FBdUJ6QyxJQUFNLGVBQWU7QUFDckIsSUFBTSxlQUFlO0FBS3JCLElBQU0sU0FBUztBQUFBLEVBQ2IsTUFBTSxRQUFRLElBQUk7QUFBQSxFQUNsQixNQUFNO0FBQUEsRUFDTixRQUFRLFFBQVEsSUFBSTtBQUFBLEVBQ3BCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLE9BQU8sS0FBSyxjQUFjLEtBQUssSUFBSTtBQUFBLElBQ3JDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsV0FBVztBQUFBLElBQ1gsUUFBUSxPQUFPLElBQUk7QUFBQSxJQUNuQixRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsSUFDWCxRQUFRLFFBQVEsSUFBSSxTQUFTLGVBQWUsWUFBWTtBQUFBLElBQ3hELEtBQUs7QUFBQSxNQUNILE9BQU87QUFBQSxNQUNQLFNBQVMsQ0FBQyxLQUFLO0FBQUEsSUFDakI7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQSxHQUFHLGVBQWUsUUFBUSxPQUFLLENBQUMsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDO0FBQUEsTUFDakQ7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLElBQ0EsYUFBYTtBQUFBLElBQ2Isc0JBQXNCO0FBQUEsRUFDeEI7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLEdBQUcsZUFBZSxjQUFjLFlBQVk7QUFBQSxFQUM5QztBQUNGO0FBRUEsSUFBTyxzQkFBUTsiLAogICJuYW1lcyI6IFtdCn0K