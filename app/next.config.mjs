/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"external-content.duckduckgo.com",
                protocol:"https"
            }
        ]
    }
};

export default nextConfig;
