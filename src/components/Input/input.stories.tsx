import { Meta, StoryObj } from '@storybook/react'
import Input from './input'
import { parameters } from '@/utils/storybook-utils.tsx'

const inputMeta: Meta<typeof Input> = {
  title: 'Data Entry/Input',
  component: Input,
  decorators: [
    Story => (
      <div style={{ width: '350px' }}>
        <Story />
      </div>
    )
  ]
}

export default inputMeta

type Story = StoryObj<typeof Input>

const Template: Story = {
  render: args => <Input {...args} />
}

const defaultInputCode = `
import { Input } from '@a-front-end-project/a-ui'

const App = () => (
  <Input placeholder="Default Input" />
)
`

export const DefaultInput: Story = {
  ...Template,
  args: {
    placeholder: 'Default Input'
  },
  parameters: parameters({ code: defaultInputCode })
}

const disabledInputCode = `
import { Input } from '@a-front-end-project/a-ui'

const App = () => (
  <Input placeholder="Disabled Input" disabled />
)
`

export const DisabledInput: Story = {
  ...Template,
  args: {
    placeholder: 'Disabled Input',
    disabled: true
  },
  parameters: parameters({ code: disabledInputCode })
}

const largeInputCode = `
import { Input } from '@a-front-end-project/a-ui'

const App = () => (
  <Input size="lg" placeholder="Large Input" />
)
`

export const LargeInput: Story = {
  ...Template,
  args: {
    placeholder: 'Large Input',
    size: 'lg'
  },
  parameters: parameters({ code: largeInputCode })
}

const smallInputCode = `
import { Input } from '@a-front-end-project/a-ui'

const App = () => (
  <Input size="sm" placeholder="Small Input" />
)
`

export const SmallInput: Story = {
  ...Template,
  args: {
    placeholder: 'Small Input',
    size: 'sm'
  },
  parameters: parameters({ code: smallInputCode })
}

const inputWithIconCode = `
import { Input } from '@a-front-end-project/a-ui'

const App = () => (
  <Input icon="search" placeholder="Input With Icon" />
)
`

export const InputWithIcon: Story = {
  ...Template,
  args: {
    placeholder: 'Input With Icon',
    icon: 'search'
  },
  parameters: parameters({ code: inputWithIconCode })
}

const inputWithPrependCode = `
import { Input } from '@a-front-end-project/a-ui'

const App = () => (
  <Input prepend="https://" placeholder="google.com" />
)
`

export const InputWithPrepend: Story = {
  ...Template,
  args: {
    placeholder: 'google.com',
    prepend: 'https://'
  },
  parameters: parameters({ code: inputWithPrependCode })
}

const inputWithAppendCode = `
import { Input } from '@a-front-end-project/a-ui'

const App = () => (
  <Input append=".com" placeholder="google" />
)
`

export const InputWithAppend: Story = {
  ...Template,
  args: {
    placeholder: 'google',
    append: '.com'
  },
  parameters: parameters({ code: inputWithAppendCode })
}
