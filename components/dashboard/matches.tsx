"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MatchCard from "../ui/match-card";

export default function Matches() {
  return (
    <section className="py-6 w-full h-full">
      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="my-matches">My Matches</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <div className="w-full grid grid-cols-4 gap-3 mt-3">
            {[...Array(10)].map((_, i) => (
              <MatchCard key={i} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="my-matches">
          <div className="w-full grid grid-cols-4 gap-3 mt-3">
            {[...Array(3)].map((_, i) => (
              <MatchCard key={i} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
