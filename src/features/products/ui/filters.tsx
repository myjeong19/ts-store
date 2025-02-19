import { Form, useLoaderData } from 'react-router';
import { Button } from '@/shared/shadcn-ui';
import { ButtonLink, FormInput } from '@/shared/ui';
import type { ProductResponseWithParams } from '../types';
import { FormSelect } from '@/shared/ui/form-select';

export const Filters = () => {
  const {
    meta,
    searchParams: { search, company, category, shipping, order, price },
  } = useLoaderData() as ProductResponseWithParams;

  return (
    <Form className="border rounded-md px-8 py-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  items-center">
      <FormInput label="Search Product" name="search" type="search" defaultValue={search} />

      <FormSelect
        label="Select category"
        name="category"
        options={meta.categories}
        defaultValue={category}
      />
      <FormSelect
        label="Select company"
        name="company"
        options={meta.companies}
        defaultValue={company}
      />
      <FormSelect label="Select order" name="order" options={['a-z', 'z-a']} defaultValue={order} />
      <Button type="submit" size="sm" className="self-end mb-2">
        Search
      </Button>
      <ButtonLink
        type="button"
        size="sm"
        variant="outline"
        className="self-end mb-2"
        to="/products"
      >
        reset
      </ButtonLink>
    </Form>
  );
};
