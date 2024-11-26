import Image from "next/image";
import { cn } from "@/lib/utils";
import loginImg from "../../../public/images/login.png";
import LoginForm from "./_components/LoginForm";

const LoginPage = () => {
  return (
    <main
      className={cn(
        "flex items-center w-full h-full px-16 py-8",
        "w-full h-full bg-[#F4F4F4]",
      )}
    >
      {/* login form */}
      <div className="flex w-full md:w-1/2 h-full items-center justify-center">
        <LoginForm />
      </div>
      {/* image */}
      <div
        className={cn(
          "relative w-1/2 h-full flex items-center justify-center select-none",
          "hidden md:flex",
        )}
      >
        <Image src={loginImg} alt="ورود" width={500} height={500} />
      </div>
    </main>
  );
};

export default LoginPage;
