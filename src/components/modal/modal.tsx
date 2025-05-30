import React, { PropsWithChildren } from 'react';
import {
  Modal as RNModal,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';

import ModalBody from './modal-body.component';
import ModalFooter from './modal-footer.component';
import ModalHeader from './modal-header.component';
import { useModalStyles } from './modal.styles';

export interface ModalProps {
  isModalOpen: boolean;
  onRequestClose?: () => void;
}

const ModalComponent: React.FC<PropsWithChildren<ModalProps>> = ({
  children,
  isModalOpen,
  onRequestClose,
}) => {
  const styles = useModalStyles();

  return (
    <RNModal
      visible={isModalOpen}
      transparent
      animationType="slide"
      onRequestClose={onRequestClose}
    >
      <TouchableWithoutFeedback onPress={onRequestClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <KeyboardAvoidingView behavior={'position'} style={styles.modalKeyboardAvoidingView}>
              <View style={styles.modalContent}>{children}</View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </RNModal>
  );
};

ModalComponent.defaultProps = {
  onRequestClose: () => {},
};

const Modal = ModalComponent as typeof ModalComponent & {
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
};

export default Modal;
