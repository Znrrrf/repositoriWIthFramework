import { Card, CardBody, Image, Stack, Heading, } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react';
import '../../App.css'
import Javascript from '../img/javascript.jpg'


function TheCard3() {
    return (
        <div className='card'>
            <Card maxW='sm' backgroundColor={'#18122B'}>
                <CardBody>
                    <Image
                        src={Javascript}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md' color={'#ECF2FF'}>Javascript</Heading>
                        {/* <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            $450
                        </Text> */}
                    </Stack>
                </CardBody>
                <Divider />
                {/* <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Buy now
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            Add to cart
                        </Button>
                    </ButtonGroup>
                </CardFooter> */}
            </Card>
        </div>
    )

}

export default TheCard3