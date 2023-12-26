import avatar from '../../../assets/default-avatar.svg';
import React from "react";
export function Person({name, nickName = 'default value', images}) {

    // if exits then or set default
    const img = images?.[0]?.small?.url || avatar;

    return (
        <div>
            <img src={img} alt={name} style={{width: '50px'}} />
            <h4>{name}</h4>
            <p>Nickname: {nickName}</p>
        </div>
    );
}
  