import React from 'react';
export interface EditableCellProps {
    name: string;
    value: string | number | undefined;
    isEditing: boolean;
    type?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
