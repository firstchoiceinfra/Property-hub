export default function PageLoader() {
  return (
    <div className="flex h-[60vh] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-blueprint-200 border-t-brick-500" />
        <p className="text-sm text-concrete-600">Loading…</p>
      </div>
    </div>
  )
}
