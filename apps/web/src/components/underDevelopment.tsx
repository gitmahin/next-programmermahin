import { StatusBox, WarningIcon } from "@programmer/ui";
import React from "react";

export const UnderDevelopment = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center px-5">
      <StatusBox
        status="warning"
        statusCode={503}
        tag="Under Development"
        message="The page you are looking for is currently under development.
              Please check back later."
      />
    </div>
  );
};
