"use client"

import { useTransition } from "react"

import { logout } from "@/app/actions/auth"

import { LogOut, User, Users, ReceiptText, TicketMinus } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"

interface CustomDropdownProps {
  avatarFallback: string
  user: User
}

const CustomDropdown = ({
  avatarFallback,
  user: { avatar, name },
}: CustomDropdownProps) => {
  const [_, startTransition] = useTransition()
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{name}&apos;s Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex gap-1 items-center">
          <User className="size-[14px]" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-1 items-center">
          <ReceiptText className="size-[14px]" />
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-1 items-center">
          <Users className="size-[14px]" />
          Team
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-1 items-center">
          <TicketMinus className="size-[14px]" />
          Subscription
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-red-500 flex gap-1 items-center w-full"
          asChild
        >
          <button
            onClick={() => {
              startTransition(async () => await logout())
            }}
          >
            <LogOut className="size-[14px]" />
            Logout
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default CustomDropdown
