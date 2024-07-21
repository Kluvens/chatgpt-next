import Link from "next/link";
import { Button } from "../ui/button";

const AuthButton = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Link href={"/auth"}>
        <Button size={"sm"} className="relative rounded-full">
          <div className="flex items-center justify-center">Log In</div>
        </Button>
      </Link>
      <Link href={"/auth"}>
        <Button
          variant={"secondary"}
          size={"sm"}
          className="relative rounded-full"
        >
          <div className="flex items-center justify-center">Sign Up</div>
        </Button>
      </Link>
    </div>
  );
};

export default AuthButton;
