import './view/app-area.js';

class DataSource {
  constructor() {
    this._baseUrl = 'https://api.kawalcorona.com';
  }

  getDataGlobal() {
    fetch(`${this._baseUrl}`)
      .then(response => {
          return response.json();
      })
      .then(responseJson => {
         if(responseJson.error) {
             return  message;
         } else {
            return responseJson;
         }
      })
      .catch(error => {
         return(error);
      });
  }
}

export default DataSource;
