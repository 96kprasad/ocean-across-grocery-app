import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, ShoppingBasket } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import TextInput from '../../components/common/input/TextInput';
import { isValidForm } from '../../utils/validation/CommonValidator';
import { LoginValidationRules } from '../../utils/validation/AllValidationRules';

export default function LoginPage() {
  type FormErrors = {
    name?: string;
    email?: string;
    password?: string;
  };

  const navigate = useNavigate();
  const { login, isLoading } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [validState, setValidState] = useState<{
    isValid: boolean;
    error: FormErrors;
  }>({
    isValid: true,
    error: {},
  });

  const handleLogin = async () => {
    let isValid = isValidateAllFields();
    if (!isValid) return;
    await login(email, password);
    navigate('/home');
  };

  const isValidateAllFields = () => {
    const newValidState = isValidForm(
      { email, password },
      LoginValidationRules,
      validState
    );
    console.log('Validation State:', newValidState);
    setValidState(newValidState);
    return newValidState.isValid;
  };

  return (
    <div className="min-h-screen flex">
      {/* Desktop Left Panel */}
      <div className="hidden md:flex md:w-1/2 bg-green-500 flex-col items-center justify-center p-12">
        <ShoppingBasket size={80} className="text-white mb-6" />
        <h1 className="text-white text-5xl font-bold tracking-wide mb-3">
          nectar
        </h1>
        <p className="text-green-100 text-lg text-center">
          Get your groceries delivered in as fast as one hour
        </p>
      </div>

      {/* Right / Mobile Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-16 md:px-16 bg-white">
        <div className="max-w-md w-full mx-auto">
          <div className="flex justify-center mb-8 md:hidden">
            <ShoppingBasket size={56} className="text-green-500" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-1">Login</h1>
          <p className="text-gray-500 text-sm mb-8">
            Enter your email and password
          </p>

          <div className="space-y-6 mb-6">
            <TextInput
              label="Email"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="imshuvo97@gmail.com"
              error={validState.error?.email}
            />
            <TextInput
              label="Password"
              type={showPass ? 'text' : 'password'}
              value={password}
              onChange={setPassword}
              error={validState.error?.password}
              rightElement={
                <button
                  onClick={() => setShowPass(!showPass)}
                  aria-label={showPass ? 'Hide password' : 'Show password'}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              }
            />
          </div>

          <div className="flex justify-end mb-8">
            <button className="text-gray-500 text-sm hover:text-green-500 transition-colors">
              Forgot Password?
            </button>
          </div>

          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full bg-green-500 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-green-600 transition-colors disabled:opacity-70 mb-4"
          >
            {isLoading ? 'Logging in...' : 'Log In'}
          </button>

          <p className="text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="text-green-500 font-medium hover:text-green-600"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
