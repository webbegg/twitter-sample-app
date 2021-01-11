import styled from 'styled-components'

const InputField = ({ name, placeholder, value, onChange, onAction }) => {
  const onChangeHandle = ({ currentTarget }) => {
    onChange(currentTarget.value)
  }

  const keyDownHandle = ({ key }) => {
    if (key === 'Enter') {
      onAction && onAction(value)
    } else if (key === 'Escape') {
      onChange('')
    }
  }

  return (
    <Container>
      <Input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandle}
        onKeyDown={keyDownHandle}
      />
    </Container>
  )
}

export default InputField

export const Container = styled.div`
  align-items: center;
  background-color: #e2e8f0;
  padding: 1rem;
  display: flex;
  width: 100%;
`

export const Input = styled.input`
  border: none;
  border-radius: 0.32rem;
  color: #4a5568;
  outline: none;
  font-size: 1.1rem;
  padding: 0.62rem 1rem;
  width: 100%;

  &::placeholder {
    color: #a0aec0;
  }
`
