import React from 'react';
import { View, Text, Button } from 'react-native';

import Modal from './modal';
import ModalFooter from './modal-footer';
import ModalHeader from './modal-header';
import { ConfirmationModalProps } from './types';
/**
 * ConfirmationModal Component
 * - Extends Modal to provide a default confirmation dialog
 *
 * Example usage:
 * <ConfirmationModal
 *   isVisible={isConfirmVisible}
 *   onConfirm={handleConfirm}
 *   onCancel={handleClose}
 *   message="Are you sure you want to proceed?"
 * />
 */
const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isVisible,
  onConfirm,
  onCancel,
  message = 'Are you sure?',
}) => {
  return (
    <Modal isVisible={isVisible} onClose={onCancel}>
      <ModalHeader title="Confirmation" onClose={onCancel} />
      <View>
        <Text>{message}</Text>
      </View>
      <ModalFooter>
        <Button title="Confirm" onPress={onConfirm} />
        <Button title="Cancel" onPress={onCancel} />
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmationModal;
