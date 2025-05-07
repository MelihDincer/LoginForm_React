export default function Input({ labelText, id, error, ...props }) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {labelText}
      </label>
      <input type="email" className="form-control" id={id} {...props} />
      {error && <div className="invalid-feedback d-block">{error}</div>}
    </div>
  );
}
