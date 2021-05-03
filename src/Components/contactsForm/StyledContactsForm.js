import styled from 'styled-components'

export const StyledContactsForm = styled.form`
    width:400px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    border-color: black;
    padding: 15px;
    border-radius: 2px;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%);
    margin-bottom: 50px;
    
input {
    width: 100%;
  padding: 12px 10px;
  margin: 8px 0;
  display: inline-block;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid #ccc8c8;
  transition: .3s border-color;
    &:hover {
  border: 1px solid #0f55eb;
}
}
input::placeholder {
  color: rgba(0, 26, 255, 0.336);
  font-size: 1em;
  font-style: italic;
}
`