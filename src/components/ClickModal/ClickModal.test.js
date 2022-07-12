import React from 'react';
import { render, screen } from '@testing-library/react';
import ClickModal from './ClickModal';

describe('ClickModal Component', () => {
  describe('grabModalCord', () => {
    const cordinates = {
      clickedX: 1280,
      clickedY: 2158,
      maxWidth: 1280,
      maxHeight: 2158,
    };
    it('check if modal window goes off the right edge of the screen', () => {
      render(<ClickModal cordinates={cordinates} />);
      expect(screen.getByTestId('container')).toHaveStyle('left: 1175px');
    });
    it('check if modal window goes off the bottom edge of the screen', () => {
      render(<ClickModal cordinates={cordinates} />);
      expect(screen.getByTestId('container')).toHaveStyle('top: 2038px');
    });
  });
});
