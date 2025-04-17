import { createContext, ReactNode, useState } from "react";

export type UserContextProps = {
  userId: number;
	setUserId: (id: number) => void;
};

export type UserContextProviderProps = {
	children: ReactNode
};

export const UserContext = createContext<UserContextProps>({
  userId: 1,
	setUserId: ()=>{}
});

export const UserContextProvider: React.FC<UserContextProviderProps> = ({children}) => {
	const [userId, setUserId] = useState<number>(1)
	return(
		<UserContext.Provider value={{userId, setUserId}}>
			{children}
		</UserContext.Provider>
	)
}