import { Typography, useTheme, Button } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Women's History Month
        </Typography>
        {/* <Typography color={medium}>Create Ad</Typography> */}
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://www.achievementfirst.org/wp-content/uploads/2021/03/Womens-History-Month_Social-06-768x507.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Title</Typography>
        <Typography color={medium}>departmentsite.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        We have movies, presentations, a play, student artwork, guest speakers,
        and alumnae for this year's Women's History Month Colloquium, March
        20-23. Events follow ISU class-time schedule.
      </Typography>
      <Button
        variant="outlined"
        href="http://today.indstate.edu/wp-content/uploads/2023/03/2023-WHMC-list-form-program.pdf"
        target="_blank"
      >
        View More
      </Button>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
