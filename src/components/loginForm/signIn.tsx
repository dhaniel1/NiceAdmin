import React from "react";
import { Button, Input } from "../shared";
import { useFormik } from "formik";
import { ObjectSchema, object, string } from "yup";
import { errorParser } from "../../utils";
import { Link, useNavigate } from "react-router-dom";
import { path } from "../../routes";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const validationSchema: ObjectSchema<{
  email: string;
  password: string;
}> = object().shape({
  // This object could be placed outside if it gets to large
  email: string().email("Invalid email").required("Email is required"),
  password: string()
    .min(8, "Password must be a minimum of 8 characters")
    .required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

/*   "email": "superadmin@medixab.net", "password": "password" */

const SignIn = () => {
  const navigate = useNavigate();

  //initializing formik
  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // event.preventDefault();
      mutate(values);
    },
  });

  const mutationFn = async (data: { [key: string]: any }) => {
    const url = "https://api.medixab.net/api/v1/Account/authenticate";

    let response: any = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // console.log(await response.json());

    if (!response.ok) {
      response = await response.json();

      throw new Error(response.message || "Something went wrong");
      // toast.error("Something Went Wrong");
    }

    return response;
  };

  const { isLoading, mutate } = useMutation({
    mutationFn,
    onSuccess: (response) => {
      console.log(response);
      if (response.ok) {
        toast.success("Login successful");
        navigate(path.home.path);
      }
    },
    onError: (error: Error) => {
      console.log(error || "Invalid Credentials");
      toast.error(error.message || "Invalid Credentials");
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
            Enter your email & password to login
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="row g-3 needs-validation"
          noValidate
        >
          <div className="col-12">
            <Input
              label="email"
              type="text"
              name="email"
              className="form-control loginForm__input"
              id="youremail"
              onChange={handleChange}
              value={values.email}
              error={errorParser(errors, touched, "email")}
              placeholder="Enter an email address"
              spanData="@"
            />
          </div>

          <div className="col-12">
            <Input
              label="password"
              type="text"
              name="password"
              className="form-control loginForm__input"
              id="yourPassword"
              onChange={handleChange}
              value={values.password}
              error={errorParser(errors, touched, "password")}
              placeholder="Enter your password"
              spanData={null}
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
          <Button title={isLoading ? "signing in..." : "Login"} />
          <div className="col-12">
            <p className="small mb-0">
              Don't have account?
              <Link to={path.signUp.path}>Create an account</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
