import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { LoginButton } from "../_components/AuthButtons";

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-center">Connexion</h1>
        <LoginButton />
      </div>
    </div>
  );
}
