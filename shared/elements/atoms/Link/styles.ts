import { makeStyles } from 'tss-react/mui';

export const linkStyles = makeStyles<{ active: boolean; type: string }>()(
  (theme, { active, type }) => ({
    styledLink: {
      position: 'relative',
      textDecoration: 'none',
      color: theme.palette.common.white,
      opacity: active ? '1' : '0.7',
      fontWeight: 500,
      paddingBlock: 20,
      paddingInline: '2rem',

      '&:before': {
        content: "''",
        position: 'absolute',
        width: active ? '100%' : '0',
        height: '2px',
        bottom: '-3px',
        left: '50%',
        transform: 'translate(-50%,0%)',
        backgroundColor: theme.palette.common.white,
        opacity: active ? '1' : '0.7',
        visibility: active ? 'visible' : 'hidden',
        transition: 'all 0.3s ease-in-out',
      },
    },
  })
);
