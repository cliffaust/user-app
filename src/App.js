import './App.css';
import {useState} from 'react'
import UserForm from './Components/UserForm';
import Userlist from './Components/UserList';

function App() {
  const [users, setUsers] = useState([]);

  function addUser(user){
    setUsers([...users, user])
  }

  function deleteUser(id){
    let newUsers = users.filter((user)=>user.id !== id);
    setUsers(newUsers);
  }

  function updateUser(id, updatedUserinfo){
    let newUsers = users.map((user)=>{
    if(user.id===id){
      return updatedUserinfo
    }
    return user  
    });

    setUsers(newUsers)
    

  }


  return (
    <div className="container App">
      <div className="row">
        <div className="col-md-6">
          <UserForm addUser={addUser}/>
        </div>
        <div className="col-md-6">
          <Userlist updateUser={updateUser} delete={deleteUser} allUsers={users}/>
        </div>
      </div>
    </div>
  );
}

export default App;
