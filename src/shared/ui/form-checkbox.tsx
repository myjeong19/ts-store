import { Label, Checkbox } from '../shadcn-ui';

type FormCheckboxProps = {
  name: string;
  label?: string;
  defaultValue?: string;
};

export const FormCheckbox = ({ label, name, defaultValue }: FormCheckboxProps) => {
  const defaultChecked = defaultValue === 'on' ? true : false;

  return (
    <div className="mb-2 flex justify-between self-end">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
    </div>
  );
};
