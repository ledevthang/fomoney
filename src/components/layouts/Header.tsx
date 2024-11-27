import ConnectWalletutton from "./ConnectWalletButton";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <img src="logo.png" alt="FoMoney" width={170} />
      <ConnectWalletutton />
    </header>
  );
}
