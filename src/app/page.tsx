import Navbar from "@/components/NavBar";
import Landing from "@/app/(nondashbboard)/landing/page";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Navbar />
      <main className={`h-full flex w-full flex-col`}>
        <Landing />
      </main>
    </div>
  );
}
