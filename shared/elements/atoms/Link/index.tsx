import { ReactNode } from 'react';

import { Typography } from '@mui/material';
import MuiLink from '@mui/material/Link';
import NextLink from 'next/link';

import { linkStyles } from './styles';
import { Button } from '@/elements/atoms';

export type Type = 'link' | 'linkMenu' | 'button';

interface Props {
  href?: string;
  children: ReactNode;
  active?: boolean;
  type: Type;
  onScroll?: boolean;
}

export const Link = ({
  type,
  href,
  children,
  active,
  onScroll,
  ...props
}: Props) => {
  const { classes } = linkStyles({ active, type, onScroll });

  if (type === 'link' || !type)
    return (
      <NextLink href={href} passHref>
        <MuiLink {...props} className={classes.styledLink}>
          <Typography>{children}</Typography>
        </MuiLink>
      </NextLink>
    );
  if (type === 'button') {
    return (
      <NextLink href={href} passHref>
        <Button>{children}</Button>
      </NextLink>
    );
  }
};
