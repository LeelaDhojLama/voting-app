import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';

import {getPoll,getPolls} from '../store/actions';

class Polls extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        const {getPolls} = this.props;
        getPolls();
    }

    render(){

        const polls = thsi.props.polls.map(poll=>(<li>{poll.question}</li>));

        return(<Fragment>
            <ul>
                {polls}
            </ul>
        </Fragment>);
    }
}

export default connect(store=>({
    auth:store.auth,
    polls: store.polls
}),
{getPoll,getPolls})(Polls);