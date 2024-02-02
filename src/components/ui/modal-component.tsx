"use client";
import paths from "@/paths";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface Props {
  children?: React.ReactNode;
  modalTitle: string;
  isOpen: boolean;
  onClose: () => void;
}
export const ModalComponent = ({
  children,
  modalTitle,
  isOpen,
  onClose,
}: Props) => {
  const router = useRouter();
  const redirectToHome = () => {
    router.push(paths.home());
  };

  return (
    <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {modalTitle}
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={redirectToHome}>
                Regresar al inicio
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
