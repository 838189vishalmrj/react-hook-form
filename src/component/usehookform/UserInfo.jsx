import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const UserInfoComponent = () => {
  const form = useForm();
  const { register, control, handleSubmit} = form;

  const formSubmit = (data)=>{
    console.log(data);
  }
  
  return (
    <>
      <form className="formWrap" onSubmit={handleSubmit(formSubmit)}>
        <div className="formContainer">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" {...register("name")} />
        </div>
        <div className="formContainer">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
        </div>
        <div className="formContainer">
          <label htmlFor="phone">Phone</label>
          <input type="number" id="phone" {...register("phone")} />
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
