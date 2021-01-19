import * as React from 'react';
import { FormControl, FormLabel, FormText, FormGroup } from 'react-bootstrap';

interface IProps {
  field: any;
  isError: boolean;
  errorText: string;
}

const customFormGroup = ({ field, isError, errorText, ...props }: IProps) => {
  const propsObject = { ...props } as any;

  return (
    <FormGroup className={isError ? 'has-error has-feedback' : ''}>
      {field.name === 'username' ? (
        ''
      ) : (
        <>
          {propsObject['label'] ? (
            <FormLabel>{propsObject['label']}</FormLabel>
          ) : (
            <FormLabel>{propsObject['placeholder']}</FormLabel>
          )}
          <FormLabel className={propsObject['required'] ? 'text-danger' : ''}>
            {propsObject['required'] ? '*' : ''}
          </FormLabel>
        </>
      )}
      <FormControl {...field} {...props} />
      {isError && <FormText className="text-danger">{errorText}</FormText>}
    </FormGroup>
  );
};

export default customFormGroup;
