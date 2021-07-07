import useSWR from "swr";
import Member from "./Member";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

async function fetchMembers() {
  const res = await fetch("http://localhost:3000/api/hello");
  const members = await res.json();

  return members;
}

export default function MemberList() {
  const { data } = useSWR("http://localhost:3000/api/hello", fetcher);

  const members = data;

  if (!members) {
    return null;
  }

  return (
    <div className="flex flex-wrap -m-2">
      {members.map((member) => {
        return (
          <Member
            key={member.id}
            name={member.name}
            github={member.github}
            location={member.location}
          />
        );
      })}
    </div>
  );
}
