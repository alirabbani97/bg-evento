import Image from "next/image";

export default function Logo() {
  return (
    <Image
      width={52}
      height={12}
      alt="Header Logo"
      src="https://bytegrad.com/course-assets/react-nextjs/evento.png"
    />
  );
}
