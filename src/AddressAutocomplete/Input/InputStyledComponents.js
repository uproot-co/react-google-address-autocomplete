import styled from 'styled-components';

// const defaultOutlineColor = '#808289';

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
  // border-radius: 0.25rem;
  border: none;
  overflow: hidden;

  &.outline {
    border: 0.0625rem solid var(--ion-color-medium-shade);
  }

  &.primary {
    ${borderlessMixin}
    border-bottom-color: var(--ion-color-primary);
  }

  &.secondary {
    ${borderlessMixin}
    border-bottom-color: var(--ion-color-secondary);
  }

  &.outline {
    border: 0.0625rem solid var(--ion-color-medium-shade);
  }

  &.primary {
    ${borderlessMixin}
    border-bottom-color: var(--ion-color-primary);
  }

  &.secondary {
    ${borderlessMixin}
    border-bottom-color: var(--ion-color-secondary);
  }
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
            width: 100%;
            background: none;
            border: none;

            --padding-start: 0.5rem;
            --padding-top: 0.65rem;
            --padding-bottom: 0.5rem;

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
                background-color: #ddd;

                :global(.native-input) {
                    cursor: not-allowed;
                }
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
    color: var(--ion-color-danger-shade);

    &::before {
      content: '⚠ ';
      vertical-align: sub;
      font-size: 1.15rem;
    }
  }
`;

//  border: ${props => props.outline ? `0.0625rem solid ${props.outline}` : `0.0625rem solid ${defaultOutlineColor}`};

export {
  InputFieldWrapper,
  StyledLabel,
  StyledInput,
  IconBtn,
  InputFooterCopy,
};
