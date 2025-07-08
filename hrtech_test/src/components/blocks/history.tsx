import { History as HistoryIcon } from "lucide-react"

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select"

import CustomTable from "../ui/custom-table"

const History = () => {
  return (
    <div className="pb-8">
      <div className="px-6 xl:px-[17px]">
        <div className="flex items-center gap-2">
          <HistoryIcon className="size-4" />

          <h3 className="text-sm">History</h3>
        </div>

        <div className="pt-4 pb-6 flex flex-col gap-4">
          <div className="flex">
            <Select>
              <SelectTrigger className="w-full border-[#7C96B1] rounded-lg py-[5px] pl-2 text-base bg-[#FAFBFC]">
                <SelectValue placeholder="Sick" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-6">
            <Select>
              <SelectTrigger className="w-[112px] border-[#7C96B1] rounded-lg py-[5px] pl-2 text-base bg-[#FAFBFC]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="border-[#7C96B1] rounded-lg py-[5px] pl-2 text-base bg-[#FAFBFC]">
                <SelectValue placeholder="Balance History" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <CustomTable />
    </div>
  )
}

export default History
