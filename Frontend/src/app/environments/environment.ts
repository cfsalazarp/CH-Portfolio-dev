export const environment = {
    production: false,
    STRAPI_HOST: 'https://ch-portfolio-dev-production.up.railway.app',
    STRAPI_TOKEN: process.env['STRAPI_TOKEN'] ?? '',
};