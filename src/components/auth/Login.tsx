import {
  Button,
  Card,
  FlexChild,
  FlexLayout,
  FormElement,
  TextField,
  TextStyles,
} from '@cedcommerce/ounce-ui';
import React, { useState } from 'react';
import AuthLayout from '../layout/AuthLayout';
import {
  emailValidation,
  nameValidation,
  singlePasswordValidation,
} from '../shared/FormValidations';
const Login = () => {
  const [data, setData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState({ name: '', email: '', password: '' });

  const handleChange = (e: string, name: string) => {
    setData({ ...data, [name]: e });
    errorChecker(name);
  };
  const errorChecker = (type: string) => {
    switch (type) {
      case 'email': {
        const res = emailValidation(data?.email);
        if (!res.success) setError({ ...error, email: res?.msg });
        else setError({ ...error, email: '' });
        break;
      }
      case 'name': {
        const res = nameValidation(data?.name);
        if (!res.success) setError({ ...error, name: res?.msg });
        else setError({ ...error, name: '' });
        break;
      }
      case 'password': {
        const res = singlePasswordValidation(data?.password);
        if (!res.success) setError({ ...error, password: res?.msg });
        else setError({ ...error, password: '' });
        break;
      }
    }
  };
  return (
    <AuthLayout>
      <FlexLayout halign="center" spacing="extraLoose">
        <FlexChild desktopWidth="66" tabWidth="100" mobileWidth="100">
          <div
            style={{
              margin: 'auto',
              maxWidth: '586px',
            }}
          >
            <Card cardType="Shadowed">
              <FlexLayout direction="vertical" spacing="loose">
                <TextStyles fontweight="extraBold" subheadingTypes="XS-1.6" type="SubHeading">
                  Validation Form
                </TextStyles>
                <FormElement key={null}>
                  <form>
                    <TextField
                      name="Name"
                      required={true}
                      placeHolder="Enter name"
                      type="text"
                      onChange={(e) => handleChange(e, 'name')}
                      error={error?.name ? true : false}
                      showHelp={error?.name ?? ''}
                      onblur={() => errorChecker('name')}
                    />
                    <TextField
                      name="Email"
                      required={true}
                      placeHolder="Enter email address"
                      type="text"
                      onChange={(e) => handleChange(e, 'email')}
                      error={error?.email ? true : false}
                      showHelp={error?.email ?? ''}
                      onblur={() => errorChecker('email')}
                    />
                    <TextField
                      name="Password"
                      required={true}
                      type="password"
                      onChange={(e) => handleChange(e, 'password')}
                      error={error?.password ? true : false}
                      showHelp={error?.password ?? ''}
                      onblur={() => errorChecker('password')}
                    />

                    <FlexLayout halign="end" spacing="loose">
                      <Button
                        thickness="thin"
                        type="Primary"
                        disable={
                          data?.email &&
                          data?.name &&
                          data?.password &&
                          !error?.email &&
                          !error?.name &&
                          !error?.password
                            ? false
                            : true
                        }
                        onClick={() => console.log('first')}
                      >
                        Validate
                      </Button>
                    </FlexLayout>
                  </form>
                </FormElement>
              </FlexLayout>
            </Card>
          </div>
        </FlexChild>
      </FlexLayout>
    </AuthLayout>
  );
};

export default Login;
