export const metadata = {
  title: "Login",
  description: "Login Page Generated by Me",
};

import Login from "@/components/Login";
import JWT from "@/components/JWT";

export default function LoginPage() {
  return (
    <div>
      <Login />
      <JWT />
    </div>
  );
}