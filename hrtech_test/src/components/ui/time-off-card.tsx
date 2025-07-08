import { Card } from "./card"

interface TimeoffCardProps {
  children: React.ReactNode[]
}

export const TimeoffCard = ({ children }: TimeoffCardProps) => {
  return (
    <Card className="flex flex-col items-center bg-[#F0F3F8] shadow-none border-none py-4 w-[264px] h-[138px]">
      {children}
    </Card>
  )
}

export default TimeoffCard
