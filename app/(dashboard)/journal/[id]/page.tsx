import Link from "next/link"



export default function JournalEditPage({params}) {
  return (
    <>
    <Link href="/journal">Back to journal</Link>
    <div>{params.id}</div>
    </>
  )
}
