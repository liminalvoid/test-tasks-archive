import "server-only"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { cache } from "react"

import { getUser } from "@/lib/db"

export const verifySession = cache(async () => {
  const accessToken = cookies().get("access_token")?.value
  const user = await getUser(accessToken!)

  if (!user) {
    redirect("/login")
  }

  return { isAuth: true, user }
})
