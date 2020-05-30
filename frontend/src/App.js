import React,{Component} from 'react';
import LinkForm from './components/LinkForm';
import './App.css';
class App extends Component {
    render() {
        return (

            <div className="url-space">
                <h1>URL Shortener</h1>
        <LinkForm />
        </div>
        );
    }
}

export default App;