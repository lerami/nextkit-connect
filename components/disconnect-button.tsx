"use clients"

import { useDisconnectButton } from "@livekit/components-react";
import { redirect } from 'next/navigation'

export function DisconnectButton() {
    const { buttonProps } = useDisconnectButton({onClick: () => redirect('/')});
    return <button {...buttonProps}>Disconnect</button>;
}