import ky from 'ky';

const PRODUCTION_URL = 'https://strapi-store-server.onrender.com/api';

export const customFetch = ky.create({ prefixUrl: PRODUCTION_URL });
