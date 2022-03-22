import Link from "next/link";
import { FC, MouseEventHandler } from "react";

const Logo: FC = () => {
  return (
    <div>
      <Link href="/">
        <a className="divide-y flex flex-col items-center m-2">
          <div className="font-medium text-3xl">Krish</div>
          <div className="text-2xl stroked">Garg</div>
        </a>
      </Link>
    </div>
  );
};

export default Logo;