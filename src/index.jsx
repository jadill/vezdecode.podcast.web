import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import '@vkontakte/vkui/dist/vkui.css';
import store from "./resources/store";
import PodcastRouter from "./components/Router/Router";
import connect from '@vkontakte/vkui-connect';

// Init VK App
connect.send('VKWebAppInit', {});

const App = () => {
    return (
        <Provider store={store}>
            <PodcastRouter/>
        </Provider>
    )
}

ReactDOM.render((<App/>), document.getElementById('root'));

registerServiceWorker();