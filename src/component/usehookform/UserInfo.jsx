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
            },
            validate:(value)=>{
              return value !== 'admin' || 'Please provide another name'
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
            },
            validate:{
              notAdminEmail:(value)=>{
                return value !== 'admin@gmail.com' || 'Please choose another email'
              },
              blockDomail:(value)=>{
                return !value.endsWith('test.com')  || 'This domin is not allowed'
              },
              lengthError:(value)=>{
                return value.length > 6 || 'Please write correct email format'
              }
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
