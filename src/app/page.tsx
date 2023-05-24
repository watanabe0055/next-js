"use client";
import { RecoilRoot, useRecoilValue } from "recoil";
import { TaskIndexTemplate } from "./parts/templates/index";

export default function Home() {
  return (
    <>
      <RecoilRoot>
        <TaskIndexTemplate />
      </RecoilRoot>
    </>
  );
}
