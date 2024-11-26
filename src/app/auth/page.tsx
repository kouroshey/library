import Image from "next/image";
import { cn } from "@/lib/utils";
import loginImg from "../../../public/images/login.png";
import LoginForm from "./_components/LoginForm";

const LoginPage = () => {
  return (
    <main
      className={cn(
        "flex flex-col md:flex-row items-center w-full h-full px-4 lg:px-16 md:px-8md:py-8",
        "w-full h-full bg-[#F4F4F4]",
      )}
    >
      <div
        className={cn(
          "w-1/2 h-full flex items-center justify-center select-none",
          "hidden md:flex",
        )}
      >
        <Image src={loginImg} alt="login" width={400} height={400} />
      </div>

      <div className="flex w-full md:w-1/2 h-full items-center justify-center">
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
