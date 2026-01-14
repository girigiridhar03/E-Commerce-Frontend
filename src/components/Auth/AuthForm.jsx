import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CircleUserRound } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authSignin } from "@/store/auth/auth.service";

const AuthForm = () => {
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    image: null,
  });

  const { pathname } = useLocation();

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pathname === "/signin") {
      const result = await dispatch(
        authSignin({
          email: form.email,
          password: form.password,
        })
      ).unwrap();

      if (result?.success) {
        sessionStorage.setItem("token", result?.data);
        navigate("/");
      }
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {pathname === "/signin"
            ? "Login to your account"
            : "Create an account"}
        </CardTitle>
        <CardDescription>
          {pathname === "/signin"
            ? "Enter your email below to login to your account"
            : "Enter your information below to create your account"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          {pathname === "/signup" && (
            <div className="flex justify-center my-4">
              <label
                htmlFor="avatar"
                className="w-40 h-40 rounded-full border flex items-center justify-center cursor-pointer hover:bg-muted transition"
              >
                {preview ? (
                  <img
                    src={preview}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <CircleUserRound className="w-16 h-16 text-primary" />
                )}
              </label>

              <Input
                id="avatar"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setPreview(URL.createObjectURL(file));
                    setForm((prev) => ({ ...prev, image: file }));
                  }
                }}
              />
            </div>
          )}

          <FieldGroup>
            {pathname === "/signup" && (
              <Field>
                <FieldLabel htmlFor="name">Username</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                />
              </Field>
            )}

            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              <FieldDescription>
                We&apos;ll use this to contact you. We will not share your email
                with anyone else.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                type="password"
                required
                name="password"
                value={form.password}
                onChange={handleChange}
              />
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit">
                  {pathname === "/signin" ? "Sign In" : "Create Account"}
                </Button>
                <FieldDescription className="px-6 text-center">
                  {pathname === "/signin" ? (
                    <span>
                      Don't have an account?{" "}
                      <Link to="/signup" className="text-primary underline">
                        Sign up
                      </Link>
                    </span>
                  ) : (
                    <span>
                      Already have an account?{" "}
                      <Link to="/signin" className="text-primary underline">
                        Sign in
                      </Link>
                    </span>
                  )}
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
