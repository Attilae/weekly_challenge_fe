import axios from 'axios';
import Jsona from 'jsona';

const url = process.env.VUE_APP_API_BASE_URL;
const jsona = new Jsona();

function get() {
  return axios.get(`${url}/me`)
    .then(response => {
      return {
        me: response.data,
      };
    });
}

function update(profile) {

  const payload = jsona.serialize({
    stuff: profile,
    includeNames: []
  });

  const options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  };

  return axios.patch(`${url}/me`, payload, options)
    .then(response => {
      return response.data;
    });
}

export default {
  get,
  update
};
