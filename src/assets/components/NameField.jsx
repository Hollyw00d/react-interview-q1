export default function NameField() {
  return (
    <div className="col-12 col-md-9">
      <input
        className="p-2 w-100"
        type="text"
        name="name"
        id="name"
        min="1"
        max="50"
      />
    </div>
  );
}
