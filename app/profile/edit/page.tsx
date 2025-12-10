"use client";
// import Link from "next/link";
import { useRouter } from "next/navigation";

function ProfileEdit() {
  const router = useRouter();

  const handleClick = () => {
    if (confirm("Are you sure want to leave?")) {
      console.log("Redirect");
      router.push("/profile");
    }
  };

  return (
    <div>
      <h1>Profile Edit</h1>
      <button onClick={handleClick}>Back</button>
      {/* <Link href="/profile">Back</Link> */}
    </div>
  );
}

export default ProfileEdit;
