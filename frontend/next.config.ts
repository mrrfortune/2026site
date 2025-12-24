import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = { 
  transpilePackages: ['devlink'],
  /* Fix for the Workspace Root Warning */
  turbopack: {
   
    // We set the root to exactly where THIS file is located
    root: path.join(__dirname), 
  },
  /* Ensure there are NO invalid rewrites here. 
    If you had a rewrites() function, comment it out for now.
  */
};

export default nextConfig;
