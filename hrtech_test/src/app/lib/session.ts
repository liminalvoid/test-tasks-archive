import "server-only"

import { cookies } from "next/headers"

import { getToken, refreshToken } from "@/lib/db"

const hour = 60 * 60 * 1000
const day = 24 * hour

export async function createSession({
  email,
  password,
}: {
  email: string
  password: string
}) {
  const accessTokenExpirationDate = new Date(Date.now() + 20 * day)
  const refreshTokenExpirationDate = new Date(Date.now() + 10 * hour)

  const tokens = await getToken({ email, password })

  if (tokens) {
    const { access_token, refresh_token } = tokens

    cookies().set("access_token", access_token, {
      httpOnly: true,
      secure: true,
      expires: accessTokenExpirationDate,
      sameSite: "lax",
      path: "/",
    })

    cookies().set("refresh_token", refresh_token, {
      httpOnly: true,
      secure: true,
      expires: refreshTokenExpirationDate,
      sameSite: "lax",
      path: "/",
    })
  }
}

export async function deleteSession() {
  cookies().delete("access_token")
  cookies().delete("refresh_token")
}

export async function refreshSession() {
  const accessTokenExpirationDate = new Date(Date.now() + 20 * day)
  const refreshTokenExpirationDate = new Date(Date.now() + 10 * hour)

  const currentRefreshToken = cookies().get('refresh_token')?.value

  const tokens = await refreshToken(currentRefreshToken!)

  if (tokens) {
    const { access_token, refresh_token } = tokens

    cookies().set("access_token", access_token, {
      httpOnly: true,
      secure: true,
      expires: accessTokenExpirationDate,
      sameSite: "lax",
      path: "/",
    })

    cookies().set("refresh_token", refresh_token, {
      httpOnly: true,
      secure: true,
      expires: refreshTokenExpirationDate,
      sameSite: "lax",
      path: "/",
    })
  }
}
