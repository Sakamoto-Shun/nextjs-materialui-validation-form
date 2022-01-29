import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Head from "next/head";
import Link from "next/link";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        <a>Your Website</a>
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { name, email, password, re_password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>アカウント登録</title>
      </Head>

      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              アカウント登録
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    {...register("name", {
                      required: "*入力してください",
                      minLength: {
                        value: 2,
                        message: "2文字以上入力してください",
                      },
                      maxLength: {
                        value: 30,
                        message: "30文字以下で入力してください",
                      },
                    })}
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="firstName"
                    onChange={onChange}
                    label="Username"
                    value={name}
                    autoFocus
                  />
                  <span style={{ color: "red" }}>{errors.name?.message}</span>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register("email", {
                      required: "*入力してください",
                      minLength: {
                        value: 8,
                        message: "8文字以上入力してください",
                      },
                      maxLength: 100,
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                        message: "有効なメールアドレスを入力してください",
                      },
                    })}
                    fullWidth
                    id="email"
                    onChange={onChange}
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                  />
                  <span style={{ color: "red" }}>{errors.email?.message}</span>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register("password", {
                      required: "*入力してください",
                      minLength: {
                        value: 8,
                        message: "8文字以上入力してください",
                      },
                      maxLength: 100,
                    })}
                    fullWidth
                    name="password"
                    onChange={onChange}
                    label="パスワード"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={password}
                  />
                  <span style={{ color: "red" }}>
                    {errors.password?.message}
                  </span>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register("re_password", {
                      required: "*入力してください",
                      minLength: {
                        value: 8,
                        message: "8文字以上入力してください",
                      },
                      maxLength: 100,
                      validate: {
                        value: (value) =>
                          password === value || "パスワードが一致しません",
                      },
                    })}
                    fullWidth
                    name="re_password"
                    label="パスワード確認"
                    onChange={onChange}
                    type="password"
                    id="re_password"
                    autoComplete="new-password"
                    value={re_password}
                  />
                  <span style={{ color: "red" }}>
                    {errors.re_password?.message}
                  </span>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                登録
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default SignUp;
