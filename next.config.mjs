/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['.'],
  },
  redirects() {
    return [
      {
        source: '/',
        destination: '/leaves',
        permanent: true, //true ถาวร,false = ชั่วคราว
      },
      {
        source: '/admin',
        destination: '/admin/dashboard',
        permanent: true, //true ถาวร,false = ชั่วคราว
      },
    ];
  },
};

export default nextConfig;
