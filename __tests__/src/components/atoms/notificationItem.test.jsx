import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import "@testing-library/jest-dom";
import NotificationItem from "../../../../src/components/atoms/NotificationItem/notificationItem";

const onMarkAsRead = jest.fn()

const createData = (id, isRead, type, createdAt, data) => {
  return {
    id,
    isRead,
    type,
    createdAt,
    data,
  };
};

let container;
let mockNotificationData;

describe("NotificationItem", () => {
  beforeEach(() => {
    mockNotificationData = createData(2, false, "test-result", "09/09/2022 12:00");
    container = render(
      <NotificationItem
        isRead={mockNotificationData.isRead}
        data={mockNotificationData}
        onClick={() => onMarkAsRead(item.id)}
      />
    );
  });

  it("renders readed notification item", async () => {
    mockNotificationData = createData(1, true, "appointment", "09/10/2022 12:00");
    container.rerender(
      <NotificationItem
        isRead={mockNotificationData.isRead}
        data={mockNotificationData}
        onClick={() => onMarkAsRead(item.id)}
      />
    );

    const isRead = container.getByTestId("notification-is-read")
    expect(isRead.style.visibility).toBe("hidden")
  })

  it("renders new/unread notification item", async () => {
    const isRead = container.getByTestId("notification-is-read")
    expect(isRead).toBeVisible()
  })

  it("renders notification item with icon", async () => {
    const icon = container.getByTestId("notification-icon")
    expect(icon).toBeVisible()
  })
  
  it("renders notification item prescription-refill type", async () => {
    mockNotificationData = createData(1, true, "prescription-refill", "09/09/2022 12:00");
    container.rerender(
      <NotificationItem
        isRead={mockNotificationData.isRead}
        data={mockNotificationData}
        onClick={() => onMarkAsRead(item.id)}
      />
    );

    const icon = container.getByTestId("notification-icon")
    expect(icon).toBeVisible()
  })

  it("renders notification item appointment type", async () => {
    mockNotificationData = createData(1, true, "appointment", "09/09/2022 12:00");
    container.rerender(
      <NotificationItem
        isRead={mockNotificationData.isRead}
        data={mockNotificationData}
        onClick={() => onMarkAsRead(item.id)}
      />
    );

    const icon = container.getByTestId("notification-icon")
    expect(icon).toBeVisible()
  })

  it("renders notification item test-result type", async () => {
    mockNotificationData = createData(1, true, "test-result", "09/09/2022 12:00");
    container.rerender(
      <NotificationItem
        isRead={mockNotificationData.isRead}
        data={mockNotificationData}
        onClick={() => onMarkAsRead(item.id)}
      />
    );

    const icon = container.getByTestId("notification-icon")
    expect(icon).toBeVisible()
  })

  it("renders notification item message type", async () => {
    mockNotificationData = createData(1, true, "message", "09/09/2022 12:00");
    container.rerender(
      <NotificationItem
        isRead={mockNotificationData.isRead}
        data={mockNotificationData}
        onClick={() => onMarkAsRead(item.id)}
      />
    );

    const icon = container.getByTestId("notification-icon")
    expect(icon).toBeVisible()
  })

  it("renders notification item invoice type", async () => {
    mockNotificationData = createData(1, true, "invoice", "09/09/2022 12:00");
    container.rerender(
      <NotificationItem
        isRead={mockNotificationData.isRead}
        data={mockNotificationData}
        onClick={() => onMarkAsRead(item.id)}
      />
    );

    const icon = container.getByTestId("notification-icon")
    expect(icon).toBeVisible()
  })

  it("renders notification item appointment-summary type", async () => {
    mockNotificationData = createData(1, true, "appointment-summary", "09/09/2022 12:00");
    container.rerender(
      <NotificationItem
        isRead={mockNotificationData.isRead}
        data={mockNotificationData}
        onClick={() => onMarkAsRead(item.id)}
      />
    );

    const icon = container.getByTestId("notification-icon")
    expect(icon).toBeVisible()
  })

  it("renders notification item prescription-glasses type", async () => {
    mockNotificationData = createData(1, true, "prescription-glasses", "09/09/2022 12:00");
    container.rerender(
      <NotificationItem
        isRead={mockNotificationData.isRead}
        data={mockNotificationData}
        onClick={() => onMarkAsRead(item.id)}
      />
    );

    const icon = container.getByTestId("notification-icon")
    expect(icon).toBeVisible()
  })

  it("renders notification item prescription-contact type", async () => {
    mockNotificationData = createData(1, true, "prescription-contact", "09/09/2022 12:00");
    container.rerender(
      <NotificationItem
        isRead={mockNotificationData.isRead}
        data={mockNotificationData}
        onClick={() => onMarkAsRead(item.id)}
      />
    );

    const icon = container.getByTestId("notification-icon")
    expect(icon).toBeVisible()
  })

  it("renders notification item prescription-aspirin type", async () => {
    mockNotificationData = createData(1, true, "prescription-aspirin", "09/09/2022 12:00");
    container.rerender(
      <NotificationItem
        isRead={mockNotificationData.isRead}
        data={mockNotificationData}
        onClick={() => onMarkAsRead(item.id)}
      />
    );

    const icon = container.getByTestId("notification-icon")
    expect(icon).toBeVisible()
  })

  it("renders notification item contact-lens type", async () => {
    mockNotificationData = createData(1, true, "contact-lens", "09/09/2022 12:00");
    container.rerender(
      <NotificationItem
        isRead={mockNotificationData.isRead}
        data={mockNotificationData}
        onClick={() => onMarkAsRead(item.id)}
      />
    );

    const icon = container.getByTestId("notification-icon")
    expect(icon).toBeVisible()
  })

  it("renders notification item glasses type", async () => {
    mockNotificationData = createData(1, true, "glasses", "09/09/2022 12:00");
    container.rerender(
      <NotificationItem
        isRead={mockNotificationData.isRead}
        data={mockNotificationData}
        onClick={() => onMarkAsRead(item.id)}
      />
    );

    const icon = container.getByTestId("notification-icon")
    expect(icon).toBeVisible()
  })

  it("renders notification item aspirin type", async () => {
    mockNotificationData = createData(1, true, "aspirin", "09/09/2022 12:00");
    container.rerender(
      <NotificationItem
        isRead={mockNotificationData.isRead}
        data={mockNotificationData}
        onClick={() => onMarkAsRead(item.id)}
      />
    );

    const icon = container.getByTestId("notification-icon")
    expect(icon).toBeVisible()
  })

  it("renders notification item empty type", async () => {
    mockNotificationData = createData(1, true, "", "09/09/2022 12:00");
    container.rerender(
      <NotificationItem
        isRead={mockNotificationData.isRead}
        data={mockNotificationData}
        onClick={() => onMarkAsRead(item.id)}
      />
    );

    const icon = container.getByTestId("notification-icon")
    expect(icon).toBeVisible()
  })

  it("renders notification item with description", async () => {
    const description = container.getByTestId("notification-description")
    expect(description).toBeVisible()
  })

  it("renders notification item with date", async () => {
    const date = container.getByTestId("notification-date")
    expect(date).toBeVisible()
  })
})