
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import '../css/registration.css';
import { useForm } from "react-hook-form";

function Login() {
    const {login, handleSubmit } = useForm({
        defaultValues: {
            username: '',
            password: '',
        }
      });
      return (
        <div className='container'>
        <form className="form-container"  onSubmit={handleSubmit(Query(login.username,login.password))}>
            <h2>Registration</h2>
          <input {...login("username", { required: true })} placeholder="username" />
    
          <input {...login("password", { minLength: 2 })} placeholder="password" />
          <input type="submit"/>     
        </form>
        </div>
      );
}


 
 const queryClient = new QueryClient()
 
function Query(username,password) {
   return (
     <QueryClientProvider client={queryClient}>
       <LoginApi />
     </QueryClientProvider>
   )
 }
 
 function LoginApi(username,password) {
   const { isLoading, error, data } = useQuery('repoData', () =>
     fetch('https://tkahoot.herokuapp.com/user/login' , {
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


export default Login


