"use client";

import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import MyBtn from "@/components/ui/MyBtn";
import { deleteAdminMethod, getAdminsMethod } from "@/lib/api/admin";
interface IAdmin {
  _id: string;
  email: string;
  username: string;
}
export default function AdminTable() {
  const [admins, setAdmins] = useState<IAdmin[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getAllAdmins = async () => {
      setIsLoading(true);
      const { data: admins } = await getAdminsMethod();
      console.log("admins", admins);
      setAdmins(admins);
      setIsLoading(false);
    };

    getAllAdmins();
    return () => {};
  }, []);

  const handleDelete = (id: string) => {
    deleteAdminMethod(id);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="">
      <div className=" max-w-4xl mx-auto">
        <div className="bg-secondary/20 rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-primary">
            <thead className="bg-dark dark:bg-secondary text-light">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                  user Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium  uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-secondary/20 divide-y divide-primary/50">
              {admins.map((admin) => (
                <tr key={admin._id} className="hover:bg-secondary">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                    {admin.username}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                    {admin.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <MyBtn
                      onClick={() => handleDelete(admin._id)}
                      variant="primary"
                      outline
                      text="Delete"
                      className="ml-auto"
                      icon={<Trash2 className="w-4 h-4 mr-1" />}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
