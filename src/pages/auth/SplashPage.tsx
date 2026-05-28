import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingBasket } from "lucide-react";

export default function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate("/onboarding"), 2000);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-green-500 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <ShoppingBasket size={64} className="text-white" />
        <h1 className="text-white text-4xl font-bold tracking-wide">nectar</h1>
        <p className="text-green-100 text-sm tracking-widest">online grocerlet</p>
      </div>
    </div>
  );
}
