import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import DoctorList from "../../../components/molecules/DoctorList/doctorList";
import EmptyResult from "../../../components/molecules/DoctorList/emptyResult";
import FilterBy from "../../../components/molecules/FilterBy/filterBy";
import SearchBar from "../../../components/molecules/SearchBar/searchBar";
import MyCareTeamLayout from "../../../components/templates/myCareTeamLayout";
import store from "../../../store/store";
import { getArrayValue } from "../../../utils/bioUtils";
import { Api } from "../../api/api";
import { sortPrimaryAddress } from "../bio/[bio]";

export default function SearchDoctorPage() {
  const [isRequested, setIsRequested] = useState(false);
  const [providerData, setProviderData] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState([]);
  const [showNumberResult, setShowNumberResult] = useState(false);
  const [filteredData, setFilteredData] = useState();
  const [locationList, setLocationList] = useState();
  const [specialtyList, setSpecialtyList] = useState();
  const [filter, setFilter] = useState();
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  let isRequest = false;

  const mapper = (responses, showNumber) => {
    const data = [];
    let specialty = [];
    let city = [];
    responses.map((response) => {
      const designation = response.designation
        ? `, ${response.designation}`
        : "";
      const name = `${response.firstName || ""} ${
        response.lastName || ""
      }${designation}`;

      const officesAddress = sortPrimaryAddress(response.offices);

      const providerItem = {
        providerId: response._id || "",
        name,
        email: response.email || "",
        phone: response.workPhone || "",
        image: response.providerDetails?.profilePhoto?.digitalAsset || "",
        specialties: getArrayValue(response.providerDetails?.specialization),
        address: officesAddress[0],
      };

      data.push(providerItem);
      specialty.push(providerItem.specialties[0] || "");
      city.push(providerItem.address?.city || "");
    });
    specialty = [...new Set(specialty)];
    specialty = specialty.filter((e) => e);
    city = [...new Set(city)];
    city = city.filter((e) => e);
    isRequest = false;
    setProviderData(data);
    setIsRequested(true);
    setShowNumberResult(showNumber);
    setLoading(false);
    getFilter(city, specialty);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getProviderList = (
    query = {
      name: "",
      location: "",
      specialty: "",
    },
    showNumber = false
  ) => {
    const api = new Api();
    isRequest = true;
    setLoading(true);
    setIsError(false);
    api
      .searchProvider(query)
      .then((responses) => {
        mapper(responses.entities, showNumber);
      })
      .catch(() => {
        setIsError(true);
        setIsRequested(true);
        setLoading(false);
      });
  };

  const getSpecialtyList = () => {
    const api = new Api();
    api
      .getDoctorSpecialties()
      .then((responses) => {
        let specialty = [...new Set(responses.specializations)];
        specialty = specialty.filter((e) => e);
        setSpecialtyList(specialty);
      })
      .catch(() => {
        setSpecialtyList([]);
      });
  };

  const getLocationList = () => {
    const api = new Api();
    api
      .getDoctorLocations()
      .then((responses) => {
        let city = [...new Set(responses.cities)];
        city = city.filter((e) => e);
        setLocationList(city);
      })
      .catch(() => {
        setLocationList([]);
      });
  };

  const getFilter = (city, specialty) => {
    const cityChecklist = [];
    const specialtyChecklist = [];
    city.map((item) => {
      cityChecklist.push({
        name: item,
        type: "City",
        checked: false,
      });
    });
    specialty.map((item) => {
      specialtyChecklist.push({
        name: item,
        type: "Specialty",
        checked: false,
      });
    });
    const filters = [
      {
        name: "City",
        checklist: cityChecklist,
      },
      {
        name: "Specialty",
        checklist: specialtyChecklist,
      },
    ];
    setFilter(filters);
  };

  const runFilterProvider = (data) => {
    return providerData.filter(function (item) {
      let show = false;
      for (const filterItem of data) {
        if (filterItem.type === "City" && !show) {
          show = filterItem.name === item.address?.city;
        }
        if (filterItem.type === "Specialty" && !show) {
          show = item.specialties.some(
            (specialties) => specialties === filterItem.name
          );
        }
      }
      return show;
    });
  };

  const filterData = (data) => {
    if (data.length > 0) {
      const filteredProvider = runFilterProvider(data);
      setFilteredData(filteredProvider);
    } else {
      setFilteredData(undefined);
    }
  };

  useEffect(() => {
    if (!loading) {
      !isRequest && !isRequested && getProviderList();
      specialtyList === undefined && getSpecialtyList();
      locationList === undefined && getLocationList();
    }
  }, [
    getProviderList,
    isRequest,
    isRequested,
    loading,
    specialtyList,
    locationList,
  ]);

  const removeFilter = async (data) => {
    const id = activeFilter.findIndex((x) => x.name === data.name);
    if (id > -1) {
      const activedFilter = [...activeFilter];
      activedFilter.splice(id, 1);
      setActiveFilter([...activedFilter]);
      setLoading(true);
      await filterData(activedFilter);
      setLoading(false);
    }
  };

  const renderResult = () => {
    const findData = filteredData ? filteredData : providerData;
    return (
      <>
        {findData && providerData.length !== 0 ? (
          <DoctorList
            providerData={findData}
            showNumberResult={showNumberResult}
          />
        ) : (
          <EmptyResult />
        )}
      </>
    );
  };

  return (
    <>
      {isRequested && !isError ? (
        <Box
          sx={{
            flexGrow: 1,
            maxWidth: {
              sm: "770px",
              md: "1434px",
            },
            backgroundColor: {
              xs: "transparent",
              sm: "#FFFFFF",
            },
            margin: "0 auto 0 auto",
          }}
        >
          <SearchBar
            locationList={locationList}
            specialtyList={specialtyList}
            activeFilter={activeFilter}
            onRemoveFilter={removeFilter}
            openFilter={() => {
              setFilterOpen(!filterOpen);
            }}
            onSearchDoctor={(data) => {
              getProviderList(data, true);
            }}
          />
          {!loading ? (
            renderResult()
          ) : (
            <Box
              sx={{
                m: "0 auto",
                pt: 3,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </Box>
      ) : (
        <Box
          sx={{
            m: "0 auto",
            pt: 3,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {loading && <CircularProgress />}
        </Box>
      )}
      {filter && (
        <FilterBy
          activedFilter={activeFilter}
          filter={filter}
          isOpen={filterOpen}
          onClose={() => {
            setFilterOpen(!filterOpen);
          }}
          onDone={(selectedFilterData) => {
            setFilterOpen(!filterOpen);
            setActiveFilter(selectedFilterData);
            filterData(selectedFilterData);
          }}
          isDoctorSearch={true}
        ></FilterBy>
      )}
    </>
  );
}

SearchDoctorPage.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <MyCareTeamLayout title={"Find a Doctor"}>{page}</MyCareTeamLayout>
    </Provider>
  );
};
