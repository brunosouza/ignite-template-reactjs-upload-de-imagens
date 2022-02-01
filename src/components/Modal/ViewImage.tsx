import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior="outside"
      isCentered={true}
    >
      <ModalOverlay />
      <ModalContent
        maxWidth={900}
        w="auto"
        backgroundColor="pGray.800"
        borderBottomRadius="6px"
      >
        <ModalBody p={0}>
          <Image src={imgUrl} maxWidth={900} maxHeight={600} />
        </ModalBody>
        <ModalFooter
          justifyContent="flex-start"
          py="8px"
          px="10px"
          borderBottomRadius="6px"
        >
          <Link
            href={imgUrl}
            isExternal
            color="pGray.50"
            fontWeight="400"
            fontSize="14px"
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
