/**
 * Utility functions for calling Munch API.
 */

import { MUNCH_API_BASE_URL } from "constant/CommonConstants";


const REGISTER_ENDPOINT = "account/register";
const LOGIN_ENDPOINT = "account/login";
const CREATE_POST_ENDPOINT = "post/createpost";
const POST = "POST";
const JSON_CONTENT_TYPE_HEADER = "application/json";
const MODE_CORS = "cors";
const SAME_ORIGIN_CREDENTIALS = "same-origin";

export const loginAccount = async (params: any) => {
  return await callMunchEndpoint(params, LOGIN_ENDPOINT);
}

export const registerAccount = async (params: any) => {
  return await callMunchEndpoint(params, REGISTER_ENDPOINT);
}

export const publishPost = async (params: any) => {
  return await callMunchEndpoint(params, CREATE_POST_ENDPOINT);
}

export const checkStatus = async (resp: any) => {
  console.log(resp);
  if (resp.ok) {
    return resp;
  }
  resp = await resp.json();
  throw Error(resp.status);
};

const callMunchEndpoint = async (params: any, endpoint: string) => {
  return await fetch(MUNCH_API_BASE_URL + endpoint, {
    method: POST,
    headers: {
      "Content-Type": JSON_CONTENT_TYPE_HEADER,
      "mode": MODE_CORS,
      "credentials": SAME_ORIGIN_CREDENTIALS,
    },
    body: JSON.stringify(params)
  })
    .then(checkStatus)
    .then(resp => resp.json())
    .catch(e => {
      return { status: trimErrorPrefix(e.toString()) };
    });
}

const trimErrorPrefix = (msg: string): string => {
  return msg.replace("Error: ", "");
}
