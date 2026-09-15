import * as React from 'react';
export const HeroContext = React.createContext();

export const HeroContextProvider = ({ children }) => {
	const [heroLoaded, setHeroLoaded] = React.useState({
		isLoaded: false,
	});

	return (
		<HeroContext.Provider value={[heroLoaded, setHeroLoaded]}>
			{children}
		</HeroContext.Provider>
	);
};

export default HeroContextProvider;
