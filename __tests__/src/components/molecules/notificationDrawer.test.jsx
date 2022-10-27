import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import "@testing-library/jest-dom";
import NotificationDrawer from "../../../../src/components/molecules/NotificationDrawer/notificationDrawer";

const setNotificationDrawerOpened = jest.fn()
const handleMarkAllAsRead = jest.fn()
const handleMarkAsReadById = jest.fn()

let container;
let notifications = []

const createData = (id, isRead, type, createdAt, data) => {
  return {
    id,
    isRead,
    type,
    createdAt,
    data,
  };
};

const mockNewNotifications = [
  createData(2, false, "test-result", "09/09/2022 12:00"),
  createData(3, false, "prescription-refill", "09/09/2022 12:00"),
  createData(4, false, "prescription-refill", "08/08/2022 12:00"),
]

const mockIsReadNotifications = [
  createData(1, true, "appointment", "09/10/2022 12:00"),
  createData(5, true, "test-result", "09/09/2022 12:00"),
]

describe("NotificationDrawer", () => {
  it("renders notification drawer with some list of read notifications", async () => {
    container = render(
      <NotificationDrawer
      />
    );
  })

  it("renders notification drawer with loading state", async () => {
    container = render(
      <NotificationDrawer
        opened={true}
        loading={true}
        onDrawerClose={() => setNotificationDrawerOpened(false)}
        onMarkAllAsRead={handleMarkAllAsRead}
        onMarkAsRead={handleMarkAsReadById}
        notifications={notifications}
      />
    );

    const loadingElement = container.getAllByTestId("skeleton-loading")

    expect(loadingElement[0]).toBeInTheDocument()
  })

  it("renders notification drawer with empty list of unread notifications", async () => {
    container = render(
      <NotificationDrawer
        opened={true}
        loading={false}
        onDrawerClose={() => setNotificationDrawerOpened(false)}
        onMarkAllAsRead={handleMarkAllAsRead}
        onMarkAsRead={handleMarkAsReadById}
        notifications={notifications}
      />
    );

    const emptyElement = await waitFor(() => container.getByText("You have no new notifications or alerts"))

    expect(emptyElement).toBeInTheDocument()
  })

  it("renders notification drawer with empty list of read notifications", async () => {
    container = render(
      <NotificationDrawer
        opened={true}
        loading={false}
        onDrawerClose={() => setNotificationDrawerOpened(false)}
        onMarkAllAsRead={handleMarkAllAsRead}
        onMarkAsRead={handleMarkAsReadById}
        notifications={notifications}
      />
    );

    const tabsRead = container.getByText("Read")
    fireEvent.click(tabsRead)

    const emptyElement = await waitFor(() => container.getByText("You have no read notifications or alerts"))

    expect(emptyElement).toBeInTheDocument()
  })

  it("renders notification drawer with some list of unread notifications", async () => {
    notifications = mockNewNotifications
    container = render(
      <NotificationDrawer
        opened={true}
        loading={false}
        onDrawerClose={() => setNotificationDrawerOpened(false)}
        onMarkAllAsRead={handleMarkAllAsRead}
        onMarkAsRead={handleMarkAsReadById}
        notifications={notifications}
      />
    );

    const notificationItems = await waitFor(() => container.getAllByTestId("notification-item"))

    expect(notificationItems).toHaveLength(3)
  })

  it("renders notification drawer with some list of read notifications", async () => {
    notifications = mockIsReadNotifications
    container = render(
      <NotificationDrawer
        opened={true}
        loading={false}
        onDrawerClose={() => setNotificationDrawerOpened(false)}
        onMarkAllAsRead={handleMarkAllAsRead}
        onMarkAsRead={handleMarkAsReadById}
        notifications={notifications}
      />
    );

    const tabsRead = container.getByText("Read")
    fireEvent.click(tabsRead)

    const notificationItems = await waitFor(() => container.getAllByTestId("notification-item"))
    expect(notificationItems).toHaveLength(2)
  })

  it("renders notification drawer and read one notification", async () => {
    notifications = mockNewNotifications
    container = render(
      <NotificationDrawer
        opened={true}
        loading={false}
        onDrawerClose={() => setNotificationDrawerOpened(false)}
        onMarkAllAsRead={handleMarkAllAsRead}
        onMarkAsRead={handleMarkAsReadById}
        notifications={notifications}
      />
    );

    const notificationItems = await waitFor(() => container.getAllByTestId("notification-item"))
    fireEvent.click(notificationItems[0])
  })
})