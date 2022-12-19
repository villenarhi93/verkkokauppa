import {useEffect, useState} from 'react';
import axios from 'axios';

export default function Logout() {

    const [loggedUser, setloggedUser] = useState(null);
    const [error, setError] = useState('');
  
    useEffect(() => {
      axios.post(URL + "login.php", {}, {withCredentials:true})
        .then(response => setloggedUser(response.data))
        .catch(e => setError(e.response.data));
    }, [])
    
    function logOut(){
      axios.get(URL + "logout.php", {withCredentials:true})
      .then(response => setloggedUser(null))
      .catch(e => setError(e.response.data));
    }
  
    return (
      <div>
        {loggedUser && <button type = "button" class="btn btn-primary" onClick={logOut}>Logout</button>}
      </div>
    );
  }