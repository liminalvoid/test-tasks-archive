import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"

import { tableData } from "@/lib/fake-data"

const CustomTable = () => {
  const tableRows = tableData.map(
    ({ date, description, usedDays, earnedDays, balance }, index) => (
      <TableBody key={index} className="border-b-2 border-[#7C96B1]">
        <TableRow>
          <TableCell className="font-medium pl-2 py-2">{date}</TableCell>
          <TableCell className="text-nowrap px-[51px] py-2">
            {description}
          </TableCell>
          <TableCell className="px-[51px] py-2">
            {usedDays !== 0 && usedDays}
          </TableCell>
          <TableCell className="px-[51px] py-2">
            {earnedDays !== 0 && earnedDays.toPrecision(3)}
          </TableCell>
          <TableCell className="pr-2 py-2">
            {balance !== 0 && balance.toPrecision(3)}
          </TableCell>
        </TableRow>
      </TableBody>
    )
  )

  return (
    <div className="xl:px-[17px] lg:px-6">
      <Table className="mx-6 xl:mx-0 lg:mx-0">
        <TableHeader className="bg-[#DAE6F2] border-none">
          <TableRow>
            <TableHead className="text-black pl-2">Date</TableHead>
            <TableHead className="text-black text-nowrap px-[51px]">
              Description
            </TableHead>
            <TableHead className="text-black text-nowrap px-[51px]">
              Used Days (-)
            </TableHead>
            <TableHead className="text-black text-nowrap px-[51px]">
              Earned Days (+)
            </TableHead>
            <TableHead className="text-black pr-2">Balance</TableHead>
          </TableRow>
        </TableHeader>

        {tableRows}
      </Table>
    </div>
  )
}

export default CustomTable
