"use client"
import { createNewEntry } from "@/utils/api";
import { useRouter } from "next/navigation";

export default function NewEntryCard() {

  const router = useRouter();

  const handleOnClick = async () => {
    console.log('clicked');
    const data = await createNewEntry("This is a new entry");
    router.push(`/journal/${data.id}`);
  }

  return (
    <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow "
    onClick={handleOnClick}>
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-3xl">New Entry</h3>
      </div>
    </div>
  )
}