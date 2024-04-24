import constants from './constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function postData(data: any, urlPath: string) {
  console.log('=== URL ===', constants.BASE_URL + urlPath);
  console.log('=== REQUEST ===', data);
  return new Promise((resolve, reject) => {
    fetch(constants.BASE_URL + urlPath, {
      method: 'POST',
      mode: 'cors',
      // cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Origin: 'localhost',
        authorization:
          'Bearer ' +
          AsyncStorage.getItem(constants.MOB_ACCESS_TOKEN_KEY),
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('=== RESPONSE JSON ===', json);
        if (json.response) {
          resolve(json.response);
        }
        else {
          resolve(json);
        }
      })
      .catch((error) => {
        console.log('=== ERROR ===1', error);
        resolve(error);
        reject(error);
      });
  });
}

export async function postDataWithToken(data: any, urlPath: string) {

  console.log('=== POST URL ===', constants.BASE_URL + urlPath);
  console.log('=== REQUEST ===', data);
  let token = await AsyncStorage.getItem(
    constants.MOB_ACCESS_TOKEN_KEY
  );
  console.log('token:::::::::', token)

  return new Promise((resolve, reject) => {
    fetch(constants.BASE_URL + urlPath, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Origin: 'localhost',
        authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      // .then((response) => console.log('response::::::::::::::::', response))
      .then((json) => {
        console.log('=== URL ===', constants.BASE_URL + urlPath);
        // console.log('=== RESPONSE === ', urlPath, json);
        resolve(json);
      })
      .catch((error) => {
        console.log('=== ERROR ===2', error);
        reject(error);
      });
  });
}

export async function getData(urlPath: string) {

  console.log('=== URL ===', constants.BASE_URL + urlPath);
  let accessTokenKey = await AsyncStorage.getItem(
    constants.MOB_ACCESS_TOKEN_KEY
  );
  console.log("accessTokenKey :", accessTokenKey)
  return new Promise((resolve, reject) => {
    fetch(constants.BASE_URL + urlPath, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Origin: 'localhost',
        authorization: 'Bearer ' + accessTokenKey,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // console.log('=== RESPONSE ===', json);
        resolve(json);
      })
      .catch((error) => {
        console.log('=== ERROR ===3', error);
        reject(error);
      });
  });
}

export async function getDataWithToken(data: any, urlPath: string) {
  let token = await AsyncStorage.getItem(
    constants.MOB_ACCESS_TOKEN_KEY
  );

  const res = await fetch(constants.BASE_URL + urlPath, {
    method: 'GET',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Origin: 'localhost',
      Authorization: 'Bearer ' + token,
    },
  });
  return await res;
}

export async function patchData(data: any, urlPath: string) {
  console.log('check patch function');

  const res = await fetch(constants.BASE_URL + urlPath, {
    method: 'PATCH',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Origin: 'http://localhost:3000',
      authorization:
        'Bearer ' +
        AsyncStorage.getItem(constants.MOB_ACCESS_TOKEN_KEY),
    },
    body: JSON.stringify(data),
  });
  return await res;
}
