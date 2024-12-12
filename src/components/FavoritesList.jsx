import React, { useState, useEffect } from "react";
import { List, Typography } from "antd";
import { StarFilled } from "@ant-design/icons";

const FavoritesList = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Load favorites from localStorage
    const loadedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(loadedFavorites);

    // Add event listener for favorites updates
    const handleStorageChange = () => {
      const updatedFavorites = JSON.parse(
        localStorage.getItem("favorites") || "[]"
      );
      setFavorites(updatedFavorites);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <List
      header={
        <Typography.Title level={4}>
          <StarFilled style={{ color: "#FFD700" }} /> Favorites
        </Typography.Title>
      }
      bordered
      dataSource={favorites}
      renderItem={(item) => (
        <List.Item>
          <a href={item.id}>{item.title}</a>
        </List.Item>
      )}
    />
  );
};

export default FavoritesList;
