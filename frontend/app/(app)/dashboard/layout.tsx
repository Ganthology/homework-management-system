import { Navbar } from "@/components/navigation/navbar"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
