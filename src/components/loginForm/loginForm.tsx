import React from "react";
import { Input } from "../shared";
import { useFormik } from "formik";

const validationSchema={
    
}

const LoginForm = () => {
  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(/* JSON.stringify(values, null, 2) */ "Form Submitted");
    },
  });

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="pt-4 pb-2">
          <h5 className="card-title text-center pb-0 fs-4">
            Login to Your Account
          </h5>
          <p className="text-center small">
            Enter your username & password to login
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="row g-3 needs-validation"
          noValidate>
          <div className="col-12">
            <Input
              label={"username"}
              type="text"
              name="username"
              className="form-control"
              id="yourUsername"
              onChange={handleChange}
              value={values.username}
              error={errors.username}
              required
            />
          </div>

          <div className="col-12">
            <Input
              label={"password"}
              type="text"
              name="password"
              className="form-control"
              id="yourPassword"
              onChange={handleChange}
              value={values.password}
              error={errors.password}
              required
            />
          </div>

          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="remember"
                value="true"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary w-100" type="submit">
              Login
            </button>
          </div>
          <div className="col-12">
            <p className="small mb-0">
              Don't have account?
              <a href="pages-register.html">Create an account</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
