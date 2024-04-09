// .electron-vendors.cache.json
var chrome = "98";

// packages/preload-docker-extension/vite.config.js
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

// packages/preload-docker-extension/vite.config.js
var __vite_injected_original_dirname = "/home/jeremy/documents/kth/bioengine-desktop/packages/preload-docker-extension";
var PACKAGE_ROOT = __vite_injected_original_dirname;
var PACKAGE_NAME = "preload-docker-extension";
var config = {
  mode: process.env.MODE,
  root: PACKAGE_ROOT,
  envDir: process.cwd(),
  resolve: {
    alias: {
      "/@/": join(PACKAGE_ROOT, "src") + "/"
    }
  },
  /*plugins: [
    commonjs({
      dynamicRequireTargets: [
        // include using a glob pattern (either a string or an array of strings)
        'node_modules/ssh2/lib/protocol/crypto/poly1305.js',
      ]
      }),
  ],*/
  build: {
    sourcemap: "inline",
    target: `chrome${chrome}`,
    outDir: "dist",
    assetsDir: ".",
    minify: process.env.MODE !== "development",
    lib: {
      entry: "src/index.ts",
      formats: ["cjs"]
    },
    rollupOptions: {
      external: [
        "electron",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLmVsZWN0cm9uLXZlbmRvcnMuY2FjaGUuanNvbiIsICJwYWNrYWdlcy9wcmVsb2FkLWRvY2tlci1leHRlbnNpb24vdml0ZS5jb25maWcuanMiLCAidml0ZXN0LXNoYXJlZC1leHRlbnNpb25zLmNvbmZpZy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuICBcImNocm9tZVwiOiBcIjk4XCIsXG4gIFwibm9kZVwiOiBcIjE2XCJcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvamVyZW15L2RvY3VtZW50cy9rdGgvYmlvZW5naW5lLWRlc2t0b3AvcGFja2FnZXMvcHJlbG9hZC1kb2NrZXItZXh0ZW5zaW9uXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9qZXJlbXkvZG9jdW1lbnRzL2t0aC9iaW9lbmdpbmUtZGVza3RvcC9wYWNrYWdlcy9wcmVsb2FkLWRvY2tlci1leHRlbnNpb24vdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvamVyZW15L2RvY3VtZW50cy9rdGgvYmlvZW5naW5lLWRlc2t0b3AvcGFja2FnZXMvcHJlbG9hZC1kb2NrZXItZXh0ZW5zaW9uL3ZpdGUuY29uZmlnLmpzXCI7LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIENvcHlyaWdodCAoQykgMjAyMyBSZWQgSGF0LCBJbmMuXG4gKiBcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqIFxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKiBcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIGltcG9ydCB7Y2hyb21lfSBmcm9tICcuLi8uLi8uZWxlY3Ryb24tdmVuZG9ycy5jYWNoZS5qc29uJztcbiBpbXBvcnQge2pvaW59IGZyb20gJ3BhdGgnO1xuIGltcG9ydCB7YnVpbHRpbk1vZHVsZXN9IGZyb20gJ21vZHVsZSc7XG4gaW1wb3J0IHsgY292ZXJhZ2VDb25maWcgfSBmcm9tICcuLi8uLi92aXRlc3Qtc2hhcmVkLWV4dGVuc2lvbnMuY29uZmlnJztcblxuIGNvbnN0IFBBQ0tBR0VfUk9PVCA9IF9fZGlybmFtZTtcbiBjb25zdCBQQUNLQUdFX05BTUUgPSAncHJlbG9hZC1kb2NrZXItZXh0ZW5zaW9uJztcbiBcbiAvKipcbiAgKiBAdHlwZSB7aW1wb3J0KCd2aXRlJykuVXNlckNvbmZpZ31cbiAgKiBAc2VlIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG4gICovXG4gY29uc3QgY29uZmlnID0ge1xuICAgbW9kZTogcHJvY2Vzcy5lbnYuTU9ERSxcbiAgIHJvb3Q6IFBBQ0tBR0VfUk9PVCxcbiAgIGVudkRpcjogcHJvY2Vzcy5jd2QoKSxcbiAgIHJlc29sdmU6IHtcbiAgICAgYWxpYXM6IHtcbiAgICAgICAnL0AvJzogam9pbihQQUNLQUdFX1JPT1QsICdzcmMnKSArICcvJyxcbiAgICAgfSxcbiAgIH0sXG4gICAvKnBsdWdpbnM6IFtcbiAgICAgY29tbW9uanMoe1xuICAgICAgIGR5bmFtaWNSZXF1aXJlVGFyZ2V0czogW1xuICAgICAgICAgLy8gaW5jbHVkZSB1c2luZyBhIGdsb2IgcGF0dGVybiAoZWl0aGVyIGEgc3RyaW5nIG9yIGFuIGFycmF5IG9mIHN0cmluZ3MpXG4gICAgICAgICAnbm9kZV9tb2R1bGVzL3NzaDIvbGliL3Byb3RvY29sL2NyeXB0by9wb2x5MTMwNS5qcycsXG4gICAgICAgXVxuICAgICAgIH0pLFxuICAgXSwqL1xuICAgYnVpbGQ6IHtcbiAgICAgc291cmNlbWFwOiAnaW5saW5lJyxcbiAgICAgdGFyZ2V0OiBgY2hyb21lJHtjaHJvbWV9YCxcbiAgICAgb3V0RGlyOiAnZGlzdCcsXG4gICAgIGFzc2V0c0RpcjogJy4nLFxuICAgICBtaW5pZnk6IHByb2Nlc3MuZW52Lk1PREUgIT09ICdkZXZlbG9wbWVudCcsXG4gICAgIGxpYjoge1xuICAgICAgIGVudHJ5OiAnc3JjL2luZGV4LnRzJyxcbiAgICAgICBmb3JtYXRzOiBbJ2NqcyddLFxuICAgICB9LFxuICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgZXh0ZXJuYWw6IFtcbiAgICAgICAgICdlbGVjdHJvbicsXG4gICAgICAgICAuLi5idWlsdGluTW9kdWxlcy5mbGF0TWFwKHAgPT4gW3AsIGBub2RlOiR7cH1gXSksXG4gICAgICAgXSxcbiAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnW25hbWVdLmNqcycsXG4gICAgICAgfSxcbiAgICAgfSxcbiAgICAgZW1wdHlPdXREaXI6IHRydWUsXG4gICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiBmYWxzZSxcbiAgIH0sXG4gICB0ZXN0OiB7XG4gICAgLi4uY292ZXJhZ2VDb25maWcoUEFDS0FHRV9ST09ULCBQQUNLQUdFX05BTUUpLFxuICB9LFxuIH07XG4gXG4gZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuICIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvamVyZW15L2RvY3VtZW50cy9rdGgvYmlvZW5naW5lLWRlc2t0b3BcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2plcmVteS9kb2N1bWVudHMva3RoL2Jpb2VuZ2luZS1kZXNrdG9wL3ZpdGVzdC1zaGFyZWQtZXh0ZW5zaW9ucy5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvamVyZW15L2RvY3VtZW50cy9rdGgvYmlvZW5naW5lLWRlc2t0b3Avdml0ZXN0LXNoYXJlZC1leHRlbnNpb25zLmNvbmZpZy5qc1wiOy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjMgUmVkIEhhdCwgSW5jLlxuICogXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKiBcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICogXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5cbi8qKlxuICogRGVmYXVsdCBwcm9qZWN0IGNvZGUgY292ZXJhZ2UgY29uZmlndXJhdGlvbiBmb3Igdml0ZXN0XG4gKiBAcGFyYW0geyp9IHBhY2thZ2VSb290IHJvb3Qgb2YgdGhlIHByb2plY3Qgd2hlcmUgY292ZXJhZ2UgaXMgYmVpbmcgY2FsY3VsYXRlZFxuICogQHBhcmFtIHsqfSBwYWNrYWdlTmFtZSBwYWNrYWdlIG5hbWUgdG8gYXBwZWFyIGluIHRlc3QtcmVzb3VyY2VzL2NvdmVyYWdlIGluIHByb2plY3Qgcm9vdCBmb2xkZXJcbiAqIEByZXR1cm5zIG9iamVjdCBmb3IgY29kZSBjb3ZlcmFnZSBjb25maWd1cmF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3ZlcmFnZUNvbmZpZyhwYWNrYWdlUm9vdCwgcGFja2FnZU5hbWUpIHtcbiAgY29uc3Qgb2JqID0geyBjb3ZlcmFnZToge1xuICAgICAgYWxsOiB0cnVlLFxuICAgICAgY2xlYW46IHRydWUsXG4gICAgICBzcmM6IFtwYWNrYWdlUm9vdF0sXG4gICAgICBleGNsdWRlOiBbXG4gICAgICAgICcqKi9idWlsdGluLyoqJyxcbiAgICAgICAgJyoqL2N5cHJlc3MvKionLFxuICAgICAgICAnKiovZGlzdC8qKicsXG4gICAgICAgICcqKi9ub2RlX21vZHVsZXMvKionLFxuICAgICAgICAnKiovKi57dGVzdCxzcGVjfS57anMsbWpzLGNqcyx0cyxtdHMsY3RzLGpzeCx0c3h9JyxcbiAgICAgICAgJyoqLyoue3RzeCxjanMsanMsZC50c30nLFxuICAgICAgICAnKiovKi1pbmZvLnRzJyxcbiAgICAgICAgJyoqLy57Y2FjaGUsZ2l0LGlkZWEsb3V0cHV0LHRlbXAsY2RpeH0vKionLFxuICAgICAgICAnKiovKntrYXJtYSxyb2xsdXAsd2VicGFjayx2aXRlLHZpdGVzdCxqZXN0LGF2YSxiYWJlbCxueWMsY3lwcmVzcyx0YWlsd2luZCxwb3N0Y3NzfS5jb25maWcuKicsXG4gICAgICBdLFxuICAgICAgcHJvdmlkZXI6ICd2OCcsXG4gICAgICByZXBvcnRzRGlyZWN0b3J5OiBwYXRoLmpvaW4ocGFja2FnZVJvb3QsICcuLi8uLi8nLCBgdGVzdC1yZXNvdXJjZXMvY292ZXJhZ2UvJHtwYWNrYWdlTmFtZX1gKSxcbiAgICAgIHJlcG9ydGVyOiBbJ2xjb3YnLCAndGV4dCddLFxuICAgIH0sXG4gIH07XG4gIHJldHVybiBvYmo7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0Q29uZmlnKCkge1xuICByZXR1cm4ge1xuICAgIGV4Y2x1ZGU6IFtcbiAgICAgICcqKi9idWlsdGluLyoqJyxcbiAgICAgICcqKi9ub2RlX21vZHVsZXMvKionLFxuICAgICAgJyoqL2Rpc3QvKionLFxuICAgICAgJyoqLy57aWRlYSxnaXQsY2FjaGUsb3V0cHV0LHRlbXAsY2RpeH0vKionLFxuICAgICAgJyoqL3suZWxlY3Ryb24tYnVpbGRlcixiYWJlbCxjaGFuZ2Vsb2csZG9jdXNhdXJ1cyxqZXN0LHBvc3Rjc3MscHJldHRpZXIscm9sbHVwLHN2ZWx0ZSx0YWlsd2luZCx2aXRlLHZpdGVzdCosd2VicGFja30uY29uZmlnLionLFxuICAgIF0sXG4gIH07XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0UsYUFBVTs7O0FDa0JYLFNBQVEsWUFBVztBQUNuQixTQUFRLHNCQUFxQjs7O0FDRjlCLE9BQU8sVUFBVTtBQVFWLFNBQVMsZUFBZSxhQUFhLGFBQWE7QUFDdkQsUUFBTSxNQUFNO0FBQUEsSUFBRSxVQUFVO0FBQUEsTUFDcEIsS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1AsS0FBSyxDQUFDLFdBQVc7QUFBQSxNQUNqQixTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsVUFBVTtBQUFBLE1BQ1Ysa0JBQWtCLEtBQUssS0FBSyxhQUFhLFVBQVUsMkJBQTJCLFdBQVcsRUFBRTtBQUFBLE1BQzNGLFVBQVUsQ0FBQyxRQUFRLE1BQU07QUFBQSxJQUMzQjtBQUFBLEVBQ0Y7QUFDQSxTQUFPO0FBQ1Q7OztBRGhEQSxJQUFNLG1DQUFtQztBQXVCeEMsSUFBTSxlQUFlO0FBQ3JCLElBQU0sZUFBZTtBQU1yQixJQUFNLFNBQVM7QUFBQSxFQUNiLE1BQU0sUUFBUSxJQUFJO0FBQUEsRUFDbEIsTUFBTTtBQUFBLEVBQ04sUUFBUSxRQUFRLElBQUk7QUFBQSxFQUNwQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxPQUFPLEtBQUssY0FBYyxLQUFLLElBQUk7QUFBQSxJQUNyQztBQUFBLEVBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFTQSxPQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUEsSUFDWCxRQUFRLFNBQVMsTUFBTTtBQUFBLElBQ3ZCLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxJQUNYLFFBQVEsUUFBUSxJQUFJLFNBQVM7QUFBQSxJQUM3QixLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxTQUFTLENBQUMsS0FBSztBQUFBLElBQ2pCO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUjtBQUFBLFFBQ0EsR0FBRyxlQUFlLFFBQVEsT0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztBQUFBLE1BQ2pEO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGFBQWE7QUFBQSxJQUNiLHNCQUFzQjtBQUFBLEVBQ3hCO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDTCxHQUFHLGVBQWUsY0FBYyxZQUFZO0FBQUEsRUFDOUM7QUFDRDtBQUVBLElBQU8sc0JBQVE7IiwKICAibmFtZXMiOiBbXQp9Cg==
