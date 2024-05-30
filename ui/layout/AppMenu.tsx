import {
  Box,
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Stack,
  useDisclosure,
  Container,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import { JsonRpcSigner, ethers } from "ethers";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CopyText } from "../ui-utils/copy";
import { maskMiddleCharacters } from "@/core/utils/common";
import { Colors } from "@/theme/palette";
export function AppDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [Account, setAccount] = useState<JsonRpcSigner>();
  const [Balance, setBalance] = useState("0");

  const connectWallet = async () => {
    let signer = null;

    let provider;
    if (window.ethereum == null) {
      // If MetaMask is not installed, we use the default provider,
      // which is backed by a variety of third-party services (such
      // as INFURA). They do not have private keys installed,
      // so they only have read-only access
      console.log("MetaMask not installed; using read-only defaults");
      provider = ethers.getDefaultProvider();
   
    } else {
      // Connect to the MetaMask EIP-1193 object. This is a standard
      // protocol that allows Ethers access to make all read-only
      // requests through MetaMask.
      provider = new ethers.BrowserProvider(window.ethereum);
      // It also provides an opportunity to request access to write
      // operations, which will be performed by the private key
      // that MetaMask manages for the user.
      signer = await provider.getSigner();
      setAccount(signer);
      const balance = await provider.getBalance(signer.address);
      setBalance(ethers.formatEther(balance));
    }
  };
  useEffect(() => {
    connectWallet();
  }, [Account]);
  return (
    <>
      {/* <div className="acccount-address flex flex-row items-center gap-1 ">
                     
                    </div> */}

      {Account && Account !== undefined ? (
        <Button colorScheme="teal" onClick={onOpen}>
          Account
        </Button>
      ) : (
        <Button onClick={connectWallet}>Connect Wallet</Button>
      )}

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Account Details</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="username">Search Transaction</FormLabel>
                <input id="username" placeholder="search by address / tnxhash" />
              </Box>
            </Stack>
          </DrawerBody>

          <AccountDetail
            balance={Balance}
            address={Account && Account.address}
          />
          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

interface accountProps {
  address?: string;
  balance?: string;
}
export const AccountDetail = ({ address, balance }: accountProps) => {
  const { colorMode } = useColorMode();
  return (
    <Stack className="px-3 mb-5">
      <Stack className="flex flex-row " direction="row" align="center">
        <Heading as="h4" size="xs">
          Balance
        </Heading>
        <Text
          fontSize="sm"
          className="font-bold"
          style={{
            color: colorMode === "dark" ? Colors.header.dark : Colors.grey[950],
          }}
        >
          {balance && balance} ETH
        </Text>
      </Stack>
      <Heading as="h4" size="xs" className="mb-[-8px]">
        Address
      </Heading>
      {address && (
        <Stack className="flex flex-row  h-[30px]" direction="row" align="center">
          <Image
            src={"/assets/images/ether.png"}
            alt=""
            width={20}
            height={20}
          />
          <Text
            fontSize="sm"
            className="font-bold"
            style={{
              color:
                colorMode === "dark" ? Colors.header.dark : Colors.grey[950],
            }}
          >
            {maskMiddleCharacters({ address: address, number: 10 })}
          </Text>
          <CopyText idx={address} text={address!} />
        </Stack>
      )}
    </Stack>
  );
};
