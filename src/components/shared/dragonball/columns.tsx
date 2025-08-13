"use client"

import type { ColumnDef } from "@tanstack/react-table"
import type { DragonballItem } from "@/interfaces"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<DragonballItem>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "ki",
    header: "Ki",
  },
  {
    accessorKey: "race",
    header: "Race",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      return <img src={row.getValue('image')} alt={row.original.name} className="w-20 object-cover" />;
    },
  },
]