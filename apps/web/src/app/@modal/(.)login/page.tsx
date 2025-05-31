"use client";
import { LoginComp } from "@/components/auth_components/loginComp";
import { LoginModalPopup } from "@/components/popup/loginModalPopup";
import React from "react";

export default function LoginPage() {
  return (
    <LoginModalPopup>
      <>
        <h1 className="w-full text-read_25 font-semibold text-center">Login</h1>
        <p className="w-full text-center text-read_2 text-text-color_2 mt-2 mb-10">
          Welcome back!
        </p>
        <LoginComp />
      </>
    </LoginModalPopup>
  );
}
