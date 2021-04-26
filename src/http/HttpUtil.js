import 'whatwg-fetch'

export default class HttpUtil {

  withBasicAuth() {
    console.log('new http util being created with headers: ', this);
    this.headers = {
      'Accept-version': 'v1',
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization': 'Basic ' + btoa('user:password')
    };
    this.path = '/imc-header';

    return this;
  }

  withJwtAuth() {
    this.headers = {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization': 'JWT eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjE5NDY0MjE2LCJpYXQiOjE2MTk0MjgyMTZ9.VIQ6r-8ijgVHSyHkjWZvMuqnwpef6eY9zQ8USPeWWeo'
    };
    this.path = '/v2/imc/jwt';

    return this;
  }

  withOauthAuth() {
    this.headers = {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJXbXg1WUlPVWFIc1ZKb2pqcUdjMjdvUFNKTTJNQU5oVTZYMXJITzRkeEtjIn0.eyJleHAiOjE2MTk0Mjk5ODQsImlhdCI6MTYxOTQyOTY4NCwianRpIjoiNTI2NTc5ZWUtYTllMC00NjFiLWIwYjUtYzczY2UzYTdjMmJkIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgyL2F1dGgvcmVhbG1zL2ZpdC1jYWxjIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjVkYjFmYjY0LTNmZTAtNGYxMC04NmIzLTRjZTY1NjQ5M2ZlNyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImNhbGMtYXBpIiwic2Vzc2lvbl9zdGF0ZSI6IjdmY2RiNWU3LTM3NDUtNGIwOC1iNThiLTU4YmI3MDQzNGNkOCIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiYWRtaW4gdGVzdCIsInByZWZlcnJlZF91c2VybmFtZSI6ImFkbWluIiwiZ2l2ZW5fbmFtZSI6ImFkbWluIiwiZmFtaWx5X25hbWUiOiJ0ZXN0IiwiZW1haWwiOiJhZG1pbkB0ZXN0LmNvbSJ9.O5LQVB5DUoJk1O7VpBzjzb28QYVDXf_rzR7ZXusojxkK6cVBoO92sHxD--zDyGYPrNPVem-5jIQnNKB9KHr-aybmQ2GYnTezglBBSd_4B69SwYfVgxc9R_yP8MPj9gqyBjuc9UPx7fARhbs7vpkvzjJtMwnTEX_-VUdNY81Y8E-csglC0ld2YxjM2DZ6F4MvKm1wZaJdR-Rl_DR0elMblwcNuX3G23r_f4bnJ_3ZCN0N0Nr-J2uE9MMT5bAf86n3c1dI3oVsiJ2l0-8nueTUSAfPFQi22BNU-b0OqPDSI-5z1Os0yr3bYyoHqnHlQ19WoLaJWA-_86ny8-7bN0dtww'
    }
    this.path = '/v2/imc/oauth';

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
