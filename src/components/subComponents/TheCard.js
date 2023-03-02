import { Card, CardBody, Image, Stack, Heading } from '@chakra-ui/react'
// import { Divider } from '@chakra-ui/react';
import '../../App.css'
// import image1 from '../img/css.png'
// import { LoremIpsum, Avatar } from 'react-lorem-ipsum';


function TheCard(props) {
    return (
        <div className='card'>
            <Card maxW='sm' backgroundColor={'#BAD7E9'}>
                <CardBody>
                    <Image
                        src={props.image}
                        alt='image-not-found'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md' color={'black'}>{props.text}</Heading>
                    </Stack>
                </CardBody>
            </Card>
        </div>
    )
}

export default TheCard