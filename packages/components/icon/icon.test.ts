import { describe, expect, test, vi } from 'vitest';
import { library } from '@fortawesome/fontawesome-svg-core';

vi.mock('@fortawesome/fontawesome-svg-core', () => {
  return {
    library: {
      add: vi.fn()
    }
  };
});

import './fontawesome';

describe('icon', () => {
  test('libary.add should be excute when icon is imported', async () => {
    expect(library.add).toHaveBeenCalled();
  });
});
