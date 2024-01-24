export enum Types {
  TEXT = 'text',
  PASSWORD = 'password',
}
interface InputWrapperProps {
  id: string;
  label: string;
  name: string;
  type: Types;
  classNames: string;
}
const InputWrapper = (props: InputWrapperProps) => {
  return (
    <>
      <label htmlFor={props.id} className="input-label">
        {props.label}
      </label>
      <input type={props.type} name={props.name} id={props.id} className={`form-input-type ${props.classNames}`} />
    </>
  );
};

export default InputWrapper;
