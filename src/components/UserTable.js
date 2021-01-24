import React from "react";

export const UserTable = (props) => {
   return (
      <table>
         <thead>
            <tr>
               <td>Nombre</td>
               <td>Apodo</td>
               <td>Modificar</td>
               <td>Eliminar</td>
            </tr>
         </thead>
         <tbody>
            {props.users.length === 0 ? (
               <tr colSpan={3}>No users</tr>
            ) : (
               props.users.map((user) => (
                  <tr key={user.id}>
                     <td>{user.name}</td>
                     <td>{user.username}</td>
                     <td>
                        <button onClick={() => props.selectUserToEdit(user)}>
                           Modificar
                        </button>
                     </td>
                     <td>
                        <button onClick={() => props.deleteUser(user.id)}>
                           Eliminar
                        </button>
                     </td>
                  </tr>
               ))
            )}
         </tbody>
      </table>
   );
};
