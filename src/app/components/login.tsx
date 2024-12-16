export default function LoginForm() {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        {/* Container */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          {/* Title */}
          <h2 className="text-2xl font-bold text-center mb-2">Login</h2>
          <p className="text-[#9096B2] text-sm text-center mb-12">
            Please login using account details below.
          </p>
  
          {/* Form */}
          <form>
            {/* Email Input */}
            <div className="mb-4">
             
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Password Input */}
            <div className="mb-4">
              
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Forgot Password */}
            <div className="text-left mb-6">
              <a
                href="#"
                className="text-sm text-[#9096B2]"
              >
                Forgot your password?
              </a>
            </div>
  
            {/* Sign-In Button */}
            <button
              type="submit"
              className="w-full bg-[#FB2E86] text-white py-2 rounded hover:bg-pink-600 transition duration-300"
            >
              Sign In
            </button>
          </form>
  
          {/* Create Account */}
          <div className="text-center mt-6 text-sm text-[#9096B2]">
            Do not have an Account?{" "}
            <a href="#" className="text-[#9096B2]">
              Create account
            </a>
          </div>
        </div>
      </div>
    );
  }
  