import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Divider, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import RowRadioButtonsGroup from '../../atoms/RowRadioButtonsGroup/rowRadioButtonsGroup';
import { StyledInput } from '../../atoms/Input/input'
import globalStyles from "../../../styles/Global.module.scss";
import { PasswordValidator } from "../../molecules/PasswordValidator/passwordValidator";
import { useTranslation } from "react-i18next";
import FormMessage from "../../molecules/FormMessage/formMessage";
import { styles } from "./style"
import Link from "next/link";

export default function Register({
  OnRegisterClicked,
  formError = null
}) {
    const { t } = useTranslation('translation', { keyPrefix: 'Register' });
    const { handleSubmit, setError, clearErrors, control, watch, formState: { errors } } = useForm(
        {
            defaultValues: {
                firstName: '',
                lastName: '',
                email: '',
                mobile: '',
                password: '',
                preferredCommunication: ''
            }
        }
    );

    const onSubmit = data => {
        // dummy error validation
        // setError("firstName", { type: 'custom', message: 'An error occured' })
        // setError("lastName", { type: 'custom', message: 'An error occured' })
        // setError("mobile", { type: 'custom', message: 'An error occured' })
        // setError("password", { type: 'custom', message: 'An error occured' })

        OnRegisterClicked(data)
    };

    const options = [
        { label: 'Email', value: 'email' },
        { label: 'Phone', value: 'phone' },
        { label: 'Both', value: 'both' }
    ]

    const watchedPassword = watch("password", "");
    const [watchedEmail, watchedMobile] = watch(["email", "mobile"]); // you can also target specific fields by their names
    const getRegisteredUsername = () => {
        return watchedEmail || watchedMobile || '(auto-populated email id/phone number)'
    }
    
    let lengthRegex = new RegExp(/^[^\s]{8,20}$/);
    let numberRegex = new RegExp('[0-9]');
    let alphabethRegex = new RegExp('[A-Za-z]');
    let specialRegex = new RegExp('[@#$%^&-+=()]');
    let hasTripleRegex = new RegExp('([a-z\\d])\\1\\1');
    const passwordValidator = [
        { label: 'Password length should range from 8 to 20 characters', validate: !lengthRegex.test(watchedPassword) },
        { label: 'Password should contain at least one numerical character (0-9)', validate: !numberRegex.test(watchedPassword) },
        { label: 'Password should contain at least one alphabet (a-z)', validate: !alphabethRegex.test(watchedPassword) },
        { label: 'Password should contain at least one special character', validate: !specialRegex.test(watchedPassword) },
        { label: 'Password should not contain your username', validate: watchedPassword.indexOf(watchedEmail || watchedMobile) > -1 },
        { label: 'Password should not contain 3 or more identical characters consecutively', validate: hasTripleRegex.test(watchedPassword) },
    ]
    const isPasswordError = watchedPassword.length > 0 // && passwordValidator.filter(v => v.validate).length > 0

    return (
        <Box className={globalStyles.container}>
            <Stack spacing={3}>
                <Typography variant="h1" sx={styles.titleStyles}>
                    User Registration
                </Typography>
                { formError.content
                  ? <FormMessage success={false} title={formError.title}>{formError.content}</FormMessage>
                  : ''
                }
                {/* <Error content={"Invalid use name or password"}/> */}
                <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
                    <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => {
                            return (
                                <StyledInput type="text" id="firstName" label="First Name"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    size="small"
                                    variant="filled"
                                    helperText={error ? error.message : null} />
                            )
                        }}
                        rules={{ required: 'First name required' }}
                    />
                    <Controller
                        name="lastName"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => {
                            return (
                                <StyledInput type="text" id="lastName" label="Last Name"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    size="small"
                                    variant="filled"
                                    helperText={error ? error.message : null} />
                            )
                        }}
                        rules={{
                            required: 'Last name required', pattern: {
                                value: /^([A-Za-z ])+$/i,
                                message: "Last name is invalid"
                            }
                        }}
                    />
                    {/* <StyledInput type="text" id="lastName" label="Last Name" adorment="true" /> */}
                    {/* <StyledInput type="text" id="email" label="Email" variant="filled" /> */}
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => {
                            return (
                                <StyledInput type="text" id="email" label="Email"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    size="small"
                                    variant="filled"
                                    helperText={error ? error.message : null} />
                            )
                        }}
                        rules={{
                            required: 'Email required',
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i,
                                message: "Email is invalid"
                            }
                        }}
                    />
                    <StyledInput type="dob" id="dob" label="Date of Birth" variant="filled" />
                    <Controller
                        name="mobile"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => {
                            return (
                                <StyledInput type="text" id="mobile" label="Mobile Number"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    size="small"
                                    variant="filled"
                                    helperText={error ? error.message : null} />
                            )
                        }}
                        rules={{
                            required: 'Mobile Number required',
                            pattern: {
                                value: /[0-9]{9,12}/i,
                                message: "Mobile Number is invalid"
                            }
                        }}
                    />
                    <Typography variant="h1" sx={styles.passwordLabel}>
                        Please Create a Password
                    </Typography>
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => {
                            return (
                                <StyledInput type="password" id="password" label="Password"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    size="small"
                                    variant="filled"
                                    helperText={error ? error.message : null} />
                            )
                        }}
                        rules={{ required: 'Password required',
                          validate: {
                            isLength: v => lengthRegex.test(v),
                            isAtLeastOneNumber: v => numberRegex.test(v),
                            isAtLeastOneAlphabet: v => alphabethRegex.test(v),
                            isAtLeastOneSpecial: v => specialRegex.test(v),
                            isNoContainsUsername: v => v.indexOf(watchedEmail || watchedMobile)  -1,
                            isNoTriple: v => !hasTripleRegex.test(v)
                          }
                        }}
                    />
                    <PasswordValidator
                        validator={passwordValidator}
                        isShowValidation={isPasswordError}
                        password={watchedPassword}
                        username={getRegisteredUsername()}
                        isRegistration={true} />
                    
                    <div style={styles.registeredUsernameWrapper}>
                        <div>Your username will be {getRegisteredUsername()}</div>
                    </div>
                    
                    <div style={styles.divMargin}>
                      <Controller
                        name="preferredCommunication"
                        control={control}
                        render={({ field: { onChange, value }, fieldState: { error } }) => {
                          return (
                          <RowRadioButtonsGroup
                            error={!!error} 
                            value={value}
                            onChange={onChange}
                            label="Preferred mode of Communication" options={options}
                            helperText={error ? error.message : null} />
                          )
                        }}
                        rules={{ required: 'Preferred Communication required' }}
                      />
                      
                    </div>

                    <Button
                        type="submit"
                        variant="contained"
                        sx={styles.containedButton}
                    >
                        Register
                    </Button>
                </form>

                <Typography variant="caption" style={styles.bottomParagraph}>By registering, you agree to our Terms &<br /> Conditions and Privacy Policy</Typography>
                <Divider margin={3} />
                <Typography variant="caption" style={styles.bottomParagraph}>Already have an account? <Link href="/login"><a style={styles.loginLink}>Login</a></Link></Typography>
            </Stack>
        </Box>
    );
}
