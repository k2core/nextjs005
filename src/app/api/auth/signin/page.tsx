import { getServerSession } from "next-auth";
import { authOptions } from "../[...nextauth]/route";
import { redirect } from "next/navigation";
import { getProviders } from "next-auth/react";
import SignIn from "@/components/SignIn";

export default async function SignPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  const providers = (await getProviders()) ?? {};

  return <SignIn providers={providers} />;
}
