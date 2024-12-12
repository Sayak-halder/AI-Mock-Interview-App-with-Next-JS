"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Header } from "./dashboard/_components/Header";
import AddNewInterview from "./dashboard/_components/AddNewInterview";
import InterviewList from "./dashboard/_components/InterviewList";

export default function Home() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !user) {
      // Redirect user to sign-in if not authenticated
      router.push("/auth/sign-in");
    }
  }, [user, isLoaded, router]);

  if (!isLoaded) {
    return <div>Loading...</div>; // Show loading indicator until user data is fetched
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Welcome to the AI Mock Interview App</h1>
        <AddNewInterview />
        <InterviewList />
      </div>
    </div>
  );
}
