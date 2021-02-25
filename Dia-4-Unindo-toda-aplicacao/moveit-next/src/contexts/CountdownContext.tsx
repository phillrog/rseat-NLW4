import { createContext, ReactNode } from "react";
import { Countdown } from "../components/Countdown";

interface CountdownContextData {

}

interface CountdownProviderProps {
    children: ReactNode;
}

const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider(children: CountdownProviderProps) {
    return (
        <CountdownContext.Provider value={{}}>
            {children}
        </CountdownContext.Provider>
    );
}