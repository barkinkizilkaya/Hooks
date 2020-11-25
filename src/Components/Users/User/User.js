import React from 'react';
import LoginContext from '../../../context/login-context';

const user = (props) => {

    //login contexi consume ederek burada kullanabiliriz
    return (
        <div className="Person">
            <LoginContext.Consumer>
                {context => context.authenticated ? <p>Giriş Yapıldı</p>: <p>Lütfen Giriş yapınız</p>} 
            </LoginContext.Consumer>
            <p onClick={props.deleteClicked}>Ben {props.name} ve {props.age} yaşındayım</p>
            <input type="text" onChange={props.textChanged} value={props.name}></input>
        </div>
    )

}

export default user;