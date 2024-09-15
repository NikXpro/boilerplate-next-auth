import { auth } from "@/lib/auth";
import { LoginButton, LogoutButton } from "./AuthButtons";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <h1>
        {session?.user
          ? `Logged in as ${session.user.name} with ${session.user.email}`
          : "Not logged in"}
      </h1>
      <div>{session?.user ? <LogoutButton /> : <LoginButton />}</div>
    </div>
  );
}
