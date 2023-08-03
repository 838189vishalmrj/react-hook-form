import React,{useState} from 'react'

const UserComponent = ()=>{

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const onHandleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        if(name === 'name'){
            setName(value)
        }else if(name === 'email'){
            setEmail(value)
        }else if(name === 'phone'){
            setPhone(value)
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = {
            name,email,phone
        }

        if(data.name === ""){
            alert('Please provide name');
        }else if(data.email === ''){
            alert("Please provide email");
        }else if(data.phone === ""){
            alert("please provide phone number");
        }else{
            console.log(data);
        }
    }

    return(
        <>
            <form className='formWrap' onSubmit={handleSubmit}>
                <div className="formContainer">
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' name='name' value={name} onChange={onHandleChange} />
                </div>
                <div className="formContainer">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' name='email' value={email} onChange={onHandleChange}/>
                </div>
                <div className="formContainer">
                    <label htmlFor="phone">Phone</label>
                    <input type="password" id='phone' name='phone' value={phone} onChange={onHandleChange}/>
                </div>
                <div className="formContainer">
                    <input type='submit' value={'Submit'} />
                </div>
            </form>
        </>
    )
}

export default UserComponent