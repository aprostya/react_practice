import React from 'react';
import {robots} from './robots';
const Card = ({name, email, id}) => {
    return (
        <div className='bg-lightest-blue inline-flex flex-column br3 pa3 ma2 grow ma2 bw2 shadow-5 card-content'>
            <div className='inline-flex br-3 mw-100'>
            <img alt='robot-image' src={`https://robohash.org/${id}?set=set4`} width={200} height={200}/>
        </div>
            <div>
                <h2 className="card-content__name">{name}</h2>
                <p className="card-content__email">{email}</p>
            </div>
        </div>
    );
}

export default Card;