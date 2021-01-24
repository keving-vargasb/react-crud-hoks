import { useForm } from "react-hook-form";

export const AddUserForm = (props) => {
   const { register, errors, handleSubmit } = useForm();

   const onSubmit = (data, e) => {
      props.addUser(data);
      e.target.reset();
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <label>Nombre</label>
         <input
            type="text"
            name="name"
            ref={register({
               required: { value: true, message: "Campo requerido" },
            })}
         />
         <div>{errors?.name?.message}</div>
         <label>Apodo</label>
         <input
            type="text"
            name="username"
            ref={register({
               required: { value: true, message: "Campo requerido" },
            })}
         />
         <div>{errors?.username?.message}</div>
         <button type="submit">Add new user</button>
      </form>
   );
};
