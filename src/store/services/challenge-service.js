import qs from 'qs';
import axios from 'axios';
import Jsona from 'jsona';

const url = process.env.VUE_APP_API_BASE_URL;
const jsona = new Jsona();

function list(params) {
  const options = {
    params: params,
    paramsSerializer: function (params) {
      return qs.stringify(params, {encode: false});
    }
  };

  return axios.get(`${url}/challenges`, options)
    .then(response => {
      return {
        //list: jsona.deserialize(response.data.data),
        list: response.data.data,
        meta: response.data.meta
      };
    });
}

function applications(id) {
  /*const options = {
    params: params,
    paramsSerializer: function (params) {
      return qs.stringify(params, {encode: false});
    }
  };*/

  return axios.get(`${url}/challenges/${id}/applications`)
    .then(response => {
      return {
        list: response.data.data
      };
    });
}

function myApplications() {
  return axios.get(`${url}/applications/me`)
    .then(response => {
      return {
        applications: response.data
      };
    });
}

function application(id) {
  /*const options = {
    params: params,
    paramsSerializer: function (params) {
      return qs.stringify(params, {encode: false});
    }
  };*/

  return axios.get(`${url}/application/${id}`)
    .then(response => {
      return {
        application: response.data
      };
    });
}

function saveApplication(data) {
  return axios.post(`${url}/application/create`, data)
    .then(response => {
      return {
        application: response.data
      };
    });
}

function get(id) {
  const options = {
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
    }
  };

  return axios.get(`${url}/users/${id}`, options)
    .then(response => {
      let user = jsona.deserialize(response.data);
      delete user.links;
      return user;
    });
}

export default {
    list,
    get,
    applications,
    application,
    saveApplication,
    myApplications
  };