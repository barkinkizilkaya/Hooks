//Bu alanda hooklardan useeffect useref ve useContext
import React,{ useEffect,useRef,useContext} from 'react'
import classes from './Main.Module.css'
import LoginContext from '../context/login-context';

const MainUi = (props) => {

    //referans bilgisini saklamak için useRef kullanıyoruz. Data bu şekilde kaybolmamış olyor
    const toogleButtonRef = useRef(null);
    //context sayfalar arası daha paylaşımı için kullanılıyor. Bu şekilde doğrudan da kullanılabilir. User sayfasındaki consumer de kullanılabilir
    const loginContext = useContext(LoginContext);

    //her renderin sonunda bir kere çalışır  [] değişkeni hangi data değiştiğinde çalışmasını istediğimizi kontrol ediyor.
    //burda boş kullanıdığımız için sadece ilk render sonunda çalışacak.
    //Bu durumu bildiğimiz için sayfamızda kayıtlar başlangıcta açılsın diye burdaki effect içinde toogleButtonRef kontrolünü yapıyoruz
    useEffect(()=> { 
        toogleButtonRef.current.click();
    },[]);

    return (
        <div className={classes.Main}>
            <h1>Merhaba!</h1>
            <button ref={toogleButtonRef} className={classes.red} onClick={props.toggleUserHandler }>Kullancıları Aç</button>
            <button onClick={loginContext.login }>Giriş yap</button>
        </div>

    );

}

export default MainUi