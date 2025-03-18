import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to
// use bindings during local development (when running the application with
// `next dev`). This function is only necessary during development and
// has no impact outside of that. For more information see:
// https://github.com/cloudflare/next-on-pages/blob/main/internal-packages/next-dev/README.md
setupDevPlatform().catch(console.error);

import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
        pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
        options: {
                remarkPlugins: [
                        //@ts-expect-error type error
                        ['remark-gfm', {}],
                        //@ts-expect-error type error
                        ['remark-frontmatter', { type: 'yaml', marker: '-' }],
                        //@ts-expect-error type error
                        ['remark-mdx-frontmatter', { name: 'fm' }]
                ],
        }
})

export default withMDX(nextConfig);
