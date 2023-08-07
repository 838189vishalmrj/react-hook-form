import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const UserInfoComponent = () => {
  const form = useForm();
  const { register, control, handleSubmit,formState:{errors}} = form;

  // console.log(form);

  const formSubmit = (data)=>{
    console.log(data);
  }
  
  return (
    <>
      <form className="formWrap" onSubmit={handleSubmit(formSubmit)} noValidate>
        <div className="formContainer">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" {...register("name",{
            required:{
              value:true,
              message:'Please fill your name'
            }
          })} />
          <p className="error">{errors.name?.message}</p>
        </div>
        <div className="formContainer">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email",{
            required:{
              value:true,
              message:"Please fill your email"
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address'
            }
          })} />
          <p className="error">{errors.email?.message}</p>
        </div>
        <div className="formContainer">
          <label htmlFor="phone">Phone</label>
          <input type="number" id="phone" {...register("phone",{
            required:{
              value:true,
              message:"Please fill your phone number"
            }
          })} />
          <p className="error">{errors.phone?.message}</p>
        </div>
        <div className="formContainer">
          <input type="submit" value={"Submit"} />
        </div>
        
      </form>
      <DevTool control={control} />
    </>
  );
};

export default UserInfoComponent;
