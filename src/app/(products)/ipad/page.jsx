import ClientComponent from "@/components/ClientComponent";
import QuotesServer from "@/components/QuotesServer";
import ServerComponent from "@/components/ServerComponent";

export default function Home() {
  return (
    <main>
      <div>iPad</div>
      <ServerComponent />
      <QuotesServer />
    </main>
  );
}
