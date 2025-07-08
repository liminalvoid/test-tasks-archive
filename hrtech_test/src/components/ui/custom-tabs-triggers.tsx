import { cva, VariantProps } from "class-variance-authority"

import { TabsList, TabsTrigger } from "./tabs"
import { cn } from "@/lib/utils"

const tabsListVariants = cva(
  "flex rounded-none p-0 h-auto justify-between gap-4",
  {
    variants: {
      variant: {
        lightBlue: "bg-[#DAE6F2]",
        white: "bg-white ",
      },
      size: {
        default: "",
        header: "",
      },
    },
    defaultVariants: {
      variant: "lightBlue",
      size: "default",
    },
  }
)

const tabsTriggerVariants = cva(
  "py-4 rounded-t-lg rounded-b-none data-[state=active]:shadow-none",
  {
    variants: {
      variant: {
        lightBlue: "data-[state=active]:bg-white",
        white: "data-[state=active]:bg-[#DAE6F2] font-normal",
      },
      size: {
        default: "min-w-[90px] w-[90px]",
        header: "p-4",
      },
    },
    defaultVariants: {
      variant: "lightBlue",
      size: "default",
    },
  }
)

interface CustomTabsProps extends VariantProps<typeof tabsListVariants> {
  tabs: { title: string; value: string }[]
}

const CustomTabsTriggers = ({ tabs, variant, size }: CustomTabsProps) => {
  const tabsTriggers = tabs.map(({ title, value }, index) => (
    <TabsTrigger
      className={cn(tabsTriggerVariants({ variant, size }))}
      key={index}
      value={value}
    >
      {title}
    </TabsTrigger>
  ))

  return (
    <TabsList className={cn(tabsListVariants({ variant, size }))}>
      {tabsTriggers}
    </TabsList>
  )
}

export { CustomTabsTriggers }
