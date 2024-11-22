import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  console.log(userInfo);
  try {
    const response = await fetch('auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw new Error('Failed to log in');
    }
    console.log(data);

    return data;
  } catch (err) {
    console.log(err);
    // throw err;
    return Promise.reject('could not fecth user')
  }
}

export { login };

