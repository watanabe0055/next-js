import { Buttons } from "@/app/parts/atoms/buttons";
import { render, fireEvent } from "@testing-library/react";
import { RecoilRoot, useRecoilState } from "recoil";
import "@testing-library/jest-dom";

describe("Buttons", () => {
  const mockHandleUpdate = jest.fn();
  const mockHandleCompleted = jest.fn();

  it("renders correctly", () => {
    const { getByText } = render(
      <RecoilRoot>
        <Buttons
          id={1}
          color="black"
          label1="Test Button 1"
          label2="Test Button 2"
          type={true}
        />
      </RecoilRoot>
    );

    expect(getByText("Test Button 1")).toBeInTheDocument();
    expect(getByText("Test Button 2")).toBeInTheDocument();
  });

  // it("calls handleUpdate on click", () => {
  //   const { getByText } = render(
  //     <RecoilRoot>
  //       <Buttons
  //         id={1}
  //         color="black"
  //         label1="Test Button 1"
  //         label2="Test Button 2"
  //         type={true}
  //       />
  //     </RecoilRoot>
  //   );

  //   fireEvent.click(getByText("Test Button 1"));
  //   expect(mockHandleUpdate).toHaveBeenCalledWith({ id: 1, tasks: [] });
  // });

  // it("calls handleCompleted on click", () => {
  //   const { getByText } = render(
  //     <RecoilRoot>
  //       <Buttons
  //         id={1}
  //         color="black"
  //         label1="Test Button 1"
  //         label2="Test Button 2"
  //         type={true}
  //       />
  //     </RecoilRoot>
  //   );

  //   fireEvent.click(getByText("Test Button 2"));
  //   expect(mockHandleCompleted).toHaveBeenCalledWith({ id: 1, tasks: [] });
  // });
});
