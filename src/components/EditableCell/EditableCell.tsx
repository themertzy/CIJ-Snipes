import React from 'react';
import { EditableCellProps } from './EditableCell.types';

export const EditableCell: React.FC<EditableCellProps> = ({
  name,
  value,
  isEditing,
  type = 'text',
  onChange,
}) => {
  return isEditing ? (
    <input
      name={name}
      value={value ?? ''}
      onChange={onChange}
      type={type}
      className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  ) : (
    <div className="px-1">{value}</div>
  );
};
