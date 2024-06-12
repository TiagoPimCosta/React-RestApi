import { useNavigate } from "react-router-dom";

type ListElementProps = {
  id: number;
  route?: string;
  title: string;
  subtitle?: string;
  body: string;
};

function ListElement({
  id,
  route = undefined,
  title,
  subtitle = undefined,
  body,
}: ListElementProps) {
  const navigate = useNavigate();

  function nextPath() {
    route ? navigate(route) : null;
  }
  return (
    <div
      key={id}
      className="bg-white p-4 rounded-lg shadow-md"
      onClick={nextPath}
    >
      <h3 className="text-lg font-bold">{title}</h3>

      <p className="text-gray-700 text-sm mb-2">{subtitle}</p>
      <p className="text-gray-700">{body}</p>
    </div>
  );
}

export default ListElement;
