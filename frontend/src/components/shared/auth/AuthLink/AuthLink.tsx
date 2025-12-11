import { type FC, type ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import './AuthLink.css';

interface AuthLinkProps extends LinkProps {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

/**
 * Reusable link component for authentication pages
 * Includes hover animations and consistent styling
 */
const AuthLink: FC<AuthLinkProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...linkProps 
}) => {
  return (
    <Link
      className={`auth-link auth-link-${variant} ${className}`}
      {...linkProps}
    >
      {children}
    </Link>
  );
};

export default AuthLink;
