import Commerce from '@chec/commerce.js';

export const commerce = new Commerce(process.env.REACT_APP_BACKEND_PUBLIC_API_KEY, true);