import ConnectWalletButton from "../common/ConnectWalletButton";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <ConnectWalletButton />
    </header>
  );
}
