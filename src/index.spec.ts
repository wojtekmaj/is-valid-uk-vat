import { describe, expect, it } from 'vitest';

import isValidUKVAT from './index.js';

describe('isValidUKVAT', () => {
  it('returns false for no input', () => {
    // @ts-expect-error-next-line
    const result = isValidUKVAT();

    expect(result).toBe(false);
  });

  it('returns false for non-VAT input', () => {
    const result = isValidUKVAT('elephants');

    expect(result).toBe(false);
  });

  it('returns false for partially numeric input', () => {
    const result = isValidUKVAT('434031494fox');

    expect(result).toBe(false);
  });

  it('returns false for partially numeric input', () => {
    const result = isValidUKVAT('GB434031494FOX');

    expect(result).toBe(false);
  });

  it('returns false for invalid input with invalid length', () => {
    const result = isValidUKVAT('123');

    expect(result).toBe(false);
  });

  it('returns false for invalid input with invalid checksum', () => {
    const result = isValidUKVAT('123456789');

    expect(result).toBe(false);
  });

  it('returns false for invalid input in a reserved standard range', () => {
    const result = isValidUKVAT('010000090');

    expect(result).toBe(false);
  });

  it('returns false for invalid input in a reserved new-style range', () => {
    const result = isValidUKVAT('100000034');

    expect(result).toBe(false);
  });

  it('returns true for valid numeric input', () => {
    const result = isValidUKVAT(434031494);

    expect(result).toBe(true);
  });

  it('returns true for valid input', () => {
    const result = isValidUKVAT('434031494');

    expect(result).toBe(true);
  });

  it('returns true for valid input with spaces', () => {
    const result = isValidUKVAT('434 0314 94');

    expect(result).toBe(true);
  });

  it('returns true for valid input with dashes', () => {
    const result = isValidUKVAT('434-0314-94');

    expect(result).toBe(true);
  });

  it('returns true for valid input with GB prefix', () => {
    const result = isValidUKVAT('GB434031494');

    expect(result).toBe(true);
  });

  it('returns true for valid branch input', () => {
    const result = isValidUKVAT('GB434031494001');

    expect(result).toBe(true);
  });

  it('returns true for valid old-style input', () => {
    const result = isValidUKVAT('424807302');

    expect(result).toBe(true);
  });

  it('returns true for valid government department input', () => {
    const result = isValidUKVAT('GD001');

    expect(result).toBe(true);
  });

  it('returns true for valid health authority input', () => {
    const result = isValidUKVAT('HA500');

    expect(result).toBe(true);
  });

  it('returns false for invalid government department input', () => {
    const result = isValidUKVAT('GD500');

    expect(result).toBe(false);
  });

  it('returns false for invalid health authority input', () => {
    const result = isValidUKVAT('HA499');

    expect(result).toBe(false);
  });
});
