"use client"

import { useHomework } from "@/hooks/homework"
import { HomeworkTable } from "@/app/(app)/dashboard/homework-table"

import { columns } from "./homework-columns"

export default function Dashboard() {
  const { homework } = useHomework()

  return (
    <div>{homework && <HomeworkTable columns={columns} data={homework} />}</div>
  )
}
