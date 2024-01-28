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

export const useHomework = ({}: useAuthProps = {}) => {
  const {
    data: homework,
    error: homeworkError,
    mutate: homeworkMutate,
  } = useSWR("/api/homework", () =>
    axios
      .get("/api/homework")
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error
      })
  )

  console.log("homework", homework)

  const csrf = () => axios.get("/sanctum/csrf-cookie")

  const create = async ({ setErrors, ...props }: registerProps) => {}

  const update = async ({ setErrors, ...props }: registerProps) => {}

  const addStudent = async ({ setErrors, ...props }: registerProps) => {}

  return {
    homework,
    create,
    update,
    addStudent,
  }
}
