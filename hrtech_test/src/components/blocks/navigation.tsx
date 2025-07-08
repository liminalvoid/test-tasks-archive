import { getUserData } from "@/app/actions/user"
import { getCapitalLetters } from "@/lib/utils"

import { Settings, EllipsisVertical } from "lucide-react"

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

import { CustomTabsTriggers } from "@/components/ui/custom-tabs-triggers"

interface NavigationProps {
  tabsContent: { title: string; value: string }[]
}

const Navigation = async ({ tabsContent }: NavigationProps) => {
  const { myProfile: user } = await getUserData()
  const capitalLetters = getCapitalLetters(user.name)

  return (
    <div className="flex bg-main justify-center">
      <div className="grid grid-cols-[auto_1fr] xl:grid-cols-[225px_1047px] grid-rows-[auto_auto] gap-x-[22px] xl:gap-x-[25px] gap-y-6 xl:gap-y-[34px] pt-6 xl:pt-0">
        <div className="ml-6 lg:ml-0 xl:m-0 max-w-[225px] xl:row-start-1 xl:row-end-3 place-self-center self-end">
          <Avatar className="min-w-[60px] min-h-[60px] xl:size-[150px] z-10">
            <AvatarImage src={user?.avatar} />
            <AvatarFallback>{capitalLetters}</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex justify-between items-start sm:items-center col-start-2 col-end-3  mr-6 lg:m-0 max-w-[1047px]">
          <h1 className="font-semibold text-xl text-wrap w-40 xl:text-[28px] sm:text-nowrap xl:pt-[67px]">
            {user?.name}
          </h1>

          <div className="sm:flex gap-4 hidden self-center xl:self-end">
            <Select>
              <SelectTrigger className="border-main-dark rounded-lg py-[5px] px-2 text-sm bg-main gap-2">
                <SelectValue placeholder="Request a Change" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="border-main-dark rounded-lg py-[5px] px-2 text-sm bg-main gap-2 w-auto">
                <Settings className="size-4" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            className="size-auto flex hover:bg-transparent sm:hidden"
            variant="ghost"
            size="icon"
          >
            <EllipsisVertical className="size-5" />
          </Button>
        </div>

        <div className="overflow-scroll no-scrollbar p-0 bg-main col-start-1 col-end-3 xl:col-start-2 xl:self-end">
          <CustomTabsTriggers tabs={tabsContent} />
        </div>
      </div>
    </div>
  )
}

export default Navigation
