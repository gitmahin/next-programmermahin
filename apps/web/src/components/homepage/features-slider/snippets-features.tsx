import React from "react";
import { FeaturesSlider } from "./featuresSlider";
import { ErrorCodeExample } from "./codes/error";
import { WarningCodeExample } from "./codes/warning";
import { AddRemoveCodeExample } from "./codes/addremove";
import { HighlightCodeExample } from "./codes/highlight";
import { FocusCodeExample } from "./codes/focus";

export const SnippetsFeatures = () => {
  return (
    <>
      <FeaturesSlider
        errorCodeExample={<ErrorCodeExample />}
        warningCodeExample={<WarningCodeExample />}
        addRemoveCodeExample={<AddRemoveCodeExample />}
        highlightCodeExample={<HighlightCodeExample />}
        focusCodeExample={<FocusCodeExample />}
      />
    </>
  );
};
