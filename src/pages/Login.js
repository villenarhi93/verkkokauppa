import axios from "axios";
import {useState, useEffect} from 'react';

export default function Login() {
    const [uname, setUname] = useState("");
    const [pw, setPw] = useState("");
    const [error, setError] = useState('');
    const [loggedUser, setLoggedUser] = useState(null);

    function logIn(){
        const formData = new FormData();
        formData.append("uname", uname);
        formData.append("pw", pw);
    
        axios.post(URL+"inc/login.php", formData, {withCredentials: true})
          .then(resp => {
            setLoggedUser(resp.data);
            setError('');
          })
          .catch(e => setError(e.response.data));

        }

    return (
        <>
        <form>
            <div class="mb-3">
                <label for="username" class="form-label">Käyttäjätunnus</label>
                <input type="text" class="form-control" value={uname} onChange={e => setUname(e.target.value)} />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Salasana</label>
                <input type="password" class="form-control" value={pw} onChange={e => setPw(e.target.value)} />
            </div>
            <button type="button" class="btn btn-primary" onClick={logIn}>Kirjaudu sisään</button>
            </form>
        </>
    )
       
    }