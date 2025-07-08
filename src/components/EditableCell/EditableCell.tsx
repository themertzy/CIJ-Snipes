/**
 * EditableCell Component
 *
 * A reusable table cell component that toggles between read-only and input mode.
 * Useful for building editable tables (e.g., with TanStack or custom implementations).
 *
 * Usage:
 * ```tsx
 * <EditableCell
 *   name="quantity"
 *   value={item.quantity}
 *   isEditing={isRowEditing}
 *   type="number"
 *   onChange={(e) => handleChange(e, item.id)}
 * />
 * ```
 *
 * Props:
 * - `name`: Input field name
 * - `value`: Cell value to display or edit
 * - `isEditing`: Boolean toggle for edit mode
 * - `type`: Input type (default: "text")
 * - `onChange`: Input change handler
 */


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
