import { Label, Input } from '@/shared/shadcn-ui';

type FormInputProps = { label?: string } & React.ComponentProps<'input'>;

export const FormInput = ({ label, name, type, defaultValue, ...restProps }: FormInputProps) => {
  return (
    <div className="mb-2">
      <Label className="capitalize" htmlFor={name}>
        {label || name}
      </Label>
      <Input id={name} name={name} type={type} defaultValue={defaultValue} {...restProps} />
    </div>
  );
};
