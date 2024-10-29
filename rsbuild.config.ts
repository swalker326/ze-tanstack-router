import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { TanStackRouterRspack } from '@tanstack/router-plugin/rspack'
import { withZephyr } from 'zephyr-webpack-plugin';

const zephyrRsbuildPlugin = () => ({
  name: "zephyr-rsbuild-plugin",
  // @ts-ignore
  setup(api) {
    //@ts-ignore - todo figure this out
    api.modifyRspackConfig((rspackConfig) => {
      return withZephyr()(rspackConfig);
    });
  }
});

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: { index: './src/main.tsx' },
  },
  html: {
    template: './index.html',
  },
  tools: {
    rspack: {
      plugins: [TanStackRouterRspack(), zephyrRsbuildPlugin()],
    },
  },
})
