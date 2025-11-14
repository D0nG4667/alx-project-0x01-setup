import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-3">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500">@{username}</p>
      </div>

      <div className="space-y-1 text-gray-700">
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Website: {website}</p>

        <div className="mt-3">
          <h3 className="font-semibold">Address</h3>
          <p>
            {address.street}, {address.suite}, {address.city}
          </p>
          <p>Zipcode: {address.zipcode}</p>
        </div>

        <div className="mt-3">
          <h3 className="font-semibold">Company</h3>
          <p>{company.name}</p>
          <p className="text-sm italic">{company.catchPhrase}</p>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-500">User ID: {id}</div>
    </div>
  );
};

export default UserCard;
