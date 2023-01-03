import { Provider, useSelector } from "react-redux";
import store from "../../../../store/store";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import styles from "./styles.module.scss";
import { colors } from "../../../../styles/theme";
import FileDownloadIcon from "../../../../assets/icons/FileDownload";
import AppointmentLayout from "../../../../components/templates/appointmentLayout";

export default function EducationDetailPage() {
  const selectedArticle = useSelector(
    (state) => state.document.selectedEducationMaterial
  );

  const articleData = [
    {
      id: 1,
      title: "What Causes Visual Impairment?",
      contain:
        "There are many different causes of visual impairment, from birth defects to eye diseases to genetic disorders. Other common causes include eye injuries and old age. We can use protective eyewear to minimize the risk of eye injuries and we can maintain healthy habits (like eating well, staying active, and avoiding smoking) to keep our eyes strong as we get older. Some eye problems can be addressed with surgery, but not all of them can be treated or avoided.",
    },
    {
      id: 2,
      title: "Different Forms of Visual Impairment",
      contain:
        "Visual impairment is different for each person who experiences it. Some of that variety is tied to what causes it. Glaucoma, for instance, impacts peripheral vision first. Macular degeneration damages the central vision. There are other problems like photophobia (sensitivity to light), diplopia (double vision), visual perception difficulties, and visual distortion.",
    },
    {
      id: 3,
      title: `Defining “Low Vision” and “Legally Blind"`,
      contain:
        "If the best glasses or contacts can do for someone’s eyesight is get them to 20/70 acuity or worse (which means they can only see as much detail at 20 feet as most people could see from 70), that is considered low vision. If glasses or contacts can only get them to 20/200, they are considered legally blind.",
    },
    {
      id: 4,
      title: "Blindness Isn’t Always the Same Either",
      contain:
        "Blindness is more complex than not being able to see. Some people are born blind while others lose their sight later on. Blindness can come on rapidly or very gradually. Some blind people can tell the difference between light and darkness, while others are unable to perceive any kind of visual stimulation at all. Some blind people are identifiable as blind at a glance, while others don’t look any different than a sighted person.",
    },
    {
      id: 5,
      title: "How Can Sighted People Help?",
      contain: `Every visually impaired person deserves to be treated with respect and dignity. It’s not generally considered very polite to make a big fuss about their disability or draw attention to it, but we can politely greet them and introduce ourselves, then ask them if they would like any assistance. They very well may not require assistance, so be prepared for that answer. If they do accept, here are a few tips:
        When helping with mobility, ask where they want you to stand and match their walking speed. Be very descriptive about upcoming changes to the slope of the ground or obstacles.
        Any time you are a guest in the home of a visually impaired person, only place objects where they want them so that they can find them again after you leave.
        Remember that guide dogs are on the job! These canines are h highly trained and doing a very important job for their owners, so resist the urge to pet them and distract them from their work — no matter how cute they are.
        Keep in mind that visual impairment doesn’t prevent people from leading full lives, so our attitude should be helpful, not pitying.`,
    },
  ];

  return (
    <div className={styles.containerDetail}>
      <Stack spacing={3} sx={{ mt: 2 }}>
        <Box>
          <Typography className={styles.titleDetail} tabIndex={0}>
            {selectedArticle?.title}
          </Typography>
        </Box>
        <Box className={styles.buttonWrapper}>
          <IconButton sx={{ borderRadius: "5px" }} data-testid="downloadDetail">
            <FileDownloadIcon sx={{ fill: colors.darkGreen }} />
            <Typography className={styles.buttonTxt}> Download</Typography>
          </IconButton>
          <IconButton sx={{ borderRadius: "5px" }} data-testid="printDetail">
            <PrintOutlinedIcon sx={{ fill: colors.darkGreen }} />
            <Typography className={styles.buttonTxt}>Print</Typography>
          </IconButton>
        </Box>
        <Box className={styles.contentWrapper} tabIndex={0}>
          {articleData.map((data) => {
            return (
              <>
                <Typography className={styles.titleContent}>
                  {data.title}
                </Typography>
                <Typography className={styles.bodyContent}>
                  {data.contain}
                </Typography>
              </>
            );
          })}
        </Box>
      </Stack>
    </div>
  );
}

EducationDetailPage.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AppointmentLayout
        pageTitle="EyeCare Patient Portal - Education Materials"
        showNavbar={true}
        currentActivePage={"Edication Material Details"}
        backTitle={"Back to Education Materials"}
      >
        {page}
      </AppointmentLayout>
    </Provider>
  );
};
