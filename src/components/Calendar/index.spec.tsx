import "@testing-library/jest-dom";
import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Calendar from ".";

const mock = [
  {
    type: "Ano Novo",
    date: "2024-01-01",
  },
];

describe("Calendar Component", () => {
  beforeEach(() => {
    render(<Calendar customDate={mock} />);
  });

  it("renders button before month", () => {
    expect(screen.getByTestId("before-month-button")).toBeInTheDocument();
  });

  it("renders month label", () => {
    expect(screen.getByTestId("label-month")).toBeInTheDocument();
  });

  it("renders years label", () => {
    expect(screen.getByTestId("label-year")).toBeInTheDocument();
  });

  it("renders button after month", () => {
    expect(screen.getByTestId("after-month-button")).toBeInTheDocument();
  });
});
