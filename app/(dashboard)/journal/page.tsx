import EntryCard from "@/components/EntryCard";
import NewEntryCard from "@/components/NewEntryCard";
import { getUserByClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db"
import Link from "next/link";

const getJournalEntries = async() => {
  // ...
  const user = await getUserByClerkId();
  const journalEntries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  return journalEntries;
}

export default async function JournalPage() {
  const entries = await getJournalEntries();

  console.log({entries});
  return (
    <div>
      <h2 className="text-3xl mb-6">Journal</h2>
      <div className="grid grid-cols-3 gap-4">
        <NewEntryCard />
        {entries.map(entry => (
        <Link key={entry.id} href={`/journal/${entry.id}`}>
          <EntryCard entry={entry} />
        </Link>
        ))}
      </div>
    </div>
  )
}
