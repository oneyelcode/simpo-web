import { Input } from '@/app/components/form/InputField'

const Login = () => {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Welcome to Aceternity
        </h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
          Login to aceternity if you can because we don&apos;t have a login flow yet
        </p>

        <form className="my-8">
          <div className="mb-4 flex flex-col space-y-2">
            <label className='"text-sm font-medium text-black'>Email</label>
            <Input type="email" className="w-96" />
          </div>
          <div className="mb-4 flex flex-col space-y-2">
            <label className='"text-sm font-medium text-black'>Password</label>
            <Input type="password" className="w-96" />
          </div>
          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign up &rarr;
          </button>
        </form>
      </div>
    </main>
  )
}

export default Login
