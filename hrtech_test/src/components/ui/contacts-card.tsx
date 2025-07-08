import { Card } from "../ui/card"

interface ContactsCardProps {
  children: React.ReactNode | React.ReactNode[]
}

const ContactsCard = ({ children }: ContactsCardProps) => {
  return (
    <Card className="flex flex-col gap-4 shadow-none border-none rounded-2xl p-6">
      {children}
    </Card>
  )
}

export default ContactsCard
