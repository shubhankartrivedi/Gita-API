'use client'
import React from 'react';

export default function Dropdown({ options, onSelect, Selected }) {

    return (
        <div className="relative text-left">
            <select 
                value={Selected.value}
                onChange={(e) => {
                    const selectedOption = options.map((option) => option.value == e.target.value ? option : null).filter((option) => option != null)[0];

                    if (onSelect && selectedOption) {
                        onSelect(selectedOption);
                    }
                }}
                className="dark:bg-gray-700 bg-gray-200 dark:text-gray-400 text-gray-600 px-4 py-2 w-full focus:outline outline-yellow-500 dark:outline-yellow-800 appearance-none pr-8 rounded-3xl"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            {/* Custom Arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 dark:text-gray-400 text-gray-600">
                <i className="fa-solid fa-caret-down"></i>
            </div>
        </div>
    );
}