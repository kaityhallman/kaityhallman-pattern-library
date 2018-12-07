import React from 'react';
import TextInput from 'patterns/TextInput';

/** Optional TextInput */
export default function ExampleOptional() {
  return (
    <TextInput
      htmlId="example-optional"
      label="First Name"
      name="firstname"
      onChange={() => {}}
    />
  );
}