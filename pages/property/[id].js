import Link from 'next/link';
import Image from 'next/image';
import {Box, Flex, Text, Avatar} from '@chakra-ui/react';
import { FaBath, FaBed} from 'react-icons/fa';
import {BsGrid, bsGridFill} from 'react-icons/bs';
import {GoVerified, goVerified} from 'react-icons/go';
import millify from 'millify';
import {fetchApi, baseUrl} from '../../utils/fetchApi'
import ImageScrollBar from '../../components/ImageScrollBar'
const PropertyDetails = ({propertyDetails : {price,rentFrequency,rooms,title,baths,area,agency,isVerified,description, type, purpose, furnishingStatus, amenities, photos}}) => {
    return (
    <Box maxW="1000px" m="auto" p="4">
        {photos && <ImageScrollBar data={photos}/>}
        <Box p="6" w="full">
            <Flex pt="2" alignItems="center">
                <Box pr="3" color="green.400">
                    {isVerified && <GoVerified/>}
                </Box>
            </Flex>
        </Box>
    </Box>
    )
}

export default PropertyDetails;

export async function getServerSideProps({params: {id}}){
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return {
        props: {
            propertyDetails: data
        }
    }
}