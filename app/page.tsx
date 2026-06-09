import { redirect } from "next/navigation";

export default function Home() {
  // Redirecionando a home temporariamente para o login do portal
  redirect("/login");
}
