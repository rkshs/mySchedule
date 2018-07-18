import React from 'react';
import Expo from "expo";
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import { combineReducer } from './redux/reducers/combineReducer';
import { HomeScreen } from './components/HomeScreen/HomeScreen'

const store = createStore(
    combineReducer
);

export default class App extends React.Component {
    state = {
        isReady: false
    };

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            Ionicons: require("native-base/Fonts/Ionicons.ttf")
        });
        this.setState({ isReady: true });
    }

    render() {
        const { isReady } = this.state;
        return (
            <Provider store={store}>
                {isReady ? <HomeScreen /> : <Expo.AppLoading />}
            </Provider>
        );
    }
}
