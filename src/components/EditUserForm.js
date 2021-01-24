import { useForm } from "react-hook-form";

export const EditUserForm = (props) => {
   const { register, errors, handleSubmit, setValue } = useForm({
      defaultValues: props.selectedUser,
   });

   setValue("name", props.selectedUser.name);
   setValue("username", props.selectedUser.username);

   const onSubmit = (data) => {
      props.editUser({
         id: props.selectedUser.id,
         ...data,
      });
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
         <button type="submit">Editar</button>
         <button type="button" onClick={() => props.onCancel()}>
            Cancelar
         </button>
      </form>
   );
};
