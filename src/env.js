let baseURL;
switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = '';
    break;
  case 'test':
    baseURL = '';
    break;
  case 'prev':
    baseURL = '';
    break;
  case 'prod':
    baseURL = '';
    break;
  default:
    baseURL = '';
    break;
}

export default {
  baseURL
}