import React from 'react';
import TextInput from 'patterns/TextInput';

/** Required TextInput with error */
export default function ExampleError() {
  return (
    <TextInput
      htmlId="example-optional"
      label="First Name"
      name="firstname"
      onChange={() => {}}
      required
      error="First name is required."
    />
  );
}