'use client';

import React from 'react';
import Button from '@mui/material/Button';


type ButtonProps = {
    onClick?: () => void;
    children: React.ReactNode;
    variant?: 'text' | 'outlined' | 'contained';
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
};

const CustomButton: React.FC<ButtonProps> = ({
    onClick,
    children,
    variant = 'contained',
    color = 'primary',
    size = 'medium',
    disabled = false,
}) => {
    return (
        <Button
            onClick={onClick}
            variant={variant}
            color={color}
            size={size}
            disabled={disabled}
        >
            {children}
        </Button>
    );
};

export default CustomButton;