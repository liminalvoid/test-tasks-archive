"use server"

import { redirect } from "next/navigation"

import { LoginFormSchema } from "@/lib/definitions"
import { createSession, deleteSession, refreshSession } from "@/app/lib/session"
import { verifySession } from "../lib/dal"

export async function login(formData: FormData) {

  const validateFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  })

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    }
  }

  const credentials = validateFields.data

  await createSession(credentials)

  if (await verifySession()) {
    redirect("/")
  }
}

export async function logout() {
  await deleteSession()

  redirect("/login")
}

export async function refresh() {
  await refreshSession() 
}
