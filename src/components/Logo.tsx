import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        width={52}
        height={12}
        alt="Header Logo"
        src="https://bytegrad.com/course-assets/react-nextjs/evento.png"
      />
    </Link>
  );
}
