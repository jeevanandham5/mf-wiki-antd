import React from "react";
import {
  Moon,
  Sun,
  Users,
  Shield,
  Bell,
  Database,
  Workflow,
  Languages,
} from "lucide-react";
import styles from "./settings.module.css"; // Import the CSS module

interface SettingsProps {
  onThemeChange: (theme: "light" | "dark") => void;
  currentTheme: "light" | "dark";
}

export default function Settings({
  onThemeChange,
  currentTheme,
}: SettingsProps) {
  const settingsGroups = [
    {
      title: "Appearance",
      items: [
        {
          icon: currentTheme === "light" ? Sun : Moon,
          label: "Theme",
          action: () =>
            onThemeChange(currentTheme === "light" ? "dark" : "light"),
          value: currentTheme === "light" ? "Light" : "Dark",
        },
      ],
    },
    {
      title: "Workspace",
      items: [
        {
          icon: Users,
          label: "Members",
          action: () => console.log("Members"),
        },
        {
          icon: Shield,
          label: "Security",
          action: () => console.log("Security"),
        },
        {
          icon: Bell,
          label: "Notifications",
          action: () => console.log("Notifications"),
        },
      ],
    },
    {
      title: "Data",
      items: [
        {
          icon: Database,
          label: "Import/Export",
          action: () => console.log("Import/Export"),
        },
        {
          icon: Workflow,
          label: "Integrations",
          action: () => console.log("Integrations"),
        },
        {
          icon: Languages,
          label: "Language",
          action: () => console.log("Language"),
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      {settingsGroups.map((group) => (
        <div key={group.title} className={styles.group}>
          <h2 className={styles.title}>{group.title}</h2>
          <div className="space-y-2">
            {group.items.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className={styles.item}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={styles.icon} />
                  <span className={styles.label}>{item.label}</span>
                </div>
                {item.value && (
                  <span className={styles.value}>{item.value}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
