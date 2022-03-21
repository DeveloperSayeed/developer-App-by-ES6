class Storage {
  static hasData(key) {
   return localStorage.getItem(key) ? localStorage.getItem(key) : false;
  }
  static getData(key) {

    if( this.hasData(key)){
        return JSON.parse(this.hasData(key))
    }
    else{
        return " No Data Found"
    }
  }

  static setData(key, data) {
    let data_arr = [];

    if (this.hasData(key)) {
      data_arr = JSON.parse(this.hasData(key));
    }
    data_arr.push(data);

    localStorage.setItem(key, JSON.stringify(data_arr));
  }
}
export default Storage;
