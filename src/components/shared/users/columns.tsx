"use client"

import type { ColumnDef } from "@tanstack/react-table"
import type { UserEntity } from "@/interfaces"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columnsUser: ColumnDef<UserEntity>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  }
]