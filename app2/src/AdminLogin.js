import { Link } from "react-router-dom";

export default function AdminLogin()
{
    return (<main>
      
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="d-flex justify-content-center py-4">
                  <Link to="#" className="d-flex align-items-center w-auto">
                    <img src="../logo.png" alt height="64px" />
                    <span className="d-none d-lg-block h2">Online Doctor Appointment</span>
                  </Link>
                </div>{/* End Logo */}
              </div>
              <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="py-1">
                      <h6 className="card-title text-center pb-0 fs-4">Admin Login</h6>
                    </div>
                    <form className="row g-3 needs-validation" noValidate>
                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">Email</label>
                        <div className="input-group has-validation">
                          <span className="input-group-text" id="inputGroupPrepend">@</span>
                          <input type="text" name="username" className="form-control" id="yourUsername" required />
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="yourPassword" required />
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">Login</button>
                      </div>
                      <p className="text-end">
                        <Link to="./admin-forgot-password">Forgot password</Link>
                        <Link to="./admin-forgot-password">Forgot password</Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
);
}