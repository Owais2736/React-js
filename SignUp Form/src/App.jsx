

import './App.css'
import { useForm } from "react-hook-form"
function App() {

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()


// const delay = (d)=> {
//   return new Promise((reslove , reject)=>{
//     setTimeout(()=>{

//       reslove()

//     }, d * 1000)
    
//   })
  
// }

  const onSubmit = async (data) => {
    
    // await delay(2)

    let a = await fetch("http://localhost:3000/", {method:"POST"})
    let res = await a.text()

    // if(data.firstName !== "Owais" || data.firstName !== "Sarosh" || data.firstName !== "Ebad"){
    //   setError("forms" , {message:"Invalid Credintial"})
    // }
    console.log(data , res)}


  return (
    <>

      <h1 className='text-4xl'>Sign Up</h1>
      <br />
      {isSubmitting && <div className='text-2xl text-red-600'>Loading...</div>}
      <form onSubmit={handleSubmit(onSubmit)} action="">
        
        <input className='w-1/4 h-10 text-md p-1 border-purple-950  rounded-md' {...register("firstName", { required: { value:true, message: "This is reuired field" }, minLength: { value: 3, message: "minLength is 3" }, maxLength: { value: 10, message: "maxLength is 10" } })} type="text " placeholder='Enter First Name'  />
        <br />
        {errors.firstName && <span className='text-red-600'>{errors.firstName.message}</span>}
        <br />
        <input className='w-1/4 h-10 text-md p-1 rounded-md' {...register("lastName", { required: { value: true, message: "This is reuired field" }, minLength: { value: 3, message: "minLength is 3" }, maxLength: { value: 10, message: "maxLength is 10" } })} type="text " placeholder='Enter Last Name'  />
        <br />
        {errors.lastName && <span className='text-red-600'>{errors.lastName.message}</span>}
        <br />
        <input className='w-1/4 h-10 text-md p-1 rounded-md' {...register("email", { required: { value: true, message: "This is reuired field" } })} type="email " placeholder='Enter Email'   />
       <br />
        {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
        <br />
        
        <input className='w-1/4 h-10 text-md p-1 rounded-md' {...register("phone", { required: { value: true, message: "This is reuired field" }, minLength: { value: 11, message: "minLength is 11" }, maxLength: { value: 15, message: "maxLength is 15" } })}  type="number " placeholder='Enter Phone number' />
       <br />
        {errors.phone && <span className='text-red-600'>{errors.phone.message}</span>}
        <br />
       
       <input className='w-1/4 h-10 text-md p-1 rounded-md' {...register("password", { required: { value: true, message: "This is reuired field" }, minLength: { value: 7, message: "minLength is 7" }, maxLength: { value: 15, message: "maxLength is 15" } })} type="password " placeholder='Enter Password'    />
       <br />
        {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
        <br />
        <input className='bg-slate-900 text-white w-28 h-9 rounded-md' disabled={isSubmitting} type="submit" value="submit" />
       <br />
        {errors.forms && <span className='text-red-600'>{errors.forms.message}</span>}
      </form>
    </>
  )
}

export default App
