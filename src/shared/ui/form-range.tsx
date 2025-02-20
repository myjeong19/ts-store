import { useState } from 'react';
import { Slider, Label } from '../shadcn-ui';

import { formatAsDollars } from '@/entities/product/lib';

type FormRangeProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  step: number;
  max: number;
};

export const FormRange = ({ label, name, defaultValue, step, max }: FormRangeProps) => {
  const defaultPrice = defaultValue ? Number(defaultValue) : 0;

  const [selectedValue, setSelectedValue] = useState(defaultPrice);

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize flex justify-between">
        {label || name}
        <span>{formatAsDollars(selectedValue)}</span>
      </Label>
      <Slider
        id={name}
        name={name}
        step={step}
        max={max}
        defaultValue={[selectedValue]}
        onValueChange={value => setSelectedValue(value[0])}
        className="mt-4"
      />
    </div>
  );
};
