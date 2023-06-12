import { useRef } from "react";
const AmityUiKit= require('@amityco/ui-kit-open-source')
export default function Wrapper({ apiKey, apiEndpoint, userId, displayName }: { apiKey: string, apiEndpoint: string, userId: string, displayName: string }) => {
    const ref = useRef();

    const handleConnect = () => ref.current.connect();
    const handleDisconnect = () => ref.current.disconnect();

    const handleConnected = () => console.log(“connected”);
    const handleDisconnected = () => console.log(“disconnected”);

    return (
        AmityUiKit
  }