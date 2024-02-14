import {View, Text, TextInput, Button} from 'react-native';
import React from 'react';
import {FormProvider, useForm,Controller} from 'react-hook-form';

interface FormData {
  name: string;
  mobile: string;
}

export default function Form() {


  function onSubmit(data: FormData) {
    try {
      console.log('data', data);
    } catch (error) {}
  }


  const formMethods = useForm<FormData>({
    defaultValues: {
      name: '',
      mobile: '',
    },
  });


  return (
    <View>
      <FormProvider {...formMethods}>
        <Controller
          control={formMethods.control}
          render={({field, formState: {errors}}) => (
            <TextInput onChangeText={t => field.onChange(t)} {...field} />
          )}
          name={'name'}
        />
        <Controller
          control={formMethods.control}
          render={({field, formState: {errors}}) => (
            <TextInput onChangeText={t => field.onChange(t)} {...field} />
          )}
          name={'mobile'}
        />

        <Button title="next" onPress={formMethods.handleSubmit(onSubmit)} />
      </FormProvider>
    </View>
  );
}
