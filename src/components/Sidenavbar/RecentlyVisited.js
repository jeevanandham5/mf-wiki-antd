// src/pages/RecentlyVisited.js
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { List, Typography } from "antd";

const RecentlyVisited = () => {
  const location = useLocation();
  const recentlyVisited = location.state?.recentlyVisited || [];

  useEffect(() => {
    trackPageVisit({
      id: currentPage.id,
      title: currentPage.title,
      path: window.location.pathname,
    });
  }, [currentPage]);

  return (
    <div style={{ padding: "24px" }}>
      <Typography.Title level={2}>Recently Visited Pages</Typography.Title>
      <List
        itemLayout="horizontal"
        dataSource={recentlyVisited}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<a href={item.path}>{item.title}</a>}
              description={new Date(item.timestamp).toLocaleString()}
            />
          </List.Item>
        )}
        empty={<div>No recently visited pages</div>}
      />
    </div>
  );
};

export default RecentlyVisited;
