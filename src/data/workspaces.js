

const workspaces = [
  {
    id: "1",
    name: "My Workspace",
    path: "/",
  },
  {
    id: "2",
    name: "Information Technology",
    path: "/workspace/Information Technology",
  },
  {
    id: "3",
    name: "Finance",
    path: "/workspace/Finance",
  },
  {
    id: "4",
    name: "Sales",
    path: "/workspace/Sales",
  },
  {
    id: "5",
    name: "Product Management",
    subWorkspaces: [
      {
        id: "5-1",
        name: "Product-A",
        path: "/workspace/Product-A",
      },
      {
        id: "5-2",
        name: "Product-B",
        path: "/workspace/Product-B",
      },
    ],
  },
  {
    id: "6",
    name: "Marketing",
    path: "/workspace/Marketing",
  },
  {
    id: "7",
    name: "Human Resources",
    path: "/workspace/Human Resources",
  },
];

export default workspaces; // Export the workspaces constant
