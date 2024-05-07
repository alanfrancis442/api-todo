import { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [first_name, setfirst_name] = useState('')
  const [last_name, setlast_name] = useState('')
  const [password, setPassword] = useState('');

  let baseUrl = 'https://jelan.pythonanywhere.com';

  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem('isLoggedIn');
  //   if (isLoggedIn === 'true') {
  //     history.push('/');
  //   }
  // }, []);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    let response = await axios.post(`${baseUrl}/api/user/signup`, { 
      'username':username,
       "password":password,
       "first_name": first_name, 
       "last_name": last_name,
      })
      if(response.data.code ===201 )
      {
        history.push('/login');
      }
  };

  const tologin = () => {
    history.push('/login');
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create your account
              </h1>
              <form onSubmit={handleSignup} className="space-y-4 md:space-y-6" action="#" method="POST">
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User name</label>
                      <input onChange={(e) => setUsername(e.target.value)} type="User Name" name="User Name" id="User Name" placeholder="User Name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required/>
                  </div>
                  <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First_ Name</label>
                      <input onChange={(e) => setfirst_name(e.target.value)} type="first_ name" name="first_ Name" id="first_ Name" placeholder="first_ Name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
                  </div>
                  <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First_ Name</label>
                      <input onChange={(e) => setlast_name(e.target.value)} type="last_ name" name="last_ Name" id="last_ name" placeholder="last_ name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input onChange={(e) => setPassword(e.target.value)} type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required/>
                  </div>
                  <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create account</button>
                  <p onClick={tologin} className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign in</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>

  );
};

export default Signup;
