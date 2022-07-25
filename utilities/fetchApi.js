import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
	const { data } = await axios.get(url, {
		headers: {
			'x-rapidapi-host': 'bayut.p.rapidapi.com',
			'X-RapidAPI-Key': 'a49b89ab05msh2298f1c9ad62e02p18eddcjsn87b4e0935a55',
		},
	});

	return data;
};
