import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import AuthForm from "@/components/auth/auth-form";

export default function AuthPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    router.replace("/");
  }

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return <AuthForm />;
}
