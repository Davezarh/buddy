import React, { useState, useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import FormField from 'components/molecules/FormsField/FormField';
import Button from 'components/atoms/Button/Button';
import { UsersContext } from '../providers/UsersProviders';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const AddUser = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const context = useContext(UsersContext);

  const handleInputChange = (e) => {
    console.log(formValues);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value, //Klucz w obiekcie "e.target.name" jeżeli nastąpi zmiana to zostanie przypisane do naszego klucz w obiekcie.
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    context.handleAddUser(formValues);
    setFormValues(initialFormState);
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <h1>Add new student</h1>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange}></FormField>
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange}></FormField>
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange}></FormField>
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
};

export default AddUser;
