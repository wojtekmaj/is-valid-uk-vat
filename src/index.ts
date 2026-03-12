const multipliers = [8, 7, 6, 5, 4, 3, 2];

function isValidGovernmentDepartmentVAT(vatNumber: string): boolean {
  const departmentNumber = Number(vatNumber.slice(2));

  return departmentNumber > 0 && departmentNumber < 500;
}

function isValidHealthAuthorityVAT(vatNumber: string): boolean {
  const authorityNumber = Number(vatNumber.slice(2));

  return authorityNumber >= 500;
}

function isValidStandardVAT(vatNumber: string): boolean {
  const firstSevenDigits = Number(vatNumber.slice(0, 7));
  const checkDigits = Number(vatNumber.slice(7, 9));
  const total = multipliers.reduce((sum, multiplier, index) => {
    const digit = Number(vatNumber[index]);

    return sum + digit * multiplier;
  }, 0);

  if (Number(vatNumber) === 0) {
    return false;
  }

  const standardCheckDigits = (97 - (total % 97)) % 97;
  const newStyleCheckDigits =
    standardCheckDigits >= 55 ? standardCheckDigits - 55 : standardCheckDigits + 42;
  const isStandardVAT =
    standardCheckDigits === checkDigits &&
    firstSevenDigits < 9990001 &&
    (firstSevenDigits < 100000 || firstSevenDigits > 999999) &&
    (firstSevenDigits < 9490001 || firstSevenDigits > 9700000);
  const isNewStyleVAT = newStyleCheckDigits === checkDigits && firstSevenDigits > 1000000;

  return isStandardVAT || isNewStyleVAT;
}

export default function isValidUKVAT(rawVrn: string | number): boolean {
  if (!rawVrn) {
    return false;
  }

  // strip formatting characters and keep supported alpha prefixes
  const normalizedVrn = rawVrn
    .toString()
    .replace(/[^a-z\d]/gi, '')
    .toUpperCase();
  const vrn = normalizedVrn.startsWith('GB') ? normalizedVrn.slice(2) : normalizedVrn;

  if (/^\d{9}$/.test(vrn)) {
    return isValidStandardVAT(vrn);
  }

  if (/^\d{12}$/.test(vrn)) {
    return isValidStandardVAT(vrn.slice(0, 9));
  }

  if (/^GD\d{3}$/.test(vrn)) {
    return isValidGovernmentDepartmentVAT(vrn);
  }

  if (/^HA\d{3}$/.test(vrn)) {
    return isValidHealthAuthorityVAT(vrn);
  }

  return false;
}
