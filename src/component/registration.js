
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import '../css/registration.css';
import { useForm } from "react-hook-form";

function Register() {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            username: '',
            password: '',
        }
      });
      return (
        <div className='container'>
        <form className="form-container"  onSubmit={handleSubmit(Query(register.username,register.password))}>
            <h2>Registration</h2>
          <input {...register("username", { required: true })} placeholder="username" />
    
          <input {...register("password", { minLength: 2 })} placeholder="password" />
          <input type="submit" />     
        </form>
        </div>
      );
}


 
 const queryClient = new QueryClient()
 
function Query(username,password) {
   return (
     <QueryClientProvider client={queryClient}>
       <RegisterApi />
     </QueryClientProvider>
   )
 }
 
 function RegisterApi(username,password) {
   const { isLoading, error, data } = useQuery('repoData', () =>
     fetch('https://tkahoot.herokuapp.com/user/register' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    }).then(res =>
       res.json()
     )
   )
 
   if (isLoading) return 'Loading...'
 
   if (error) return 'An error has occurred: ' + error.message
 
   return (
    <h1>Hello Kahoot {data}</h1>
   )
 }


export default Register


