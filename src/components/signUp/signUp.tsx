import React from "react";
import { Link } from "react-router-dom";
import { path } from "../../routes";
import { Input } from "../shared";
import { useFormik } from "formik";
import { ObjectSchema, object, string } from "yup";
import { errorParser } from "../../utils";
import { QueryClient, useQuery } from "@tanstack/react-query";

const initialValues = {
  name: "",
  email: "",
  username: "",
  password: "",
};

const validationSchema: ObjectSchema<{
  username: string;
  password: string;
  name: string;
  email: string;
}> = object().shape({
  name: string().required("Name is required"),
  username: string()
    .required("Username is required")
    .min(3, "Password must be a minimum of 3 characters"),
  email: string().email("Invalid email").required("Email is required"),
  password: string()
    .min(6, "Password must be a minimum of 8 characters")
    .required("Password is required"),
});

// export const queryClient = new QueryClient();

const SignUp = () => {
  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit() {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const queryFn = async (data: { [key: string]: any }) => {
    const url = "url_to_endpoint_";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Something Went Wrong");
    }
    return response;
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["signUppostJSON"],
    queryFn,
  });

  return (
    <>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <a
                    href="index.html"
                    className="logo d-flex align-items-center w-auto"
                  >
                    <img src="assets/img/logo.png" alt="" />
                    <span className="d-none d-lg-block">NiceAdmin</span>
                  </a>
                </div>
                {/* <!-- End Logo --> */}

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">
                        Create an Account
                      </h5>
                      <p className="text-center small">
                        Enter your personal details to create account
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="row g-3 needs-validation"
                      noValidate
                    >
                      <div className="col-12">
                        <Input
                          label={"Your Name"}
                          type="text"
                          name="name"
                          spanData={null}
                          id="yourName"
                          onChange={handleChange}
                          value={values.name}
                          error={errorParser(errors, touched, "name")}
                          className="form-control loginForm__input"
                          placeholder="Input a name"
                        />
                      </div>

                      <div className="col-12">
                        <Input
                          label={"Your Email"}
                          type="email"
                          name="email"
                          spanData={null}
                          id="yourEmail"
                          onChange={handleChange}
                          value={values.email}
                          error={errorParser(errors, touched, "email")}
                          className="form-control loginForm__input"
                          placeholder="Input your email"
                        />
                      </div>

                      <div className="col-12">
                        <Input
                          label={"username"}
                          type="text"
                          name="username"
                          className="form-control loginForm__input"
                          id="yourUsername"
                          onChange={handleChange}
                          value={values.username}
                          error={errorParser(errors, touched, "username")}
                          placeholder="Enter an email address"
                          spanData="@"
                        />
                      </div>

                      <div className="col-12">
                        <Input
                          label={"password"}
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
                            name="terms"
                            type="checkbox"
                            value=""
                            id="acceptTerms"
                            required
                          />
                          <label
                            className="form-check-label"
                            htmlFor="acceptTerms"
                          >
                            I agree and accept the{" "}
                            <a href="#">terms and conditions</a>
                          </label>
                          <div className="invalid-feedback">
                            You must agree before submitting.
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">
                          Create Account
                        </button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">
                          Already have an account?
                          <Link to={path.root.path}>Log in</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="credits">
                  Designed by
                  <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignUp;
