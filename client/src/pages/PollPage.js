import React from 'react';

import ErrorMessage from '../components/ErrorMessage';
import Poll from '../components/Poll';

const PollPage = ({match,getPoll,poll}) =>{
    const host = window.location.href;
    console.log(match);
    getPoll(match.params.id);

    return(
        <div>
            <ErrorMessage />
            <Poll />
        </div>
    );
};

export default PollPage;