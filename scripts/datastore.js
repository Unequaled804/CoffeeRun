(function (window) {
  "use strict";
  var App = window.App || {};

  function DataStore() { //构造函数：创建和定制一个新的对象
    //console.log("running the DataStore function");
    this.data = {}; //隐式返回该对象
  }

  DataStore.prototype.add = function (key, val) {
    this.data[key] = val;
  };

  DataStore.prototype.get = function (key) {
    return this.data[key];
  };

  DataStore.prototype.getAll = function () {
    return this.data;
  };

  DataStore.prototype.remove = function (key) {
    delete this.data[key];
  };

  App.DataStore = DataStore;
  window.App = App;
  
})(window);
