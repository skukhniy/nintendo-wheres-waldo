// import React from 'react';
// import { render, screen } from '@testing-library/react';

describe('GameRender Component', () => {
  it('check game over function returns false if all three chars are not found', () => {
    const charObj = { Luigi: false, Toad: false, Link: false };
    function gameOverCheck() {
      return Object.values(charObj).every((v) => v === true);
    }
    expect(gameOverCheck()).toBeFalsy();
  });
  it('check game over function returns true if all three chars are found', () => {
    const charObj = { Luigi: true, Toad: true, Link: true };
    function gameOverCheck() {
      return Object.values(charObj).every((v) => v === true);
    }
    expect(gameOverCheck()).toBeTruthy();
  });
  it('check game over function returns false if only some chars are found', () => {
    const charObj = { Luigi: true, Toad: false, Link: true };
    function gameOverCheck() {
      return Object.values(charObj).every((v) => v === true);
    }
    expect(gameOverCheck()).toBeFalsy();
  });
});
