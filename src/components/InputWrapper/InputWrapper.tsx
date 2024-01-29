export enum Types {
  TEXT = 'text',
  PASSWORD = 'password',
}
interface InputWrapperProps {
  id: string;
  label: string;
  type: Types;
  classNames?: string;
  isDisabled?: boolean;
  handleChange?: () => void;
}
const InputWrapper = (props: InputWrapperProps) => {
  const { isDisabled = false } = props;
  return (
    <>
      <label htmlFor={props.id} className="input-label">
        {props.label}
      </label>
      <input
        data-testid="input-wrapper"
        type={props.type}
        name={props.id}
        id={props.id}
        className={`form-input-type ${props?.classNames}`}
        disabled={isDisabled}
        onChange={() => props.handleChange && props.handleChange}
      />
    </>
  );
};

export default InputWrapper;
