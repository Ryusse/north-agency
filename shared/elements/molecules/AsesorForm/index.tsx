import { Box, Stack } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

import { type } from './../../atoms/Input/index';
import { Button, Input } from '@/elements/atoms';

type FormValues = {
  name: string;
  lastName: string;
  yearExperience: number;
  salesPlanes: number;
  phoneNumber: number;
};

export const AsesorForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    control,

    formState: { errors },
  } = useForm<FormValues>({
    mode: 'all',
    reValidateMode: 'onChange',
  });

  const onSubmit = async () => {
    const formData = new FormData();

    console.log(getValues('name'));
    console.log(getValues('lastName'));
    console.log(getValues('yearExperience'));
    console.log(getValues('salesPlanes'));
    console.log(getValues('phoneNumber'));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 
      <Controller
        render={({ field }) => <Input {...field} label="Ingresa tu nombre" />}
        name="name"
        control={control}
      /> */}
      <Stack direction="column" spacing={3}>
        <Input
          type="text"
          label="Ingresa tu nombre"
          {...register('name', { required: true })}
        />

        <Input
          type="text"
          label="Ingresa tu apellido"
          {...register('lastName', { required: true })}
        />

        <Input
          type="number"
          label="Años de experiencia"
          {...register('yearExperience', { required: true })}
        />

        <Input
          type="number"
          label="Planes vendidos"
          {...register('salesPlanes', { required: true })}
        />

        <Input
          type="number"
          label="Número de teléfono"
          {...register('phoneNumber', { required: true })}
        />
      </Stack>

      <Box marginTop="4.375rem">
        <Button buttonName="primary" type="submit">
          Enviar
        </Button>
      </Box>
    </form>
  );
};
