import React from 'react';
import { shallow, mount, render } from '@wojtekmaj/enzyme-adapter-react-17';

const Card = ({ name, email, id }) => {
    //const {name, email, id} = props;
    return (
        <div className='tc bg-navy near-white dib br3 pa3 ma3 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;