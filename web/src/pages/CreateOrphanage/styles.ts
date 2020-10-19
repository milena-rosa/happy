import styled from 'styled-components'

interface OpenOnWeekendsProps {
  openOnWeekends: boolean
}

export const Container = styled.div`
  display: flex;

  main {
    flex: 1;
  }
`

export const CreateOrphanageForm = styled.form`
  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;
  margin: 64px auto;
  overflow: hidden;
  padding: 64px 80px;
  width: 700px;

  fieldset {
    border: 0;

    & + fieldset {
      margin-top: 80px;
    }

    legend {
      border-bottom: 1px solid #d3e2e5;
      color: #5c8599;
      font-size: 32px;
      font-weight: 700;
      line-height: 34px;
      margin-bottom: 40px;
      padding-bottom: 24px;
      width: 100%;
    }
  }

  .leaflet-container {
    border: 1px solid #d3d2e5;
    border-radius: 20px;
    margin-bottom: 40px;
  }
`

export const InputBlock = styled.div`
  /* .input-block + .input-block */
  & + div {
    margin-top: 24px;
  }

  label {
    color: #8fa7b3;
    display: flex;
    line-height: 24px;
    margin-bottom: 8px;

    span {
      color: #8fa7b3;
      font-size: 14px;
      line-height: 24px;
      margin-left: 24px;
    }
  }

  input,
  textarea {
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    color: #5c8599;
    outline: none;
    width: 100%;
  }

  input {
    height: 64px;
    padding: 0 16px;
  }

  textarea {
    line-height: 28px;
    min-height: 120px;
    max-height: 240px;
    padding: 16px;
    resize: vertical;
  }

  input[type='file'] {
    display: none;
  }
`

export const ImagesContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(5, 1fr);

  label {
    align-items: center;
    background: #f5f8fa;
    border: 1px dashed #96d2f0;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    height: 96px;
    justify-content: center;
  }

  div {
    position: relative;

    img {
      border-radius: 20px;
      height: 96px;
      object-fit: cover;
      width: 100%;
    }

    button {
      align-items: center;
      background: #fff;
      border: 1px solid #d3e2e5;
      border-radius: 0px 20px;
      cursor: pointer;
      display: flex;
      height: 40px;
      justify-content: center;
      position: absolute;
      right: 0;
      top: 0;
      width: 40px;
    }
  }
`

export const ButtonSelect = styled.div`
  color: #37c77f;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const SelectOpenOnWeekends = styled.button<OpenOnWeekendsProps>`
  background: ${props => (props.openOnWeekends ? '#edfff6' : '#f5f8fa')};
  border: 1px solid ${props => (props.openOnWeekends ? '#a1e9c5' : '#d3e2e5')};
  color: ${props => (props.openOnWeekends ? '#37c77f' : '#5c8599')};
  cursor: pointer;
  height: 64px;

  &:first-child {
    border-radius: 20px 0px 0px 20px;
  }

  &:last-child {
    border-left: 0;
    border-radius: 0 20px 20px 0;
  }
`

export const ConfirmButton = styled.button`
  align-items: center;
  background: #3cdc8c;
  border: 0;
  border-radius: 20px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  font-weight: 800;
  height: 64px;
  justify-content: center;
  margin-top: 64px;
  transition: background-color 0.2s;
  width: 100%;

  &:hover {
    background: #36cf82;
  }

  svg {
    margin-right: 16px;
  }
`
