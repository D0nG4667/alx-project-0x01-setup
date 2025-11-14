import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/Button";

const sampleUsers = [
  { id: 1, name: "Leanne Graham", email: "leanne@example.com" },
  { id: 2, name: "Ervin Howell", email: "ervin@example.com" },
  { id: 3, name: "Clementine Bauch", email: "clementine@example.com" },
];

const UsersPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Users</h1>
          <Button
            title="Add User"
            onClick={() => alert("Open modal: Add User")}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sampleUsers.map((u) => (
            <div
              key={u.id}
              className="border rounded-lg p-4 bg-white shadow-sm"
            >
              <h3 className="font-semibold">{u.name}</h3>
              <p className="text-sm text-gray-600">{u.email}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default UsersPage;
