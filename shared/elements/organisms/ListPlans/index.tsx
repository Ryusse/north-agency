import { Box } from '@mui/material';
import { useRouter } from 'next/router';

import { listStyles } from './styles';
import { PlanCard } from '@/elements/molecules';
import { IPlans } from '@/inteface';

interface Props {
  plans?: IPlans;
}

export const ListPlans = ({ plans }: Props) => {
  const { classes } = listStyles();

  const router = useRouter();

  return (
    <Box className={classes.styledContainer}>
      <PlanCard />
      <PlanCard />
      <PlanCard />
      <PlanCard />
      <PlanCard />
      <PlanCard />
    </Box>
  );
};
