import React, { useState, useEffect } from "react";
import {
  Calendar as AntCalendar,
  Modal,
  Form,
  Input,
  TimePicker,
  Button,
  Select,
} from "antd";
import dayjs from "dayjs";
import styles from "../styles/Calendar.module.css";

const Calendar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    const savedEvents = localStorage.getItem("calendarEvents");
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("calendarEvents", JSON.stringify(events));
  }, [events]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleAddEvent = (values) => {
    const newEvent = {
      id: Date.now(),
      date: selectedDate.format("YYYY-MM-DD"),
      title: values.title,
      type: values.type,
      time: values.time.format("HH:mm"),
      description: values.description,
    };

    setEvents([...events, newEvent]);
    setIsModalVisible(false);
    form.resetFields();
  };

  const dateCellRender = (date) => {
    const dayEvents = events.filter(
      (event) => event.date === date.format("YYYY-MM-DD")
    );

    return (
      <ul className={styles.events}>
        {dayEvents.map((event) => (
          <li key={event.id} className={styles[event.type]}>
            {event.title}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={styles.calendarContainer}>
      <AntCalendar
        onSelect={handleDateSelect}
        dateCellRender={dateCellRender}
      />

      <Modal
        title="Add Event/Reminder"
        open={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        <Form form={form} onFinish={handleAddEvent} layout="vertical">
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please enter a title" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="type"
            label="Type"
            rules={[{ required: true, message: "Please select a type" }]}
          >
            <Select>
              <Select.Option value="event">Event</Select.Option>
              <Select.Option value="reminder">Reminder</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="time"
            label="Time"
            rules={[{ required: true, message: "Please select a time" }]}
          >
            <TimePicker format="HH:mm" />
          </Form.Item>

          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Calendar;
