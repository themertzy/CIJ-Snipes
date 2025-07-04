'use strict';

var jsxRuntime = require('react/jsx-runtime');

const Button = ({ variant = 'primary', children, className = '', ...props }) => {
    const base = 'px-4 py-2 rounded font-semibold';
    const styles = variant === 'primary'
        ? 'bg-blue-600 text-white hover:bg-blue-700'
        : 'bg-gray-300 text-black hover:bg-gray-400';
    return (jsxRuntime.jsx("button", { className: `${base} ${styles} ${className}`, ...props, children: children }));
};

const EditableCell = ({ name, value, isEditing, type = 'text', onChange, }) => {
    return isEditing ? (jsxRuntime.jsx("input", { name: name, value: value ?? '', onChange: onChange, type: type, className: "border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" })) : (jsxRuntime.jsx("div", { className: "px-1", children: value }));
};

exports.Button = Button;
exports.EditableCell = EditableCell;
//# sourceMappingURL=index.cjs.js.map
