import styled from 'styled-components';

const inputOutlineColor = '#808289';//var(--ion-color-medium-shade)
const inputBottomBorderSecondaryColor = '#ffb46d'; //var(--ion-color-secondary)
const inputBottomBorderPrimaryColor = '#0c6055'; //var(--ion-color-primary)
const disabledInputBackgroundColor = '#ddd';
const errorTextColor = '#9a0000'; // var(--ion-color-danger-shade)

const borderlessMixin = () => {
  return `
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 0.125rem solid;
  `;
};

const InputFieldWrapper = styled.div`
  display: flex;
  width: 100%;
  border: none;
  overflow: hidden;

  &.outline {
    border: 0.0625rem solid ${inputOutlineColor};
  }

  &.primary {
    ${borderlessMixin}
    border-bottom-color: ${inputBottomBorderPrimaryColor};
  }

  &.secondary {
    ${borderlessMixin}
    border-bottom-color: ${inputBottomBorderSecondaryColor};
  }
`;

const StyledLabel = styled.label`
  display: block;
  line-height: 1;
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  width: 100%;
  background: none;
  border: none;

  padding-left: 0.5rem;
  padding-top: 0.65rem;
  padding-bottom: 0.5rem;

  &:focus {
    outline: none;
  }

  :global(.native-input) {
    border-radius: 0;
  }

  &.withIcon {
    width: 87.6%;
    display: inline-flex;
  }

  &.disabled {
    background-color: ${disabledInputBackgroundColor};

    :global(.native-input) {
      cursor: not-allowed;
    }
  }
`;

const IconBtn = styled.button`
  position: relative;
  display: inline-flex;
  padding: 0.6rem 0.32rem;
  background-color: #fff;
  font-size: 1.3rem;
  outline: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left: 1px solid #f4f4f4;
`;

const InputFooterCopy = styled.span`
  font-size: 0.75rem;
  position: relative;
  line-height: 1;
  top: 0.18rem;

  &.error {
    font-weight: bold;
    color: ${errorTextColor};

    &::before {
      content: '⚠ ';
      vertical-align: sub;
      font-size: 1.15rem;
    }
  }
`;

export {
  InputFieldWrapper,
  StyledLabel,
  StyledInput,
  IconBtn,
  InputFooterCopy,
};
