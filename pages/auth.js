import AuthForm from "../components/auth-section/auth-form";
import AuthImage from "../components/auth-section/auth-image";
export default function Auth() {
  return (
    <div className="min-h-screen bg-white flex">
      <AuthForm />
      <AuthImage />
    </div>
  );
}
