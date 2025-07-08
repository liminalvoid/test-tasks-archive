import { Cross, Mountain, FileClock } from "lucide-react"

import { Button } from "@/components/ui/button"

import OffsetSeparator from "../ui/offset-separator"
import TimeoffCard from "../ui/time-off-card"

const Timeoff = () => {
  return (
    <>
      <div className="flex flex-col p-6 xl:pb-6 xl:pt-[35px] gap-6 xl:gap-0 xl:px-[17px]">
        <div className="flex items-end justify-end lg:justify-between xl:pb-[13px]">
          <div className="hidden lg:flex items-center gap-3 text-xl">
            <FileClock className="size-4" />
            <h2>Time Off</h2>
          </div>

          <div className="flex flex-col gap-2 lg:flex-row lg:gap-[30px] items-end">
            <p className="text-sm">
              Accrual Level Start Date{" "}
              <span className="text-[#3758AB]">03/09-2020</span>
            </p>

            <Button className="border-black p-2 rounded-lg" variant="outline">
              Add Time Off Policy
            </Button>
          </div>
        </div>

        <OffsetSeparator />
      </div>

      <div className="flex gap-4 overflow-scroll lg:justify-center no-scrollbar">
        <div className="flex flex-col items-center ml-6 xl:ml-[17px]">
          <TimeoffCard>
            <h1 className="font-semibold text-xl text-nowrap w-40 text-center">
              Sick
            </h1>

            <div className="flex my-1 items-center gap-[10px]">
              <Cross className="size-8" />

              <p className="text-3xl font-semibold">3</p>
            </div>

            <p className="text-sm font-semibold">Days available</p>

            <p className="text-sm font-semibold text-[#7C96B1]">
              1 day scheduled
            </p>
          </TimeoffCard>

          <p className="font-medium text-[#7C96B1] text-sm mt-2">
            Sick Full-Time
          </p>
        </div>

        <div className="flex flex-col items-center">
          <TimeoffCard>
            <h1 className="font-semibold text-xl text-nowrap w-40 text-center">
              Annual Leave
            </h1>

            <div className="flex my-1 items-center gap-[10px]">
              <Mountain className="size-8" />

              <p className="text-3xl font-semibold">10.3</p>
            </div>

            <p className="text-sm font-semibold">Days available</p>
          </TimeoffCard>

          <p className="font-medium text-[#7C96B1] text-sm mt-2">
            Holiday Full-Time
          </p>
        </div>

        <div className="flex flex-col items-center mr-6 xl:mr-[17px]">
          <TimeoffCard>
            <h1 className="font-semibold text-xl text-nowrap w-40 text-center">
              Comp/in Lieu Time
            </h1>

            <div className="flex my-1 items-center gap-[10px]">
              <FileClock className="size-8" />

              <p className="text-3xl font-semibold">0</p>
            </div>

            <p className="text-sm font-semibold">Human Used (YTD)</p>
          </TimeoffCard>

          <p className="font-medium text-[#7C96B1] text-sm mt-2">
            Comp/in Lieu Time Flexible Policy
          </p>
        </div>
      </div>
    </>
  )
}

export default Timeoff
