import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { Button } from "./Button";

describe("Running Test for Controls Button", () => {
  test("Check Button", () => {
    render(<Button>I'm Button</Button>);
  });
});
