import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ArrowRight, ShoppingBasket } from "lucide-react";

export default function OtpPage() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const refs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) refs[index + 1].current?.focus();
  };

  const handleVerify = () => {
    if (otp.every((d) => d !== "")) navigate("/location");
  };

  return (
    <div className="min-h-screen flex">
      {/* Desktop Left Panel */}
      <div className="hidden md:flex md:w-1/2 bg-green-500 flex-col items-center justify-center p-12">
        <ShoppingBasket size={80} className="text-white mb-6" />
        <h1 className="text-white text-5xl font-bold tracking-wide mb-3">nectar</h1>
        <p className="text-green-100 text-lg text-center">
          Enter the code we sent to your phone
        </p>
      </div>

      {/* Right / Mobile Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 md:px-16 bg-white">
        <div className="max-w-md w-full mx-auto">
          <button
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="text-gray-500 mb-8 w-fit hover:text-gray-700 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">Enter your 4-digit code</h1>
          <p className="text-gray-500 text-sm mb-6">We sent a verification code to your phone</p>

          <label className="text-xs text-gray-500 mb-3 block">Code</label>
          <div className="flex gap-4 mb-8">
            {otp.map((digit, i) => (
              <input
                key={i}
                ref={refs[i]}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                aria-label={`OTP digit ${i + 1}`}
                className="w-14 h-14 border-b-2 border-gray-300 text-center text-2xl font-bold outline-none focus:border-green-500 transition-colors"
              />
            ))}
          </div>

          <button className="text-green-500 font-medium mb-10 hover:text-green-600 transition-colors text-sm">
            Resend Code
          </button>

          <div className="flex justify-end">
            <button
              onClick={handleVerify}
              aria-label="Verify OTP"
              className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
