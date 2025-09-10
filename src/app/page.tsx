const page = () => {
  return (
    <main className="min-h-[60vh] flex items-center justify-center p-6">
      <div className="max-w-2xl text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Welcome</h1>
        <p className="text-white/70">Explore the product documentation with real-world, impactful guidance. Fully responsive on mobile and desktop.</p>
        <a href="/docs" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/15 bg-white/5 hover:bg-white/10">Open Docs</a>
      </div>
    </main>
  )
}

export default page