import {Component} from 'react';
//import LocalStorage from '../storage/LocalStorage';

class API extends Component {
  // serverUrl = "http://192.168.1.155:8000/api";
  serverUrl = "http://192.168.1.191:8000/api";
  // serverUrl = "http://192.168.88.39:3333/api";
  //serverUrl = "https://api.lido-delivery.com/api";

  send = async (data, route = '', method = 'POST') => {
//    const user = await this.getUser();
    try {

      let response = await fetch(this.serverUrl+'/'+route, {
        method: method,
        headers: {
          //'Authorization': 'Bearer ' + user.access_token,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
  
      });
  
      let responseJson = await response.json();

      return responseJson;

    } catch (error) {
      console.log('error: ', error);
    }
  }

  async getData(route = '') {

   // const user = await this.getUser();

    try {

      let response = await fetch(this.serverUrl+'/'+route, {
        method: "GET",
        headers: {
         // 'Authorization': 'Bearer ' + user.access_token,
        }
  
      });
  
      let responseJson = await response.json();

      return responseJson;

    } catch (error) {
      console.log('error: ', error);
    }
  }

  createFormData = (data) => {

    const formData = new FormData();
    data.file != undefined && formData.append(data.file.name, data.file.data);

    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
  
    return data;
  };

  // async getUser(){
  //   const localStorage = new LocalStorage();
  //   let user = await localStorage.getData('lido_shop_user');

  //   user = user !== null ? user : {access_token: null};

  //   if(user.access_token == undefined){
  //     user.access_token = null;
  //   }

  //   return user;
  // }

}

export default API;
