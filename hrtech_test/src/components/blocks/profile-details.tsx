import Link from "next/link"

import {
  Phone,
  Mail,
  Linkedin,
  Facebook,
  Twitter,
  Hash,
  Clock4,
  Users,
  Globe,
  MapPin,
  User,
} from "lucide-react"

import ContactsCard from "../ui/contacts-card"

const ProfileDetails = () => {
  return (
    <div className="hidden xl:flex flex-col gap-4 relative top-[-14px] max-w-[225px] xl:w-full">
      <ContactsCard>
        <div className="">
          <Link className="flex items-center gap-2" href="tel:07911 654321">
            <Phone className="size-4" />
            <p className="text-sm">07911 654321</p>
          </Link>
        </div>

        <div className="">
          <Link
            className="flex items-center gap-2"
            href="mailto:avd.yana@videoroll.net"
          >
            <Mail className="size-4" />
            <p className="text-sm">avd.yana@videorollnet</p>
          </Link>
        </div>

        <div className="flex gap-[14px]">
          <Link href="#">
            <Linkedin className="size-4" />
          </Link>

          <Link href="#">
            <Facebook className="size-4" />
          </Link>

          <Link href="#">
            <Twitter className="size-4" />
          </Link>
        </div>
      </ContactsCard>

      <ContactsCard>
        <p className="text-sm">Hire Date</p>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Sep. 3,2020</p>
          <p className="text-sm">3y - 9m - 20d</p>
        </div>
      </ContactsCard>

      <ContactsCard>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Hash className="size-4" />
            <p className="text-sm">5</p>
          </div>
          <div className="flex items-center gap-2">
            <Clock4 className="size-4" />
            <p className="text-sm">Full-Time</p>
          </div>
          <div className="flex items-center gap-2">
            <Users className="size-4" />
            <p className="text-sm">Operations</p>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="size-4" />
            <p className="text-sm">Europe</p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="size-4" />
            <p className="text-sm">London, UK</p>
          </div>
        </div>
      </ContactsCard>

      <ContactsCard>
        <p className="text-sm">Direct Reports</p>
        
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <User className="size-4" />
            <p className="text-sm">Shane</p>
          </div>
          <div className="flex items-center gap-2">
            <User className="size-4" />
            <p className="text-sm">Shane</p>
          </div>
          <div className="flex items-center gap-2">
            <User className="size-4" />
            <p className="text-sm">Shane</p>
          </div>
          <div className="flex items-center gap-2">
            <User className="size-4" />
            <p className="text-sm">Shane</p>
          </div>
          <div className="flex items-center gap-2">
            <Users className="size-4" />
            <p className="text-sm">4 More...</p>
          </div>
        </div>
      </ContactsCard>
    </div>
  )
}

export default ProfileDetails
