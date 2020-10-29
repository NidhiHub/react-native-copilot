// @flow
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Button from './Button';

import styles from './style';

import type {Step} from '../types';

type Props = {
  isFirstStep: boolean,
  isLastStep: boolean,
  handleNext: func,
  handlePrev: func,
  handleStop: func,
  currentStep: Step,
  labels: Object,
};

const Tooltip = ({
  isFirstStep,
  isLastStep,
  handleNext,
  handlePrev,
  handleStop,
  currentStep,
  labels,
}: Props) => (
  <View>
    <View style={styles.tooltipContainer}>
      <Text testID="stepDescription" style={styles.tooltipText}>
        {currentStep.text}
      </Text>
    </View>
    <View style={[styles.bottomBar]}>
      {!isLastStep ? (
        <TouchableOpacity onPress={handleStop}>
          <Button>{labels.skip || 'SKIP'}</Button>
        </TouchableOpacity>
      ) : null}
      {!isFirstStep ? (
        <TouchableOpacity onPress={handlePrev}>
          <Button>{labels.previous || 'PREV'}</Button>
        </TouchableOpacity>
      ) : null}
      {!isLastStep ? (
        <TouchableOpacity onPress={handleNext}>
          <Button>{labels.next || 'NEXT'}</Button>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleStop}>
          <Button>{labels.finish || 'FINISH'}</Button>
        </TouchableOpacity>
      )}
    </View>
  </View>
);

export default Tooltip;
