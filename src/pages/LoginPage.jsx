import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/Auth'
import  './LoginPage.css'
const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signin} = useAuth();
    const {signout} = useAuth();
    const auth = useAuth()
    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.email_address.value;
        
        signin(user, () => navigate(fromPage, {replace: true}));
    }

  return auth.user ? (
    <p>
     <h1>Welcome!!!</h1>
      <button onClick={() => signout(() => navigate('/', {replace: true}))}>
        Sign out
      </button>
    </p>
  ) : (
    <>
<main class="login-form">
    <div class="cotainer">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <h1 class="card-header">Login Page</h1>
                    <div class="card-body">
                        <form onSubmit={handleSubmit} action="" method="">
                            <div class="form-group row">
                                <label for="email_address" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                <div class="col-md-6">
                                    <input type="text" id="email_address" class="form-control" name="email-address" required autofocus/>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                <div class="col-md-6">
                                    <input type="password" id="password" class="form-control" name="password" required/>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6 offset-md-4">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" name="remember"/> Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Sign in
                                </button>
        
                            </div>
                            
                        </form>
                </div>
            </div>
        </div>
    </div>
    </div>

</main>
</>
  )
}





export {LoginPage};