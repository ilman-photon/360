import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import StyledInput from "../../atoms/Input/input";
import { colors } from "../../../styles/theme";
import { Controller, useForm } from "react-hook-form";

export default function SearchBar({
  title,
  onSearch = () => {
    //this intentional
  },
  sx = {},
}) {
  const { handleSubmit, control } = useForm({
    defaultValues: { keyword: "" },
  });

  return (
    <Box
      sx={{
        backgroundColor: colors.grayscaleGrey,
        padding: "16px",
      }}
      data-testid={"search-bar-input"}
    >
      <Stack spacing={2}>
        {title && (
          <Typography
            tabIndex={0}
            variant={"headlineH3"}
            sx={{
              color: colors.darkGreen,
            }}
          >
            {title}
          </Typography>
        )}
        <form onSubmit={handleSubmit(onSearch)} style={{ flex: 1 }}>
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              border: `1px solid ${colors.teal}`,
              borderRadius: 47,
              background: "white",
              ...sx,
            }}
          >
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                px: 2,
              }}
            >
              <Search />
              <Controller
                name="keyword"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { _error },
                }) => {
                  return (
                    <StyledInput
                      onChange={onChange}
                      value={value}
                      type={"text"}
                      label="Search by name, email or phone"
                      size="small"
                      variant="filled"
                      sx={{
                        width: "100%",
                        ".MuiFilledInput-root": {
                          border: "none",
                        },
                      }}
                    />
                  );
                }}
              />
            </Stack>
            <Stack
              sx={{
                justifyContent: "center",
                height: "56px",
                px: { xs: "9.5px", sm: "19px" },
                backgroundColor: colors.teal25,
                borderTopRightRadius: 47,
                borderBottomRightRadius: 47,
              }}
            >
              <IconButton
                sx={{ p: 0 }}
                type="submit"
                data-testid="submit-search-bar-form"
                aria-label="search"
              >
                <Search
                  sx={{ width: 26, height: 26, color: colors.darkGreen }}
                />
              </IconButton>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
}
