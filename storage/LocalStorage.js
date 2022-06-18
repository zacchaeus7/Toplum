import React, { Component } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalStorage extends Component {

  storeData = async (dataKey, data) => {
    try {
      await AsyncStorage.setItem(dataKey, JSON.stringify(data));
      return true;
    } catch (error) {
      console.log(error);
    }
  }

  getData = async (dataKey) => {
    try {
      let data = await AsyncStorage.getItem(dataKey);
      data = (data !== null) ? JSON.parse(data) : null;
      
      return data;

    } catch (error) {
      console.log(error);
    }
  }

  deleteData = async (dataKey) => {
    try {
      await AsyncStorage.removeItem(dataKey);
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  }

}

export default LocalStorage;
