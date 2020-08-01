import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom'
import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import Single from './Single';
import { removePost } from '../redux/actions';

class Main extends Component{

    constructor(){
        super()
        console.log("constructor")
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    render(){
        console.log("render")
        console.log(this.props);
        return  <div>
                    <h1>
                        <Link to='/'>Photowall</Link>
                    </h1>
                    <Route exact path="/" render={() => (
                        <div>
                            <Photowall {...this.props} />
                        </div>
                    )}/>

                    <Route path="/AddPhoto" render={({history}) => (
                        <div>
                            <AddPhoto {...this.props} onHistory={history}/>
                        </div>
                    )} />

                    <Route path="/single/:id" render={(params) => (
                        <Single {...this.props} {...params}/>
                    )}/>
                </div>
    }
}

export default Main;