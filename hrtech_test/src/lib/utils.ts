import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCapitalLetters(fullName: string) {
  const capitalLetters = "".concat(fullName.split(" ").map((part) => part[0]).join())

  return capitalLetters
}
