import React from 'react';

interface ButtonProps {
    onClick?: () => void;
    children: string;
}
declare const Button: React.FC<ButtonProps>;

interface CardProps {
    cardTitle: string;
    cardText: string;
    children: React.ReactNode;
}
declare const Card: React.FC<CardProps>;

export { Button, Card };
