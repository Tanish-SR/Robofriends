import React from "react";

const Card= (props) => {
    const {name,email,id} = props
    return (
        <div className="tc bg-light-blue dib br2 pa2 ma2 grow shadow-5 bw2">
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;