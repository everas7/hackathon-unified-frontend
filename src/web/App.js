// App.js - WEB
import React, { Component } from 'react';
import Dummy from '../common/Dummy';
import WebHeader from '../common/WebHeader';

class App extends Component {
    render() {
        return (
            <>
                <WebHeader
                    title="Conversations"
                    username="Renan Zelaya"
                    goto={{
                        label: 'Dashboard',
                        onPress: () => {
                            console.log('Pressed');
                        },
                    }}
                    tabs={[
                        {
                            label: 'Dashboard',
                            onPress: () => {
                                console.log('goto dashboard');
                            },
                        },
                        {
                            label: 'Conversations',
                            onPress: () => {
                                console.log('goto conversations');
                            },
                        },
                    ]}
                />{' '}
                <Dummy />
            </>
        );
    }
}

export default App;
