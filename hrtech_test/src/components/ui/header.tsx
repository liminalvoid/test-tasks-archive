import Link from "next/link"

import { getUserData } from "@/app/actions/user"
import { getCapitalLetters } from "@/lib/utils"

import {
  Search,
  Menu,
  Settings,
  CircleHelp,
  Bell,
} from "lucide-react"

import { Input } from "./input"
import { Sheet, SheetTrigger, SheetContent } from "./sheet"
import { Button } from "./button"
import { Tabs, TabsContent } from "./tabs"

import { CustomTabsTriggers } from "./custom-tabs-triggers"
import Logo from "./logo"
import CustomDropdown from "./custom-dropdown"

const links = [
  {
    title: "Home",
    value: "home",
  },
  {
    title: "My Info",
    value: "my-info",
  },
  {
    title: "People",
    value: "people",
  },
  {
    title: "Hiring",
    value: "hiring",
  },
  {
    title: "Reports",
    value: "reports",
  },
  {
    title: "Files",
    value: "files",
  },
]

const Header = async () => {
  const { myProfile: user } = await getUserData()
  const capitalLetters = getCapitalLetters(user.name)

  const tabs = links.map(({ value }, index) => (
    <TabsContent value={value} className="hidden" key={index}></TabsContent>
  ))
  const navLinks = links.map(({ title }, index) => (
    <Link
      href="#"
      className="text-muted-foreground hover:text-foreground"
      key={index}
    >
      {title}
    </Link>
  ))

  return (
    <header className="sticky top-0 flex items-center justify-between bg-background px-6 py-3 xl:py-0 z-20">
      <Logo />

      <Tabs defaultValue="my-info" className="hidden xl:block xl:pt-8">
        <CustomTabsTriggers tabs={links} variant="white" size="header" />
        {tabs}
      </Tabs>

      <form className="flex max-w-[395px] md:flex-grow xl:pt-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3.5 top-3 size-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search"
            className="pl-8 border-black rounded-xl sm:w-full h-auto w-1"
          />
        </div>
      </form>

      <div className="flex gap-1.5">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="shrink-0 xl:hidden">
              <Menu className="size-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              {navLinks}

              <Link
                href="#"
                className="hover:text-foreground flex items-center gap-2"
              >
                Settings
              </Link>

              <Link
                href="#"
                className="hover:text-foreground flex items-center gap-2"
              >
                Help
              </Link>

              <Link
                href="#"
                className="hover:text-foreground flex items-center gap-2"
              >
                Notifications
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-6 xl:pt-8">
          <div className="hidden xl:flex gap-6">
            <Button
              className="size-auto flex hover:bg-white"
              variant="ghost"
              size="icon"
            >
              <Settings className="size-6" />
            </Button>

            <Button
              className="size-auto flex hover:bg-white"
              variant="ghost"
              size="icon"
            >
              <CircleHelp className="size-6" />
            </Button>

            <Button
              className="size-auto flex hover:bg-white"
              variant="ghost"
              size="icon"
            >
              <Bell className="size-6" />
            </Button>
          </div>

          <CustomDropdown
            avatarFallback={capitalLetters}
            user={user}
          />
        </div>
      </div>
    </header>
  )
}

export { Header }
