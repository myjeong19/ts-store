import { Form } from 'react-router';
import { Card, CardHeader, CardContent, CardTitle, Button } from '@/shared/shadcn-ui';

import { SubmitButton, FormInput, ButtonLink } from '@/shared/ui';

const Register = () => (
  <section className="h-screen grid place-items-center">
    <Card className="w-96 bg-muted">
      <CardHeader>
        <CardTitle className="text-center">Register</CardTitle>
      </CardHeader>
      <CardContent>
        <Form method="post">
          <FormInput type="text" name="username" defaultValue="a1234test" />
          <FormInput type="email" name="email" defaultValue="a1234test@test.com" />
          <FormInput type="password" name="password" defaultValue="test1234" />
          <SubmitButton text="Register" className="w-full mt-4" />

          <p className="text-center mt-4">
            Already have an account? <ButtonLink to="/login">Login</ButtonLink>
          </p>
        </Form>
      </CardContent>
    </Card>
  </section>
);

export default Register;
