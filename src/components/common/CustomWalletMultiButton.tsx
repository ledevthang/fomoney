"use client";

import { WalletName } from "@solana/wallet-adapter-base";
import { useWalletMultiButton } from "@solana/wallet-adapter-base-ui";
import "@solana/wallet-adapter-react-ui";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Wallet2Icon } from "lucide-react";
import React, {
  CSSProperties,
  FC,
  MouseEvent,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { auth } from "@/services/user";
import { useMutation } from "@tanstack/react-query";

export type ButtonProps = PropsWithChildren<{
  className?: string;
  disabled?: boolean;
  endIcon?: ReactElement;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  startIcon?: ReactElement;
  style?: CSSProperties;
  tabIndex?: number;
}>;

type Props = ButtonProps & {
  labels: Omit<
    {
      [TButtonState in ReturnType<
        typeof useWalletMultiButton
      >["buttonState"]]: string;
    },
    "connected" | "disconnecting"
  > & {
    "copy-address": string;
    copied: string;
    "change-wallet": string;
    disconnect: string;
  };
};

type BaseWalletConnectionButtonProps = React.ComponentProps<typeof Button> & {
  walletIcon?: string;
  walletName?: WalletName;
};

const LABELS = {
  "change-wallet": "Change wallet",
  connecting: "Connecting ...",
  "copy-address": "Copy address",
  copied: "Copied",
  disconnect: "Disconnect",
  "has-wallet": "Connect",
  "no-wallet": "Select Wallet",
  "switch-network": "Switch network",
} as const;

export function CustomWalletMultiButton(props: ButtonProps) {
  const { wallet, publicKey } = useWallet();

  const mutateAuth = useMutation({
    mutationKey: ["auth"],
    mutationFn: auth,
  });

  const handleLogin = useCallback(async (walletAddress: string) => {
    const response = await mutateAuth.mutateAsync({
      provider: "wallet",
      credential: walletAddress,
    });
    return response.accessToken;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (publicKey) {
      handleLogin(publicKey.toBase58());
    }
  }, [wallet, publicKey, handleLogin]);

  return (
    <BaseWalletMultiButton
      {...props}
      labels={LABELS}
      startIcon={undefined} // Remove the wallet icon
      endIcon={undefined}
    />
  );
}

export function BaseWalletMultiButton({ children, labels, ...props }: Props) {
  const { setVisible: setModalVisible } = useWalletModal();
  const {
    buttonState,
    onConnect,
    onDisconnect,
    publicKey,
    walletIcon,
    walletName,
  } = useWalletMultiButton({
    onSelectWallet() {
      setModalVisible(true);
    },
  });
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const listener = (event: globalThis.MouseEvent | TouchEvent) => {
      const node = ref.current;

      // Do nothing if clicking dropdown or its descendants
      if (!node || node.contains(event.target as Node)) return;

      setMenuOpen(false);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, []);
  const content = useMemo(() => {
    if (children) {
      return children;
    } else if (publicKey) {
      const base58 = publicKey.toBase58();
      return base58.slice(0, 4) + ".." + base58.slice(-4);
    } else if (buttonState === "connecting" || buttonState === "has-wallet") {
      return labels[buttonState];
    } else {
      return labels["no-wallet"];
    }
  }, [buttonState, children, labels, publicKey]);
  return (
    <div className="wallet-adapter-dropdown">
      <BaseWalletConnectionButton
        {...props}
        aria-expanded={menuOpen}
        style={{ pointerEvents: menuOpen ? "none" : "auto", ...props.style }}
        onClick={() => {
          switch (buttonState) {
            case "no-wallet":
              setModalVisible(true);
              break;
            case "has-wallet":
              if (onConnect) {
                onConnect();
              }
              break;
            case "connected":
              setMenuOpen(true);
              break;
          }
        }}
        walletIcon={walletIcon}
        walletName={walletName}
      >
        {content}
      </BaseWalletConnectionButton>
      <ul
        aria-label="dropdown-list"
        className={`wallet-adapter-dropdown-list ${menuOpen && "wallet-adapter-dropdown-list-active"}`}
        ref={ref}
        role="menu"
      >
        <li
          className="wallet-adapter-dropdown-list-item"
          onClick={async () => {}}
          role="menuitem"
        >
          Switch network
        </li>
        {publicKey ? (
          <li
            className="wallet-adapter-dropdown-list-item"
            onClick={async () => {
              await navigator.clipboard.writeText(publicKey.toBase58());
              setCopied(true);
              setTimeout(() => setCopied(false), 400);
            }}
            role="menuitem"
          >
            {copied ? labels["copied"] : labels["copy-address"]}
          </li>
        ) : null}
        <li
          className="wallet-adapter-dropdown-list-item"
          onClick={() => {
            setModalVisible(true);
            setMenuOpen(false);
          }}
          role="menuitem"
        >
          {labels["change-wallet"]}
        </li>
        {onDisconnect ? (
          <li
            className="wallet-adapter-dropdown-list-item"
            onClick={() => {
              onDisconnect();
              setMenuOpen(false);
            }}
            role="menuitem"
          >
            {labels["disconnect"]}
          </li>
        ) : null}
      </ul>
    </div>
  );
}

export function BaseWalletConnectionButton({
  ...props
}: BaseWalletConnectionButtonProps) {
  return (
    <Button
      {...props}
      className="wallet-adapter-button-trigger"
      startIcon={<Wallet2Icon size={20} />}
    />
  );
}

export const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      className={`wallet-adapter-button ${props.className || ""}`}
      disabled={props.disabled}
      style={props.style}
      onClick={props.onClick}
      tabIndex={props.tabIndex || 0}
      type="button"
    >
      {props.startIcon && (
        <i className="wallet-adapter-button-start-icon">{props.startIcon}</i>
      )}
      {props.children}
    </button>
  );
};
