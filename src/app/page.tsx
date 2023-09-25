import TypewriterTitle from "@/components/TypewriterTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gradient-to-r min-h-screen from-rose-100 to-blue-200">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-semibold text-7xl text-center">
          AI <span className="text-blue-600 font-bold">NoteBook</span>.
        </h1>
        <div className="mt-4">
          <h2 className="font-semibold text-3xl text-center text-slate-700">
            <TypewriterTitle />
          </h2>
          <div className="mt-8"></div>
          <div className="flex justify-center">
            {" "}
            <Link href="/dashboard">
              <Button className="bg-blue-600">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
