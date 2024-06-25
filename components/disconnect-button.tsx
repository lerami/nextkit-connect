"use clients"

import { useDisconnectButton } from "@livekit/components-react";
import { useRouter } from 'next/navigation'

export function DisconnectButton({...props}) {
    const router = useRouter();
    const { buttonProps } = useDisconnectButton({onClick: () => router.push('/')});
    return (
        <div {...props}>
            <button {...buttonProps}>Disconnect</button>
        </div>
    )
}