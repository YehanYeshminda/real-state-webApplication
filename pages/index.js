import Link from 'next/link';
import Image from 'next/image';
import { Text, Box, Flex, Button } from '@chakra-ui/react';

// reusing components with the use of chakra UI
const Banner = ({
	purpose,
	title1,
	title2,
	desc1,
	desc2,
	linkName,
	buttonText,
	imageUrl,
}) => (
	<Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
		<Image src={imageUrl} width={500} height={300} alt="Banner Set" />
		<Box p="5">
			<Text color="gray.500" fontSize="small" fontWeight="medium">
				{purpose}
			</Text>
			<Text fontSize="3xl" fontWeight="bold">
				{title1} <br />
				{title2}
			</Text>
			<Text fontSize="large" paddingTop="3" paddingBottom="3" color="gray.700">
				{desc1} <br />
				{desc2}
			</Text>

			<Button fontSize="xl">
				<Link href={linkName}>{buttonText}</Link>
			</Button>
		</Box>
	</Flex>
);

export default function Home() {
	return (
		<Box>
			<Banner
				purpose="Rent a Home"
				title1="Rental Homes for"
				title2="everyone"
				desc1="Expore Apartments, Villas, Homes"
				desc2="and More!"
				buttonText="Explore Renting"
				linkName="/search?purpose=for-rent"
				imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
			></Banner>

			{/* fetching the properties and then managing them */}
			<Flex flexWrap="wrap"></Flex>

			<Banner
				purpose="Buy a Home"
				title1="Find and Buy or Own your"
				title2="Dream Home"
				desc1="Expore Apartments, Villas, Homes"
				desc2="and More!"
				buttonText="Explore Buying"
				linkName="/search?purpose=for-sale"
				imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
			></Banner>
		</Box>
	);
}
