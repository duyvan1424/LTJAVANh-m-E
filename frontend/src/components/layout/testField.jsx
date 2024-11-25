// BasicTextFields.jsx
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({
  label,
  type = "text",
  value,
  name,
  onChange,
  required,
  error,
  helperText,
  sx
}) {
  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        ...sx
      }}
    >
      <TextField 
        label={label} 
        id={name} 
        name={name} 
        type={type} 
        value={value} 
        onChange={onChange} 
        required={required ?? null} 
        error={error} 
        helperText={helperText} 
        fullWidth 
      />
    </Box>
  );
}
