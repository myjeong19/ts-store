import { Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../shadcn-ui';

type FormSelectProps = {
  label?: string;
  options: string[];
  defaultValue?: string;
} & React.ComponentProps<'select'>;

export const FormSelect = ({ label, name, options, defaultValue }: FormSelectProps) => {
  return (
    <div className="mb-2">
      <Label className="capitalize" htmlFor={name}>
        {label || name}
      </Label>
      <Select defaultValue={defaultValue || options[0]} name={name}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map(option => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
