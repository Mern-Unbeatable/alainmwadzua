import { httpMethods } from './httpMethods';

export const commonPost = async (url, payload, config = {}) => {
  const { data, error } = await httpMethods.post(url, payload, config);

  if (error) {
    throw new Error(error.message || 'Request failed');
  }

  return data;
};

export default commonPost;
