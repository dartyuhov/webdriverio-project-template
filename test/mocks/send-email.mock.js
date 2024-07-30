import { browser } from '@wdio/globals';

const EMAIL_JS_SEND_EMAIL_URL = 'https://api.emailjs.com/api/v1.0/email/send';
const headers = {
  'Content-Type': 'text/plain',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export const mockEmailSendSuccess = async () => {
  const mock = await browser.mock(EMAIL_JS_SEND_EMAIL_URL, { method: 'POST' });

  mock.respond('OK', {
    statusCode: 200,
    headers,
    fetchResponse: false,
  });
};

export const mockEmailSendReject = async () => {
  const mock = await browser.mock(EMAIL_JS_SEND_EMAIL_URL, { method: 'POST' });

  mock.respond('NOT OK', {
    statusCode: 500,
    headers,
    fetchResponse: false,
  });
};
