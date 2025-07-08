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
export declare const EditableCell: React.FC<EditableCellProps>;
