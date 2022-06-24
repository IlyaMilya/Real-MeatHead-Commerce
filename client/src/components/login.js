
import { TextInput, Checkbox, Button, Group, Box, PasswordInput, JsonInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import {useNavigate} from 'react-router-dom'


function Login() {

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
    // validate: {
    //   email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    // },
  });
 
const navy = useNavigate()

const handleSubmit = form.onSubmit((values) =>{
  fetch('/login',{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(values),
  })
  .then((res) => res.json()).then((data)=>navy('/productPage'))
})
  
  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={handleSubmit}>
        <TextInput
          required
          label="Username"
          placeholder="username"
          {...form.getInputProps('username')}
        />
        <PasswordInput
          required
          label="Password"
          placeholder="password"
          {...form.getInputProps('password')}
        />
        <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />
        <Group position="right" mt="md">
          <Button type="submit">Log in</Button>
        </Group>
      </form>
    </Box>
  );
}
export default Login;