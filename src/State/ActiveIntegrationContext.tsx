import React, {useState, createContext} from 'react';

export const ActiveIntegrationContext = createContext<[JSX.Element | null,  React.Dispatch<React.SetStateAction<JSX.Element | null>> | null]>([null, null]);

export const ActiveIntegrationProvider: React.FC = (props) => {
    const [val, setVal] = useState<JSX.Element | null>(null)

    // @ts-ignore
    return <ActiveIntegrationContext.Provider value={[val, setVal]}>{props.children}</ActiveIntegrationContext.Provider>;
}


