import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="max-w-lg mx-auto flex items-center h-screen">

    
      <SignIn />
    </div>
  )
}