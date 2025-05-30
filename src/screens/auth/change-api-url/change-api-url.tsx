import GearIcon from 'boilerplate-react-native/assets/icons/gear.svg';
import { Button } from 'boilerplate-react-native/src/components';
import { ButtonKind } from 'boilerplate-react-native/src/types/button';
import { useTheme } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Config from 'react-native-config';

import ChangeApiUrlModal from './change-api-url-modal';

const ChangeApiUrlButton = () => {
  const isNonProdEnv = Config.ENVIRONMENT !== 'production';

  const { colors } = useTheme();

  const [isChangeAPIUrlModalOpen, setIsChangeAPIUrlModalOpen] = useState(false);

  if (!isNonProdEnv) {
    return null;
  }

  return (
    isNonProdEnv && (
      <>
        <View style={styles.buttonContainer}>
          <Button onClick={() => setIsChangeAPIUrlModalOpen(true)} kind={ButtonKind.TERTIARY}>
            <GearIcon width={24} height={24} fill={colors.secondary[900]} />
          </Button>
        </View>
        <ChangeApiUrlModal
          onRequestClose={() => setIsChangeAPIUrlModalOpen(false)}
          isModalOpen={isChangeAPIUrlModalOpen}
        />
      </>
    )
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: -28,
    right: -28,
    zIndex: 1000,
  },
});

export default ChangeApiUrlButton;
