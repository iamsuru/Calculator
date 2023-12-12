import React, { useState } from 'react'
import { evaluate } from 'mathjs'
import './App.css'
function App() {
  const [displayValue, setDisplayValue] = useState('')
  const [resultValue, setResultValue] = useState('')

  function display(val) {
    setDisplayValue(function (prevValue) {
      return prevValue + val;
    })
  }

  function clearScreen() {
    setDisplayValue('')
    setResultValue('')
  }

  function calculate() {
    try {
      const result = evaluate(displayValue)
      setResultValue(result)
    } catch (error) {
      console.log(error);
      setResultValue('Error')
    }
  }

  function delLastVal() {
    setDisplayValue(function (prevValue) {
      return prevValue.slice(0, -1);
    })
  }

  return (
    <>
      <div className='container'>
        <div className='calci-container'>
          <h1>Calculator</h1>
          <table className='calci'>
            <tr>
              <td colSpan={4}><input type='text' className='display' id='get' disabled value={displayValue} /></td>
            </tr>
            <tr>
              <td colSpan={4}><input type='text' className='result' id='set' disabled value={resultValue} /></td>
            </tr>
            <tr>
              <td><input type='button' value={'C'} onClick={clearScreen} id='clearBtn' className='sides' /></td>
              <td><input type='button' value={'%'} onClick={function () { display('%') }} className='sides' /></td>
              <td><button type='button' onClick={function () { delLastVal() }}><i className="fa-solid fa-delete-left"></i></button></td>
              <td><button type='button' value={'/'} onClick={function () { display('/') }} className='sides'><i className="fa-solid fa-divide"></i></button></td>
            </tr>
            <tr>
              <td><input type='button' value={7} onClick={function () { display('7') }} /></td>
              <td><input type='button' value={8} onClick={function () { display('8') }} /></td>
              <td><input type='button' value={9} onClick={function () { display('9') }} /></td>
              <td><input type='button' value={'X'} onClick={function () { display('*') }} className='sides' /></td>
            </tr>
            <tr>
              <td><input type='button' value={4} onClick={function () { display('4') }} /></td>
              <td><input type='button' value={5} onClick={function () { display('5') }} /></td>
              <td><input type='button' value={6} onClick={function () { display('6') }} /></td>
              <td><input type='button' value={'-'} onClick={function () { display('-') }} className='sides' /></td>
            </tr>
            <tr>
              <td><input type='button' value={1} onClick={function () { display('1') }} /></td>
              <td><input type='button' value={2} onClick={function () { display('2') }} /></td>
              <td><input type='button' value={3} onClick={function () { display('3') }} /></td>
              <td><input type='button' value={'+'} onClick={function () { display('+') }} className='sides' /></td>
            </tr>
            <tr>
              <td><input type='button' value={'00'} onClick={function () { display('00') }} /></td>
              <td><input type='button' value={0} onClick={function () { display('0') }} /></td>
              <td><input type='button' value={'.'} onClick={function () { display('.') }} /></td>
              <td><input type='button' value={'='} onClick={calculate} className='equal' /></td>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}

export default App