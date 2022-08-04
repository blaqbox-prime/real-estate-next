import Link from 'next/link';
import {Flex, Box, Text, Button, Image} from '@chakra-ui/react';
import {baseUrl, fetchApi} from '../utils/fetchApi';
import Property from '../components/Property';


const Banner = ({purpose, title, title2, imageUrl, desc1, desc2, linkName, buttonText}) => {
  return (
  <Flex flexwrap='wrap' justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl && imageUrl} width={'500px'} height={'300px'} alt="banner"/>
    {/* -- */}
    <Box p="5">
      <Text color="gray.500" fontSize="small" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title}<b/>{title2}</Text>
      <Text paddingTop="3" paddingBottom="3" fontSize="lg" fontWeight="medium" color="gray.700">{desc1}<br/>{desc2}</Text>
      <Link href={linkName} passHref><Button fontSize="xl" bg="blue.300" >{buttonText}</Button></Link>
     </Box>
  </Flex>);
}

export default function Home({propertiesForSale, propertiesForRent}) {
  return (
    <Box>
      {/* <Banner purpose={'For Rent'} /> */}
      <Banner 
        purpose={'Rent A Home'}
        title={"Rental Homes For"}
        title2={"Everyone"}
        desc1={"Explore Apartments, Villas, Homes"}
        desc2={"and more"}
        buttonText={"Explore Renting"}
        linkName={"/search?purpose=for-rent"}
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />
      <Flex wrap={'wrap'}>
        {propertiesForRent.map(property => <Property key={property.id} property={property}/>)}
      </Flex>
      {/* <Banner purpose={'For Sale'} /> */}
      <Banner 
        purpose={'BUY A HOME'}
        title={'Find, Buy & Own Your'}
        title2={'Dream Home'}
        desc1={'Explore from Apartments, land, builder floors,'}
        desc2={'villas and more'}
        buttonText={'Explore Buying'}
        linkName={'/search?purpose=for-sale'}
        imageUrl={'https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'}
      />
         <Flex wrap={'wrap'}>
        {propertiesForSale.map(property => <Property key={property.id} property={property}/>)}
      </Flex>
    </Box>
  )
}

export async function getStaticProps(){
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale : propertyForSale?.hits,
      propertiesForRent : propertyForRent?.hits
    }
  }
}
