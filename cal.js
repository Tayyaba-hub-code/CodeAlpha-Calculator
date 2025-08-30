    const output = document.querySelector('.output');
    const buttons = document.querySelectorAll('.first');
    const eqto = document.querySelector('.equalto');
    const clear = document.querySelector('.clearALL');
    const fx = document.querySelector('.firstx');

    let currentInput = '';
    let resultOutput = false;

    // Mouse click handling
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        if (resultOutput) {
          currentInput = '';
          resultOutput = false;
        }
        let value = button.textContent;
        if (value === '×') value = '*';
        if (value === '÷') value = '/';
        currentInput += value;
        output.textContent = currentInput;
      });
    });

    // Equals (=) button
    eqto.addEventListener('click', () => {
      calculate();
    });

    // Clear All
    clear.addEventListener('click', () => {
      currentInput = '';
      output.textContent = '0';
    });

    // Delete last
    fx.addEventListener('click', () => {
      currentInput = currentInput.slice(0, -1);
      output.textContent = currentInput || '0';
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      const allowedKeys = '0123456789+-*/.';
      if (allowedKeys.includes(e.key)) {
        if (resultOutput) {
          currentInput = '';
          resultOutput = false;
        }
        currentInput += e.key;
        output.textContent = currentInput;
      }
      else if (e.key === 'Enter') {
        e.preventDefault();
        calculate();
      }
      else if (e.key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
        output.textContent = currentInput || '0';
      }
      else if (e.key === 'Escape') {
        currentInput = '';
        output.textContent = '0';
      }
    });

    function calculate() {
      try {
        const result = eval(currentInput);
        output.textContent = result;
        currentInput = result.toString();
        resultOutput = true;
      } catch {
        output.textContent = 'error';
      }
    }