import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';

import {getUserPoll,getPolls,getCurrentPoll} from '../store/actions';

class Polls extends Component{

    constructor(props){
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount(){
        const {getPolls} = this.props;
        getPolls();
    }

    handleSelect(id){
        const {getCurrentPoll} = this.props;
        console.log(id);
        getCurrentPoll(id);
    }

    render(){

        const {auth, getPolls, getUserPoll} = this.props;
        const polls = this.props.polls.map(poll=>(<li onClick={()=>this.handleSelect(poll._id)} key={poll._id} >{poll.question}</li>));
        
        return(<Fragment>
            {auth.isAuthenticated && (
                <div>
                    <button onClick={getPolls}>All Polls</button>
                    <button onClick={getUserPoll}>My Poll</button>
                </div>
            )}
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
{getUserPoll,getPolls,getCurrentPoll})(Polls);