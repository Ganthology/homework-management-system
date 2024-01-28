import Link from "next/link"

import { LoginForm } from "@/components/form/login-form"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-4">
      <h1 className="text-6xl font-bold">HMS</h1>
      <LoginForm />
      <Link href="/register">Register</Link>
    </main>
  )
}
