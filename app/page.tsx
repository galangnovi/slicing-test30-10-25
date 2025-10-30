'use client'
import Navbar from "@/components/navbar";
import SideBar from "@/components/sidebar";
import { navigate } from "next/dist/client/components/segment-cache";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard"); // redirect ke dashboard
  }, [router]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      ...redirecting to Dashboard
    </div>
  );
}
