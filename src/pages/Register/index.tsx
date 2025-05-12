import { RegisterForm } from "@/components/register-form"
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="bg-cover bg-center h-screen p-5 sm:p-0" style={{ backgroundImage: `url(${'/assets/img/bg-2.jpg'})` }}>
        <div className="flex items-center justify-center h-full bg-black/40">
            <div className="flex w-full max-w-sm flex-col gap-2 bg-[#181A1CD6]/80 rounded-lg">
                <div className="text-center">
                    <div className="flex justify-center items-center">
                        <Link to="/">
                            <img src={'/assets/img/logo-chill.webp'} alt="Chill logo" className="h-15 sm:h-20" />
                        </Link>
                    </div>
                </div>
                <RegisterForm />
            </div>
        </div>
    </div>
  )
}
