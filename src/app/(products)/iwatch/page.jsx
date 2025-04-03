import HeaderText from "@/components/HeaderText";
import ShowImg from "@/components/showImg";

export default function Home() {
  return (
    <main className="grid grid-cols-3 gap-x-10">
      <HeaderText />
      <ShowImg />
    </main>
  );
}
