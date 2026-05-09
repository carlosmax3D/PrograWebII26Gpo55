import { useState } from 'react';
import { useForm } from 'react-hook-form';
function LoginForm() {
  const [send, setSend] = useState(true)
  const { register, 
        handleSubmit, 
        formState: { errors } } = useForm();
  const onSubmit = (data) => {
    setSend(false);
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input type="text" 
      style={{backgroundColor: errors.email?'red':'green'}}
         {...register("email", 
           { required: true, pattern: /^\S+@\S+$/i })} />
      {errors.email && <p>Email is required and must be valid</p>}
      <label>Password</label>
      <input type="password" 
        {...register("password", 
        { validate: ()=>{console.dir('hola')}, required: false, pattern: /^\S+@\S+$/i })} />
      {errors.password && <p>Password is required</p>}
      <input type="text" 
        {...register("name", { required: true })} />
      {errors.name && <p>Name is required</p>}
      {send && <button type="submit">Submit</button> }
    </form>
  );
}
export default LoginForm;