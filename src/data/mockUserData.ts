import type { GetAllUserResponse } from "@/interfaces"
import { RoleEnum } from "@/enums"

export const mockUserData:GetAllUserResponse = {
  "message": "Users retrieved successfully",
  "statusCode": 200,
  "timestamp": "2025-08-28T06:05:03.588Z",
  "data": {
    "entities": [
      {
        "id": "426c4805-30d9-4513-8e32-f3d5c4e7ef8e",
        "name": "Citra",
        "email": "citra@email.com",
        "role": RoleEnum.USER
      },
      {
        "id": "34065ac7-9108-4fe1-a825-d51fda910289",
        "name": "Rama",
        "email": "rama@email.com",
        "role": RoleEnum.USER
      },
      {
        "id": "0eac5460-ee8a-4dba-ae01-0c99c515910c",
        "name": "Yuni",
        "email": "yuni@email.com",
        "role": RoleEnum.USER
      },
      {
        "id": "5128d5c1-9224-467c-abb5-8b60beab2df5",
        "name": "Dani",
        "email": "dani@email.com",
        "role": RoleEnum.USER
      },
      {
        "id": "6135e544-02f9-4ad9-9484-de29b8ea560d",
        "name": "Novi",
        "email": "novi@email.com",
        "role": RoleEnum.USER
      },
      {
        "id": "a8b858e2-21ef-46c3-91d3-b3a3e275b91c",
        "name": "Hadi",
        "email": "hadi@email.com",
        "role": RoleEnum.USER
      },
      {
        "id": "8495155c-d0d0-4363-8bb9-c6eb3d1eb5ad",
        "name": "Tika",
        "email": "tika@email.com",
        "role": RoleEnum.USER
      },
      {
        "id": "c06fc0b6-cbce-47da-83af-9953a77eea57",
        "name": "Fajar",
        "email": "fajar@email.com",
        "role": RoleEnum.USER
      },
      {
        "id": "06f07f38-7e9a-4bc9-89ef-8c6d9da57e4a",
        "name": "Nina",
        "email": "nina@email.com",
        "role": RoleEnum.USER
      },
      {
        "id": "a84d7987-ad77-4e4f-8b7e-280b6578ab27",
        "name": "Rudi",
        "email": "rudi@email.com",
        "role": RoleEnum.USER
      },
      {
        "id": "caf902c4-e33c-48a5-9d62-938ac3a9b079",
        "name": "Maya",
        "email": "maya@email.com",
        "role": RoleEnum.USER
      },
      {
        "id": "5b0b910c-6b97-439c-a8f6-311ebf8cc30a",
        "name": "Eko",
        "email": "eko@email.com",
        "role": RoleEnum.USER
      },
      {
        "id": "be2cad93-2e31-4066-b038-c6b6bde3b5ba",
        "name": "Lina",
        "email": "lina@email.com",
        "role": RoleEnum.USER
      },
      {
        "id": "cd9c09e4-d7bc-4c09-95e2-2dbcc8d41812",
        "name": "Agus",
        "email": "agus@email.com",
        "role": RoleEnum.USER
      },
      {
        "id": "27502e6a-686d-4cf2-997c-692e3f8b8e34",
        "name": "Dewi",
        "email": "dewi@email.com",
        "role": RoleEnum.USER
      },
      {
        "id": "66d79187-f918-4519-907c-17b6c293afc0",
        "name": "Rina",
        "email": "rina@email.com",
        "role": RoleEnum.USER
      },
      {
        "id": "da0fae04-b7b2-4eca-b83b-6a4455b2aeff",
        "name": "Budi",
        "email": "budi@email.com",
        "role": RoleEnum.USER
      },
      {
        "id": "81709ceb-1cb0-4a15-b4e0-e412cdca7eef",
        "name": "Siti",
        "email": "siti@email.com",
        "role": RoleEnum.USER
      },
      {
        "id": "5b02e7f4-c478-4261-adff-ee4b01785e3b",
        "name": "Udin",
        "email": "udin@email.com",
        "role": RoleEnum.USER
      },
      {
        "id": "d2746f0a-4632-4c2e-acbc-a7fad4691b32",
        "name": "ujang",
        "email": "ujang@email.com",
        "role": RoleEnum.USER
      },
      {
        "id": "f7bd570c-13e7-4f7c-b0ec-a42303ee4a16",
        "name": "admin",
        "email": "admin@email.com",
        "role": RoleEnum.ADMIN
      },
      {
        "id": "721b9611-5913-4910-bb31-6c1860891c20",
        "name": "User",
        "email": "user@email.com",
        "role": RoleEnum.USER
      }
    ],
    "meta": {
      "page": 1,
      "limit": 10,
      "totalItems": 22,
      "totalPages": 3
    }
  }
}
