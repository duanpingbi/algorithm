/**
 * 使用react-hooks实现一个带有输入防抖的输入框
 */

import React, { useState } from 'react';

function debounce(fn, delay) {
    let timer;
    return (...args) => {
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn(...args);
            timer = null;
        }, delay); 
    }
}

export default function(props) {
    const [val, setVal] = useState('');
    const changeInput = debounce(e => {
        const { value } = e.target;
        setVal(value);
    }, 300);
  return (<input value={val} onChange={changeInput} />)
}