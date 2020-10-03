/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

type Props = {
  label: string;
  value: string;
  canEdit: boolean;
  width: string;
  onSaveClick(inputVal: string, label: string): any;
};

const TextField: React.FunctionComponent<Props> = ({
  label,
  value,
  width,
  canEdit,
  onSaveClick,
}: Props) => {
  const [inputVal, setInputVal] = React.useState<string>('');

  useEffect(() => {
    setInputVal(value);
  }, [value]);

  useEffect(() => {
    if (!canEdit && onSaveClick && inputVal !== '') {
      onSaveClick(inputVal, label);
    }
  }, [canEdit]);

  const handleInputChange = (e: any) => {
    setInputVal(e.target.value);
  };

  return canEdit ? (
    <input
      autoComplete="off"
      name={label}
      style={{ width, padding: '5px', fontSize: '14px' }}
      value={inputVal}
      onChange={handleInputChange}
    />
  ) : (
    <span>{inputVal}</span>
  );
};

export default TextField;
