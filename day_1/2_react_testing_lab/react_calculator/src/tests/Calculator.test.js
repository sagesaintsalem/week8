import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })
  it('should add two numbers together', () => {
    const button4 = container.getByTestId('number4');
    const addbutton = container.getByTestId('operator-add');
    const button1 = container.getByTestId('number1');
    const equalbutton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(addbutton);
    fireEvent.click(button4);
    fireEvent.click(equalbutton);
    expect(runningTotal.textContent).toEqual('5');

  })
  it('should subtract one number from another', () => {
    const button7 = container.getByTestId('number7');
    const subtractbutton = container.getByTestId('operator-subtract');
    const button4 = container.getByTestId('number4');
    const equalbutton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(subtractbutton);
    fireEvent.click(button4);
    fireEvent.click(equalbutton);
    expect(runningTotal.textContent).toEqual('3');

  })
  it('should multiply two numbers', () => {
    const button3 = container.getByTestId('number3');
    const multiplybutton = container.getByTestId('operator-multiply');
    const button5 = container.getByTestId('number5');
    const equalbutton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(multiplybutton);
    fireEvent.click(button5);
    fireEvent.click(equalbutton);
    expect(runningTotal.textContent).toEqual('15');
  })
  it('should divide a number by another number', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const dividebutton = container.getByTestId('operator-divide');
    const button7 = container.getByTestId('number7');
    const equalbutton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(dividebutton);
    fireEvent.click(button7);
    fireEvent.click(equalbutton);
    expect(runningTotal.textContent).toEqual('3');
  })
  it('should concatenate number presses', () => {
    const button6 = container.getByTestId('number6');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button6);
    fireEvent.click(button6);
    fireEvent.click(button6);
    expect(runningTotal.textContent).toEqual('666');
  })
  it('should chain multiple operations', () => {
    const button3 = container.getByTestId('number3');
    const multiplybutton = container.getByTestId('operator-multiply');
    const button5 = container.getByTestId('number5');
    const minusbutton = container.getByTestId('operator-subtract');
    const button9 = container.getByTestId('number9');
    const equalbutton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(multiplybutton);
    fireEvent.click(button5);
    fireEvent.click(minusbutton);
    fireEvent.click(button9);
    fireEvent.click(equalbutton);
    expect(runningTotal.textContent).toEqual('6');
  })
  it('should clear running total without affecting calculation', () => {
    const button1 = container.getByTestId('number1');
    const addbutton = container.getByTestId('operator-add');
    const button2 = container.getByTestId('number2');
    const equalbutton = container.getByTestId('operator-equals');
    const clearbutton = container.getByTestId('clear');
    const multiplybutton = container.getByTestId('operator-multiply');
    const button3 = container.getByTestId('number3');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(addbutton);
    fireEvent.click(button2);
    fireEvent.click(equalbutton);
    fireEvent.click(clearbutton);
    fireEvent.click(multiplybutton);
    fireEvent.click(button3);
    fireEvent.click(equalbutton);
    expect(runningTotal.textContent).toEqual('9');


  })
})

