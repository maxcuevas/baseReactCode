import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.max = 'i hate this'
    }

  



    render() {

        let h = this.max;
        return (
            <div>{h}</div>
        );
    }
}
export default App;
