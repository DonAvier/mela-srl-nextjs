// next.config.mjs
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: []
    },
    // Configura i redirect per mantenere la compatibilità con i vecchi URL
    async redirects() {
      return [
        {
          source: '/pages/home.html',
          destination: '/',
          permanent: true
        },
        {
          source: '/pages/contattaci.html',
          destination: '/contattaci',
          permanent: true
        },
        {
          source: '/pages/interventi-sede.html',
          destination: '/interventi-in-sede',
          permanent: true
        },
        {
          source: '/pages/interventi-loco.html',
          destination: '/interventi-in-loco',
          permanent: true
        }
      ];
    },
    // Aggiungi header di sicurezza
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff'
            },
            {
              key: 'X-Frame-Options',
              value: 'DENY'
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block'
            }
          ]
        }
      ];
    }
  };
  
  export default nextConfig;