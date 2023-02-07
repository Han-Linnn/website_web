console.log(REACT_APP_ENV);

let preURL = 'http://localhost:8000';
if (REACT_APP_ENV === 'dev') {
  preURL = 'http://192.168.3.89:5555';
} else if (REACT_APP_ENV === 'prod') {
  preURL = 'http://47.243.10.150:6013/';
}

console.log(preURL);

export const apiURL = `${preURL}/v1`;
export const uploadURL = `${preURL}/v1/upload`;
