const enum API_BASEURLS {
  BASE_AWS = '',
  AWS = '',
  LOCAL_VALID = '',
  LOCAL_TEMP = '',
  BASE_LOCAL_TEMP = '',
}

export const environment = {
  production: false,
  baseUrl: API_BASEURLS.BASE_AWS,
  serviceBaseUrl: API_BASEURLS.AWS,
  imageBaseUrl: '',
  pdfBaseUrl: API_BASEURLS.LOCAL_VALID,
  APP_NAME: 'OVS - Store',
};
