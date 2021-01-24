import React, { useState } from "react";
import { UserTable } from "./components/UserTable";
import { v4 as uuidv4 } from "uuid";
import { AddUserForm } from "./components/AddUserForm";
import { EditUserForm } from "./components/EditUserForm";

const USERS = [
   {
      id: uuidv4(),
      name: "Kevin Vargas",
      username: "keving",
   },
   {
      id: uuidv4(),
      name: "Giovanny Benavides",
      username: "gio2803",
   },
];

function App() {
   const [users, setUsers] = useState(USERS);
   const [isEditing, setIsEditing] = useState(false);
   const [selectedUser, setSelectedUser] = useState();

   const addUser = (user) => {
      user.id = uuidv4();
      setUsers([...users, user]);
   };

   const deleteUser = (id) => {
      const usersFilter = users.filter((user) => user.id !== id);
      setUsers(usersFilter);
   };

   const selectUserToEdit = (user) => {
      setIsEditing(true);
      setSelectedUser(user);
   };

   const editUser = (user) => {
      setIsEditing(false);
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
   };

   return (
      <div>
         <h1>Adminsitración usuarios</h1>
         <hr />
         {isEditing ? (
            <div>
               <h3>Editar usuario</h3>
               <EditUserForm
                  onCancel={() => setIsEditing(false)}
                  selectedUser={selectedUser}
                  editUser={editUser}
               />
            </div>
         ) : (
            <div>
               <h3>Agregar usuario</h3>
               <AddUserForm addUser={addUser} />
            </div>
         )}

         <hr />
         <h3>Lista de usuarios</h3>
         <UserTable
            users={users}
            deleteUser={deleteUser}
            selectUserToEdit={selectUserToEdit}
         />
      </div>
   );
}

export default App;
