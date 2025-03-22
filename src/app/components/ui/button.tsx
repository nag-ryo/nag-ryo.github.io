'use client';

import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { blue, green, orange } from '@mui/material/colors';


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
            sx={{
                textTransform: 'none',
                minWidth: '32px',
                padding: '8px 12px',
                '&:hover': {
                    backgroundColor: blue[700],
                }
            }}
        >
            {children}
        </Button>
    );
};

export const BlueButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(blue[50]),
    backgroundColor: blue[500],
    '&:hover': {
        backgroundColor: blue[700],
    },
}));

export const OrangeButton = styled(Button)<ButtonProps>(({ }) => ({
    color: orange[500],
    backgroundColor: orange[50],
    '&:hover': {
        backgroundColor: orange[700],
    },
}));

export const GreenButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(green[50]),
    backgroundColor: green[500],
    '&:hover': {
        backgroundColor: green[700],
    },
}));

export const GrayButton = styled(Button)<ButtonProps>(() => ({
    color: 'white',
    backgroundColor: 'gray',
    '&:hover': {
        backgroundColor: 'black',
    },
}));

export default CustomButton;