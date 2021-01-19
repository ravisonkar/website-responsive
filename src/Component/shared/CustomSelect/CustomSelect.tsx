import * as React from 'react';
import { FormLabel, FormText, FormGroup } from 'react-bootstrap';
import Select from 'react-select';

import { ActionMeta, ValueType } from 'react-select/src/types';
import { VoidHandler } from '../../../shared/types';
import { IOption } from '../../../classes/IOption';

export type CustomSelectOnChangeHandler = (option: IOption) => void;

interface IProps {
  isError: boolean;
  errorText: string;
  onChange: CustomSelectOnChangeHandler;
  options: IOption[];
  onMenuOpen: VoidHandler;
  disabled: boolean;
}

const customSelect = ({
  isError,
  errorText,
  onChange,
  options,
  onMenuOpen,
  disabled,
  ...props
}: IProps) => {
  const propsObject = { ...props } as any;

  const onSelectChange = (value: ValueType<IOption>) => {
    onChange(value as IOption);
  };

  return (
    <FormGroup className={isError ? 'has-error has-feedback' : ''}>
      <FormLabel>{propsObject['placeholder']}</FormLabel>
      <FormLabel className={propsObject['required'] ? 'text-danger' : ''}>
        {propsObject['required'] ? '*' : ''}
      </FormLabel>
      <Select
        {...props}
        className={
          isError
            ? 'custom-select-error  custom-select-height'
            : 'custom-select-default custom-select-height'
        }
        options={options}
        isDisabled={disabled}
        onChange={onSelectChange}
        onMenuOpen={onMenuOpen}
      ></Select>
      {isError && <FormText className="text-danger">{errorText}</FormText>}
    </FormGroup>
  );
};

export default customSelect;
