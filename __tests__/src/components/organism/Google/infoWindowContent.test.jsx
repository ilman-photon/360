import React, { useState as useStateMock } from 'react'
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import InfoWindowContent from "../../../../../src/components/organisms/Google/Maps/infoWindowContent";
import { fireEvent } from '@storybook/testing-library';
import constants from '../../../../../src/utils/constants';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}))

describe("InfoWindowContent", () => {
  let container;
  const setState = jest.fn()
  const useStateSpy = jest.spyOn(React, 'useState')
  const mockProviderData = [
    {
      providerId: "1",
      address: {
        addressLine1: "51 West 51st Street",
        addressLine2: "Floor 3, Suite 320 Midtown",
        city: "Florida",
        state: "FR",
        zipcode: "54231",

      },
      rating: "5",
      name: "Paul Wagner Md",
      phoneNumber: "(123) 123-4567",
      distance: "10 mi",
      image: "/doctor.png",
      from: "2022-09-19",
      to: "2022-09-24",
      availability: [
        {
          date: "2022-09-19",
          list: [
            {
              time: "11:30am",
              key: 12222,

            },

          ],

        },
        {
          date: "2022-09-20",
          list: [
            {
              time: "08:00am",
              key: 12223,

            },
            {
              time: "10:30am",
              key: 12224,

            },
            {
              time: "11:00am",
              key: 12225,

            },
            {
              time: "12:00pm",
              key: 12226,

            },
            {
              time: "01:00pm",
              key: 12227,

            },
            {
              time: "02:00pm",
              key: 12228,

            },

          ],

        },
        {
          date: "2022-09-21",
          list: [
            {
              time: "08:30am",
              key: 12229,

            },
            {
              time: "10:30am",
              key: 12230,

            },
            {
              time: "11:30am",
              key: 12231,

            },
            {
              time: "12:00pm",
              key: 12232,

            },
            {
              time: "01:30pm",
              key: 12233,

            },
            {
              time: "02:30pm",
              key: 12234,

            },
            {
              time: "03:30pm",
              key: 12235,

            },
            {
              time: "04:30pm",
              key: 12236,

            },
            ,

          ],

        },
        {
          date: "2022-09-22",
          list: [
            {
              time: "09:30am",
              key: 12237,

            },
            {
              time: "11:00am",
              key: 12238,

            },

          ],

        },
        {
          date: "2022-09-23",
          list: [
            {
              time: "09:30am",
              key: 12239,

            },

          ],

        },
        {
          date: "2022-09-24",
          list: [
            {
              time: "09:30am",
              key: 12240,

            },

          ],

        },

      ],
      coordinate: {
        latitude: 32.751204,
        longitude: -117.1641166,

      },

    },
    {
      providerId: "2",
      address: {
        addressLine1: "51 West 51st Street",
        addressLine2: "Floor 3, Suite 320 Midtown",
        city: "Florida",
        state: "FR",
        zipcode: "54231",

      },
      rating: "5",
      name: "Paul Wagner Nd",
      phoneNumber: "(123) 123-4567",
      distance: "10 mi",
      image: "/doctor.png",
      from: "2022-09-19",
      to: "2022-09-24",
      availability: [
        {
          date: "2022-09-19",
          list: [

          ],

        },
        {
          date: "2022-09-20",
          list: [
            {
              time: "08:00am",
              key: 12223,

            },
            {
              time: "10:30am",
              key: 12224,

            },
            {
              time: "11:00am",
              key: 12225,

            },
            {
              time: "12:00pm",
              key: 12226,

            },
            {
              time: "01:00pm",
              key: 12227,

            },
            {
              time: "02:00pm",
              key: 12228,

            },

          ],

        },
        {
          date: "2022-09-21",
          list: [
            {
              time: "08:30am",
              key: 12229,

            },
            {
              time: "10:30am",
              key: 12230,

            },
            {
              time: "11:30am",
              key: 12231,

            },
            {
              time: "12:00pm",
              key: 12232,

            },
            {
              time: "01:30pm",
              key: 12233,

            },
            {
              time: "02:30pm",
              key: 12234,

            },
            {
              time: "03:30pm",
              key: 12235,

            },
            {
              time: "04:30pm",
              key: 12236,

            },
            ,

          ],

        },
        {
          date: "2022-09-22",
          list: [
            {
              time: "09:30am",
              key: 12237,

            },
            {
              time: "11:00am",
              key: 12238,

            },

          ],

        },
        {
          date: "2022-09-23",
          list: [

          ],

        },
        {
          date: "2022-09-24",
          list: [
            {
              time: "09:30am",
              key: 12240,

            },

          ],

        },

      ],
      coordinate: {
        latitude: 32.751204,
        longitude: -117.1641166,

      },

    },
    {
      providerId: "3",
      name: "Paul Wagner Md",
      address: {
        addressLine1: "51 West 51st Street",
        addressLine2: "Floor 3, Suite 320 Midtown",
        city: "Florida",
        state: "FR",
        zipcode: "54231",

      },
      rating: "5",
      phoneNumber: "(123) 123-4567",
      distance: "10 mi",
      image: "/doctor.png",
      from: "2022-09-19",
      to: "2022-09-24",
      availability: [
        {
          date: "2022-09-19",
          list: [
            {
              time: "11:30am",
              key: 12222,

            },

          ],

        },
        {
          date: "2022-09-20",
          list: [
            {
              time: "08:00am",
              key: 12223,

            },
            {
              time: "10:30am",
              key: 12224,

            },
            {
              time: "11:00am",
              key: 12225,

            },
            {
              time: "12:00pm",
              key: 12226,

            },
            {
              time: "01:00pm",
              key: 12227,

            },
            {
              time: "02:00pm",
              key: 12228,

            },

          ],

        },
        {
          date: "2022-09-21",
          list: [
            {
              time: "08:30am",
              key: 12229,

            },
            {
              time: "10:30am",
              key: 12230,

            },
            {
              time: "11:30am",
              key: 12231,

            },
            {
              time: "12:00pm",
              key: 12232,

            },
            {
              time: "01:30pm",
              key: 12233,

            },
            {
              time: "02:30pm",
              key: 12234,

            },
            {
              time: "03:30pm",
              key: 12235,

            },
            {
              time: "04:30pm",
              key: 12236,

            },
            ,

          ],

        },
        {
          date: "2022-09-22",
          list: [
            {
              time: "09:30am",
              key: 12237,

            },
            {
              time: "11:00am",
              key: 12238,

            },

          ],

        },
        {
          date: "2022-09-23",
          list: [
            {
              time: "09:30am",
              key: 12239,

            },

          ],

        },
        {
          date: "2022-09-24",
          list: [

          ],

        },

      ],
      coordinate: {
        latitude: 32.751204,
        longitude: -117.1641166,

      },

    },
    {
      providerId: "1",
      address: {
        addressLine1: "51 West 51st Street",
        addressLine2: "Floor 3, Suite 320 Midtown",
        city: "Florida",
        state: "FR",
        zipcode: "54231",

      },
      rating: "5",
      name: "Paul Wagner Md",
      phoneNumber: "(123) 123-4567",
      distance: "10 mi",
      image: "/doctor.png",
      from: "2022-09-19",
      to: "2022-09-24",
      availability: [],
      coordinate: {
        latitude: 32.751204,
        longitude: -117.1641166,
      },
    },
  ]

  beforeEach(() => {
    useStateSpy.mockImplementation((init) => [init, setState]);
    container = render(<InfoWindowContent
      data={mockProviderData}
      OnTimeClicked={() => jest.fn()} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("InfoWindowContent render", async () => {
    // expect(container).toMatchSnapshot();
    expect(await container.getAllByTestId(constants.TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID
      .MAPS.infoWindow.timeslot)[0]).toBeInTheDocument();
    fireEvent.click(container.getAllByTestId(constants.TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID
      .MAPS.infoWindow.timeslot)[0]);
  });

  it("Select next provider", () => {
    const nextBtn = container.getByTestId(constants.TEST_ID.MAP_INFO_WINDOW.nextProvider)
    fireEvent.click(nextBtn)
  })

  it("Select previous provider", () => {
    const prevBtn = container.getByTestId(constants.TEST_ID.MAP_INFO_WINDOW.previousProvider)
    fireEvent.click(prevBtn)
  })

  // it ("Select next provider when data is on last of the list", () => {
  //   const nextBtn = container.getByTestId(constants.TEST_ID.MAP_INFO_WINDOW.nextProvider)
  //   Array(mockProviderData.length).forEach(() => {
  //     fireEvent.click(nextBtn)
  //   })
  //   expect(setState).toHaveBeenCalledWith(0);
  // })

  // it("Select previous provider when data is on first of the list", () => {
  //   const prevBtn = container.getByTestId(constants.TEST_ID.MAP_INFO_WINDOW.previousProvider)
  //   Array(mockProviderData.length).forEach(() => {
  //     fireEvent.click(prevBtn)
  //   })
  // })

  it("InfoWindowContent", async () => {
    cleanup()
    container = render(<InfoWindowContent />);
    // expect(await container.getAllByTestId(constants.TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID
    //   .MAPS.infoWindow.timeslot)[0]).toBeInTheDocument();
    // fireEvent.click(container.getAllByTestId(constants.TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID
    //   .MAPS.infoWindow.timeslot)[0]);
  })
});
