import AuthForm from "@/components/Auth/AuthForm";
import React from "react";

const Auth = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-lg">
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;
