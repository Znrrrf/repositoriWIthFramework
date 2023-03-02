import { Box, Flex, Text } from "@chakra-ui/react";
// import Logo from "./path/to/logo.svg";


function Footer() {
    return (
        <div className="footer">
            <Box bg="#ECF9FF" color="#2B3467">
                <Flex justify="space-between" align="center" p={4} maxW="960px" mx="auto">
                    <Text>© 2023 Example Company. All rights reserved.</Text>
                </Flex>
            </Box>
        </div>

    );
}

export default Footer;