"use server"

import { cookies } from "next/headers"

import { getUser } from "@/lib/db"

export async function getUserData() {
  const accessToken = cookies().get("access_token")?.value
  const user = await getUser(accessToken!)

  return user
}
