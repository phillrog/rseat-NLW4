import { createContext, ReactNode, useState } from 'react';

export const ChallengesContext = createContext({});

interface ChallengesProviderProps {
    children: ReactNode;
}

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);

    return (
        <ChallengesContext.Provider
            value={{
                level,
            }}
        >
            {children}
        </ChallengesContext.Provider>
    );
}