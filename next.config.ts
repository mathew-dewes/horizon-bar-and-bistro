import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images:{
  remotePatterns:[
    {
        protocol: 'https',
        hostname: 'ogznjkmrjqfdnotzwaut.supabase.co',
        pathname: '/storage/v1/object/public/products/**',

    }
  ]
 }
};

export default nextConfig;


// https://ogznjkmrjqfdnotzwaut.supabase.co/storage/v1/object/public/products//barcardi.jpg