import {
  formatUserMessageStart,
  flipMessageDisplay,
} from '../messageManipulation';

describe('formatUserMessageStart', () => {
  const response = { data: [{ key: 1, show: false }, { key: 2, show: true }] };
  const expected = { data: [{ key: 1, show: false }, { key: 2, show: false }] };

  it('should execute the formatUserMessageStart', async () => {
    const results = await formatUserMessageStart(response);
    expect(results).toEqual(expected);
  });
});

describe('flipMessageDisplay', () => {
  const response = [
    { uuid: '1', show: false },
    { uuid: '2', show: true },
    { uuid: '1', show: true },
  ];
  const expected = [
    { uuid: '1', show: true },
    { uuid: '2', show: true },
    { uuid: '1', show: false },
  ];

  it('should execute the flipMessageDisplay', async () => {
    const results = await flipMessageDisplay(response, {
      uuid: '1',
    });
    expect(results).toEqual(expected);
  });
});
