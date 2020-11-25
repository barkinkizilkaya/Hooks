import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Main from './Main/Main';
import Users from './Components/Users/Users'
import LoginContext from './context/login-context'


function App() {

  const [users, setUsers] = useState([
    { id: 1, name: "Barkin", age: 35 },
    { id: 2, name: "Ebru", age: 19 },
    { id: 3, name: "Melisa", age: 17 }
  ]);
  const [showPerson, setShowPerson] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);

  //Paragrafın üzerine tıklayınca user listesinden kaydı çıkaran handler
  const deletePersonHandler = (index) => {
    const deletecopy = [...users];
    deletecopy.splice(index, 1);
    setUsers(deletecopy);
  }

  //Textbox içine yazı yazınca isim alanını değiştiren handler
  const textChangedHandler = (event, id) => {
    const findUserIndex = users.findIndex(u => { return u.id === id });
    const user = { ...users[findUserIndex] };
    user.name = event.target.value;
    const u = [...users];
    u[findUserIndex] = user;
    setUsers(u);
  }

  //Kullanıcılar butonuna tıklayınca açıp kapatan handler
  const toggleUserHandler = () => {
    const show = showPerson;
    setShowPerson(!show);
  }

  //Giriş yapısını yöneten handler
  const loginHandler = () => {
    setAuthenticated(true);
  }

  //bu alanda people değişkeni yaratıp Users componentine kayıtları gönderiyoruz
  let people = null;
  if (showPerson) {
    people = (
      <div>
        <Users
          person={users}
          deleteClicked={deletePersonHandler}
          textChanged={textChangedHandler}>
        </Users>
      </div>
    )
  }

  //bu alanda  login contextini kullanıyoruz sayfalar arası bilgi aktarımı için kullanıyoruz
  
  return (
    <LoginContext.Provider value={{ authenticated: isAuthenticated, login: loginHandler }}>
      <div className="App">
        <Main toggleUserHandler={toggleUserHandler} showPersons={showPerson} ></Main>
        {people}
      </div>
    </LoginContext.Provider>
  );
}

export default App;
