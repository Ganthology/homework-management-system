"use client"

import { LogOut } from "lucide-react"

import { useAuth } from "@/hooks/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const Navbar = () => {
  const { user, logout } = useAuth({
    middleware: "guest",
  })

  return (
    <nav className="flex py-4 items-center justify-between px-6 border-b-2 border-slate-200">
      <h1 className="font-bold text-3xl">HMS</h1>
      <div className="flex items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>{user?.name}</AvatarFallback>
        </Avatar>
        <div className="ml-2">
          <p className="text-base font-medium">{user?.name}</p>
          <p className="text-xs font-medium">{user?.role}</p>
        </div>
        <LogOut className="size-5 ml-4 hover:cursor-pointer" onClick={logout} />
      </div>
    </nav>
  )
}
