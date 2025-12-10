import Link from "next/link";

function NotFound() {
  return (
    <div>
      <h1>Ooops. The page that are you looking for doesn&#39;t exists</h1>
      <p>
        <Link href="/">Back home</Link>
      </p>
    </div>
  );
}

export default NotFound;
