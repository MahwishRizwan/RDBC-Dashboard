export const mockUsers = [
  { id: 1, name: "Ravi Sharma", email: "ravi.sharma@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Priya Verma", email: "priya.verma@example.com", role: "Editor", status: "Active" },
  { id: 3, name: "Arjun Patel", email: "arjun.patel@example.com", role: "Viewer", status: "Inactive" },
  { id: 4, name: "Meera Iyer", email: "meera.iyer@example.com", role: "Editor", status: "Active" },
  { id: 5, name: "Karan Singh", email: "karan.singh@example.com", role: "Admin", status: "Active" },
  { id: 6, name: "Sana Khan", email: "sana.khan@example.com", role: "Viewer", status: "Active" },
  { id: 7, name: "Rahul Nair", email: "rahul.nair@example.com", role: "Editor", status: "Active" },
  { id: 8, name: "Anjali Das", email: "anjali.das@example.com", role: "Viewer", status: "Inactive" },
  { id: 9, name: "Vikram Joshi", email: "vikram.joshi@example.com", role: "Admin", status: "Active" },
  { id: 10, name: "Sneha Kapoor", email: "sneha.kapoor@example.com", role: "Editor", status: "Active" },
];

export const mockRoles = [
  { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
  { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  { id: 3, name: "Viewer", permissions: ["Read"] },
];

export const mockPermissions = [
  { name: "Read", isEnabled: false },
  { name: "Write", isEnabled: false },
  { name: "Delete", isEnabled: false },
];
