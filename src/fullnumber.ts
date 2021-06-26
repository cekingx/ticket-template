export function fullNumber(number: number): string {
  const floatingCount = getFloatCount(number.toExponential());
  let exponentDigit

  if(number < 1 && number > 0) {
    exponentDigit = getMinExponent(number.toExponential());

    return number.toFixed(floatingCount + exponentDigit);
  }

  exponentDigit = getExponent(number.toExponential());

  return number.toFixed(0);
}

function getFloatCount(exponentNumber: string): number {
  const floatingDigit = exponentNumber.match(/(?<=\.).*(?=\e)/);

  if(floatingDigit == null) {
    return 0;
  }
  return floatingDigit[0].length;
}

function getMinExponent(exponentNumber: string): number {
  const exponentDigit = exponentNumber.toString().match(/(?<=\e\-).*/);

  return +exponentDigit[0];
}

function getExponent(exponentNumber: string): number {
  const exponentDigit = exponentNumber.toString().match(/(?<=\e\+).*/);

  return +exponentDigit[0];
}