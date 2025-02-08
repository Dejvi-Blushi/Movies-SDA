import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
} from 'react-router-dom';

function AuthForm() {
  const data = useActionData();
  const navigation = useNavigation();

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';
  const isSubmitting = navigation.state === 'submitting';

  return (
    <div className="flex items-center justify-center min-h-screen bg-[rgb(8, 15, 40)]">
      <div className="w-full max-w-md p-6 bg-[rgb(20,26,50)] rounded-lg shadow-md">
        <Form method="post" className="space-y-6">
          <h1 className="text-2xl font-bold text-center text-gray-300">
            {isLogin ? 'Log in' : 'Create a new user'}
          </h1>
          {data && data.errors && (
            <ul className="list-disc list-inside text-red-500">
              {Object.values(data.errors).map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          )}
          {data && data.message && (
            <p className="text-center text-green-500">{data.message}</p>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 mt-1  bg-[rgb(15,21,45)] border border-blue-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-400"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              required
              className="w-full px-4 py-2 mt-1 border bg-[rgb(15,21,45)] border-blue-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center justify-between">
            <Link
              to={`?mode=${isLogin ? 'signup' : 'login'}`}
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              {isLogin ? 'Create new user' : 'Login'}
            </Link>
            <button
              disabled={isSubmitting}
              className={`px-4 py-2 font-medium text-white rounded-md ${isSubmitting
                ? 'bg-blue-600 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
                }`}
            >
              {isSubmitting ? 'Submitting...' : 'Save'}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AuthForm;