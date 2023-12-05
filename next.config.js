/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "@/app/_scss/mixins", "@/app/_scss/variables.module.scss";`,
  },
};

module.exports = nextConfig;
