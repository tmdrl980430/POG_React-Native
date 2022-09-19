/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './app/index';
import {name as appName} from './app.json';
import {RecoilRoot} from 'recoil';

const appRedux = () => (<RecoilRoot>
    <App/>
</RecoilRoot>)

AppRegistry.registerComponent(appName, () => appRedux);
