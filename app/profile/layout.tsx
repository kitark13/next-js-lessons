import Link from "next/link";

interface ProfileLayoutProps {
  children: React.ReactNode;
}

function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <li style={{ listStyleType: "none" }}>
          <Link href="/profile/about">About</Link>
        </li>
        <li style={{ listStyleType: "none" }}>
          <Link href="/profile/settings">Settings</Link>
        </li>
        <li style={{ listStyleType: "none" }}>
          <Link href="/profile/edit">Edit</Link>
        </li>
      </ul>
      <div>{children}</div>
    </div>
  );
}

export default ProfileLayout;
