import { Header } from "@/components/ui/header"

import { Tabs, TabsContent } from "@/components/ui/tabs"

import UpcomingTimeoff from "@/components/blocks/upcoming-time-off"
import History from "@/components/blocks/history"
import Timeoff from "@/components/blocks/time-off"
import ProfileDetails from "@/components/blocks/profile-details"
import Navigation from "@/components/blocks/navigation"


const tabsTriggersContent = [
  {
    title: "Personal",
    value: "personal",
  },
  {
    title: "Job",
    value: "job",
  },
  {
    title: "Time Off",
    value: "time-off",
  },
  {
    title: "Emergency",
    value: "emergency",
  },
  {
    title: "Documents",
    value: "documents",
  },
  {
    title: "Notes",
    value: "notes",
  },
  {
    title: "Benefits",
    value: "benefits",
  },
  {
    title: "Training",
    value: "training",
  },
  {
    title: "Assets",
    value: "assets",
  },
  {
    title: "More",
    value: "more",
  },
]

export default function Home() {
  const tabsContent = tabsTriggersContent.map(({ value }, index) => {
    if (value === "time-off") {
      return ""
    }

    return (
      <TabsContent
        key={index}
        value={value}
        className="bg-main-white mt-0 xl:rounded-b-2xl max-w-[1047px] w-full"
      >
        <div className="grid place-content-center size-full max-w-[1047px] h-screen">
          <h1 className="text-2xl">There is nothing here</h1>
        </div>
      </TabsContent>
    )
  })

  return (
    <div className="flex min-h-screen w-full flex-col bg-main-light">
      <Header />

      <Tabs defaultValue="time-off" className="lg:w-full p-0">
        <Navigation
          tabsContent={tabsTriggersContent}
        />

        <div className="flex lg:w-full lg:justify-center xl:pb-4">
          <div className="flex gap-[25px] max-w-[1297px] w-full justify-center">
            <ProfileDetails />

            {tabsContent}

            <TabsContent
              value="time-off"
              className="bg-main-white mt-0 xl:rounded-b-2xl max-w-[1047px] w-full"
            >
              <Timeoff />
              <UpcomingTimeoff />
              <History />
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  )
}
