import React from 'react';

//context bilgisi 
const loginContext = React.createContext({
    authenticated:false,
    login:() =>{}
});

export default loginContext;