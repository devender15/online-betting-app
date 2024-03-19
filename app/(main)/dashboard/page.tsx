import Navbar from "@/components/ui/navbar";
import Matches from "@/components/dashboard/matches";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50">
      <Navbar />

      <section className="p-8 w-full h-full">
        <h1 className="text-4xl font-semibold text-left">Cricket FANTASY</h1>
        <Matches />
      </section>
    </main>
  );
}
