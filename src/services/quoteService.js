import { API_ENDPOINTS } from './httpEndpoint';
import commonPost from './commonPost';

export const postQuoteRequest = async (payload) =>
  commonPost(API_ENDPOINTS.QUOTES.CREATE, payload);

export default postQuoteRequest;
