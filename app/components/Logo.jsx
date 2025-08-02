import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <>
      <div className="lg:flex">
        <Link href="/">
          <Image
            className="h-6 w-auto"
            src="/Logo.svg"
            alt="Logo"
            width={100}
            height={100}
            priority
          />
        </Link>
      </div>
    </>
  );
};

export default Logo;
