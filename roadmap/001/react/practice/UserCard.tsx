import { useState } from 'react';

type UserCardProps = {
  name: string;
  age: number;
  role: string;
};

const UserCard = ({ name, age, role }: UserCardProps) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
    <section>
      <h3>User</h3>

      <p>
        Name: <b>{name}</b>
      </p>

      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? 'Hide info' : 'Show info'}
      </button>

      {showInfo && (
        <div>
          <p>
            Age: <b>{age}</b>
          </p>
          <p>
            Role: <b>{role}</b>
          </p>
        </div>
      )}
    </section>
  );
};

export default UserCard;

/* Example */
<UserCard name="Semyon" age={33} role="developer" />