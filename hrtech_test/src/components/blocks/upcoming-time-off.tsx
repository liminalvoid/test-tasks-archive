import { Clock5, Cross, PiggyBank } from "lucide-react"

import OffsetSeparator from "../ui/offset-separator"

const UpcomingTimeoff = () => {
  return (
    <div className="p-6 xl:px-[17px]">
      <div className="flex items-center gap-2 pb-4">
        <Clock5 className="size-4" />

        <h3 className="text-sm">Upcoming Time Off</h3>
      </div>

      <div className="flex flex-col gap-6">
        <OffsetSeparator />

        <div className="flex items-center gap-[14px]">
          <Cross className="size-[30px]" />

          <div className="">
            <p>Jan 27</p>

            <p className="inline-flex items-center gap-1">
              <span className="text-xl">&#x2022;</span> 1 day of Sick
            </p>
          </div>
        </div>

        <OffsetSeparator />

        <div className="flex items-center gap-[14px]">
          <PiggyBank className="size-[30px]" />

          <div className="">
            <p>Jul 4</p>

            <p>Independence Day</p>
          </div>
        </div>

        <OffsetSeparator />
      </div>
    </div>
  )
}

export default UpcomingTimeoff
