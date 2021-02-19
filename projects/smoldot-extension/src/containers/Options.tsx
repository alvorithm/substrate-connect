import React from 'react';
import { createMuiTheme, ThemeProvider, Typography, Box } from '@material-ui/core';
import { light, ClientSearch, Logo, ClientItem } from '../components/';
import GlobalFonts from '../fonts/fonts';
import { useNetworks } from '../hooks';

const ClientTypeTitle: React.FunctionComponent = ({children}) => (
	<Box mt={5} mb={2}>
		<Typography variant='overline'>
			{children}
		</Typography>
	</Box>
);

const Options: React.FunctionComponent = () => {
	const appliedTheme = createMuiTheme(light);
	const networks = useNetworks();
	
	return (
		<ThemeProvider theme={appliedTheme}>
			<GlobalFonts />
			<Logo />
			<ClientSearch />
			<ClientTypeTitle>Local chainspecs</ClientTypeTitle>
			{networks.map((network, i) => network.isKnown && <ClientItem {...network} key={i} />)}
			<ClientTypeTitle>Chainspecs from uApps</ClientTypeTitle>
			{networks.map((network, i) => !network.isKnown && <ClientItem {...network} key={i} />)}
		</ThemeProvider>
	);
};

export default Options;
