export default function Login() {
  return (
    <div className="mx-auto max-w-sm rounded-xl border border-concrete-200 bg-white p-6">
      <h1 className="font-display text-xl font-semibold text-blueprint-900">Login</h1>
      <form className="mt-4 flex flex-col gap-3">
        <input placeholder="Mobile number" className="rounded-lg border border-concrete-300 px-4 py-2 outline-none focus:border-blueprint-400" />
        <button type="button" className="rounded-full bg-blueprint-700 py-2 font-medium text-white hover:bg-blueprint-600">
          Send OTP
        </button>
      </form>
    </div>
  )
}
