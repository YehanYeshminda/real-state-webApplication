import React from 'react';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Real State</title>
			</Head>
			<Box maxWidth="1280px" m="auto">
				<header>Nav bar</header>
				<main>{children}</main>
				<footer>footer</footer>
			</Box>
		</>
	);
};

export default Layout;
