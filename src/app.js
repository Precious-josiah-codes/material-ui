import React, { Component } from 'react';
import RedemptionReport from './component/redemptionReport';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>Nav Bar</h1>
                <RedemptionReport/>
            </div>
         );
    }
}
 
export default App;
