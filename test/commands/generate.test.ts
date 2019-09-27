import { expect, test } from '@oclif/test'

describe('generate', () => {
  test
    .stdout()
    .command(['generate', 'stort', 'todoStore'])
    .it('runs generate store', ctx => {
      expect(ctx.stdout).to.contain('generating')
    })
})
