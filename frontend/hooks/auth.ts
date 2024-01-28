import { useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import useSWR from "swr"

import axios from "@/lib/axios"

interface useAuthProps {
  middleware?: "guest" | "auth"
  redirectIfAuthenticated?: string
}

interface registerProps {
  setErrors: React.Dispatch<React.SetStateAction<string[] | null>>
  name: string
  email: string
  password: string
  password_confirmation: string
  role: string
}

interface loginProps {
  setErrors: React.Dispatch<React.SetStateAction<string[] | null>>
  setStatus: React.Dispatch<React.SetStateAction<string | null>>
  email: string
  password: string
  remember: boolean
}

interface forgotPasswordProps {
  setErrors: React.Dispatch<React.SetStateAction<string[] | null>>
  setStatus: React.Dispatch<React.SetStateAction<string | null>>
  email: string
}

interface resetPasswordProps extends loginProps {}

export const useAuth = ({
  middleware,
  redirectIfAuthenticated,
}: useAuthProps = {}) => {
  const router = useRouter()
  const params = useParams()

  const {
    data: user,
    error,
    mutate,
  } = useSWR("/api/user", () =>
    axios
      .get("/api/user")
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error

        router.push("/verify-email")
      })
  )

  const csrf = () => axios.get("/sanctum/csrf-cookie")

  const register = async ({ setErrors, ...props }: registerProps) => {
    await csrf()

    setErrors([])

    axios
      .post("/register", props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error

        setErrors(error.response.data.errors)
      })
  }

  const login = async ({ setErrors, setStatus, ...props }: loginProps) => {
    await csrf()

    setErrors([])
    setStatus(null)

    axios
      .post("/login", props)
      .then(() => mutate())
      .catch((error: any) => {
        if (error.response.status !== 422) throw error

        setErrors(error.response.data.errors)
      })
  }

  const forgotPassword = async ({
    setErrors,
    setStatus,
    email,
  }: forgotPasswordProps) => {
    await csrf()

    setErrors([])
    setStatus(null)

    axios
      .post("/forgot-password", { email })
      .then((response) => setStatus(response.data.status))
      .catch((error) => {
        if (error.response.status !== 422) throw error

        setErrors(error.response.data.errors)
      })
  }

  const resetPassword = async ({
    setErrors,
    setStatus,
    ...props
  }: resetPasswordProps) => {
    await csrf()

    setErrors([])
    setStatus(null)

    axios
      .post("/reset-password", { token: params.token, ...props })
      .then((response) =>
        router.push("/login?reset=" + btoa(response.data.status))
      )
      .catch((error) => {
        if (error.response.status !== 422) throw error

        setErrors(error.response.data.errors)
      })
  }

  const resendEmailVerification = ({
    setStatus,
  }: {
    setStatus: React.Dispatch<React.SetStateAction<string | null>>
  }) => {
    axios
      .post("/email/verification-notification")
      .then((response) => setStatus(response.data.status))
  }

  const logout = async () => {
    if (!error) {
      await axios.post("/logout").then(() => mutate())
    }

    window.location.pathname = "/login"
  }

  useEffect(() => {
    if (middleware === "guest" && redirectIfAuthenticated && user)
      router.push(redirectIfAuthenticated)
    if (
      window.location.pathname === "/verify-email" &&
      redirectIfAuthenticated &&
      user?.email_verified_at
    )
      router.push(redirectIfAuthenticated)
    if (middleware === "auth" && error) logout()
  }, [user, error])

  return {
    user,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout,
  }
}
