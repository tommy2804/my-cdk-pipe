import { handler } from '../src';

describe('My first CDK app tests', () => {
  it('returns name and text', async () => {
    const output = await handler({ name: 'tommy' });
    expect(output).toStrictEqual('Good Job tommy');
  });

  it('returns no name and text', async () => {
    const output = await handler({ name: '' });
    expect(output).toStrictEqual('Bad Job');
  });
});
