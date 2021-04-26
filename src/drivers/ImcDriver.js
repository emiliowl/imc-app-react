import HttpUtil from '../http/HttpUtil.js';

export default class ImcDriver {
  constructor() {
    this.xhr = new HttpUtil();
    this.get = new Proxy(this.xhr.withBasicAuth().get, {
      apply: function(target, thisArg, args) {
        console.log('target');
        console.log(target);
        console.log('thisArg');
        console.log(thisArg);
        console.log('args');
        console.log(args);
        console.log('chamando...');
        return target(...args);
      }
    });
  }

  getTable() {
    return this
      .get('http://localhost:8080', '/imc-header/table', this.xhr)
      .then(function (rawResponse) {
        return rawResponse.json();
      });
  }

  /**
   * 
   * @param {Person} person 
   */
  async calculate(person) {
    const response = await this.xhr.withBasicAuth()
      .post('http://localhost:8080', '/imc-header/calculate', person);

    return await response.json();
  }
}
