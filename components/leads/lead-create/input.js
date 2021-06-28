export default function Input(props) {
  const [state, setstate] = useState(initialState);
  const { type, name, id, className, value, onChange } = props;

  return (
    <div className="sm:col-span-1">
      <dt className="text-sm font-medium text-gray-500">Name</dt>
      <dd className="mt-1 text-sm text-gray-900">
        <input
          type={type}
          name={name}
          id={id}
          className={className}
          value={value}
          onChange={onChange}
        />
      </dd>
    </div>
  );
}
