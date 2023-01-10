import PrescriptionLayout from "../../../components/templates/prescriptionLayout";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { Stack } from "@mui/material";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import TableEmpty from "../../../components/atoms/TableEmpty/tableEmpty";
import { fetchSource } from "../../../utils/fetchDigitalAssetSource";
import EducationMaterials from "../../../components/organisms/EducationMaterials/educationMaterials";
import moment from "moment";
import { Api } from "../../api/api";

export default function EducationMaterialsPage() {
  const [educationMaterialsData, setEducationMaterialsData] = useState([]);

  function onCalledGetEducationMaterialsData() {
    const api = new Api();
    api
      .getEducationMaterial()
      .then(function (response) {
        if (response && response?.entities.length > 0) {
          const listData = [];
          for (const item of response?.entities) {
            listData.push({
              id: item._id,
              title: item.name,
              imgSrc: "/image166.png",
              author: `${item.uploadedBy?.firstName} ${item.uploadedBy?.lastName}`,
              date: new moment(item._created).format("MMMM D, yyyy"),
              desc: "",
              digital_assets: item.digital_assets,
            });
          }
          setEducationMaterialsData(listData);
        }
      })
      .catch(function () {
        //Handle error
      });
  }

  useEffect(() => {
    onCalledGetEducationMaterialsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAssetDownload = (id, isPrint = false, isOpenPdf = false) => {
    fetchSource(id, isPrint, true, isOpenPdf);
  };

  return (
    <div className={styles.educationMaterialsWrapper}>
      <Stack spacing={3} sx={{ mt: 2 }} data-testid={"education-container"}>
        {educationMaterialsData.length > 0 ? (
          educationMaterialsData.map((data, idx) => {
            return (
              <>
                <EducationMaterials
                  eduMatData={data}
                  onAssetDownload={handleAssetDownload}
                  index={idx}
                ></EducationMaterials>
              </>
            );
          })
        ) : (
          <TableEmpty
            text={`We do not have any educational material associated with your account.`}
          />
        )}
      </Stack>
    </div>
  );
}

EducationMaterialsPage.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <PrescriptionLayout title="Education Materials">
        {page}
      </PrescriptionLayout>
    </Provider>
  );
};
