import React from "react";
import rendered from "react-test-renderer";
import { cleanup, render } from "@testing-library/react";

import Button from "../Button";

afterEach(cleanup);

const handlerClick = (): void => {
  console.log("do smth");
};

describe("Button", () => {
  it("button without text", () => {
    const buttonComponent = rendered.create(<Button />);
    const tree = buttonComponent.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("button with text", () => {
    const buttonComponent = rendered.create(<Button>Hopa</Button>);
    const tree = buttonComponent.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("button with text and function", () => {
    const buttonComponent = rendered.create(
      <Button onClick={handlerClick}>Hopa</Button>
    );
    const tree = buttonComponent.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("disabled button", () => {
    const { getByText } = render(
      <Button onClick={handlerClick} disabled>
        Hopa
      </Button>
    );

    expect(getByText(/Hopa/)).toHaveAttribute("disabled");
  });
});
