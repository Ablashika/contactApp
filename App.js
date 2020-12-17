import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {Provider} from 'react-redux'
import AppContainer from './src/navigation/navigation';
import {store,persistor }from './src/redux/store'
import {PersistGate} from 'redux-persist/integration/react'


class App extends Component { 
render(){  
  return(
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}></PersistGate>
       <AppContainer/>
    </Provider>
  )
}

}


export default App