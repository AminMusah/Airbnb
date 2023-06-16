"use client";
import { useSession, signIn, signOut } from "next-auth/react";

function dashboard() {
  const session = useSession();
  console.log(session);
  return <div>dashboard</div>;
}

export default dashboard;
