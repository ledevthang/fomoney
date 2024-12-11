"use client";

import { useUser } from "@/store/user";
import { useRouter } from "next/navigation";

export default function GamePlayPage() {
  const user = useUser();
  const router = useRouter();

  // Redirect to home page if user is not logged in
  if (!user) {
    router.push("/");
    return null;
  }
  return (
    <div className="h-screen">
      <iframe
        src="https://fomoneyh5.vercel.app/"
        className="h-full w-full"
        allowFullScreen
        title="HTML5 Game"
      ></iframe>
    </div>
  );
}
