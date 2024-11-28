import { CustomWalletMultiButton } from "../common/CustomWalletMultiButton";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="mb-2 flex items-center justify-between">
      <Logo />
      <CustomWalletMultiButton />
    </header>
  );
}
