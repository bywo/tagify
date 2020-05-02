import { useRouter } from "next/router";
import Login from "../components/Login";

export default function LoginPage() {
  const { query } = useRouter();
  return <Login redirectTo={query.redirectTo} />;
}
