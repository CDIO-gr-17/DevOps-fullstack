import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import Home from "./views/home/home";

describe(Home.name, () => {
  it("should render", () => {
    render(<Home />);
  });
});
//THIS IS KEPT AS EXAMPLE
