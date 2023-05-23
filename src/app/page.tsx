import Image from "next/image";
import { TaskButton } from "./parts/organisms/taskButton";
import { TaskModule } from "./parts/molecules/taskmodule";
import { TaskIndex } from "./parts/organisms/taskIndex";

export default function Home() {
  return (
    <>
      <TaskIndex />
    </>
  );
}
