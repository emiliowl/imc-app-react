import 'whatwg-fetch'

export default class HttpUtil {

  withBasicAuth() {
    console.log('new http util being created with headers: ', this);
    this.headers = {
      'Accept-version': 'v1',
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization': 'Basic ' + btoa('user:password')
    };

    return this;
  }

  get(hostname, url, instance) {
    console.log('vai chamar fetch !!!', instance);

    const options = {
      method: 'get',
      headers: instance.headers
    };

    return fetch(`${hostname}${url}`, options);
  }

  post(hostname, url, obj) {
    const options = {
      method: 'post',
      headers: this.headers,
      body: JSON.stringify(obj)
    };
    
    return fetch(`${hostname}${url}`, options);
  }
}
