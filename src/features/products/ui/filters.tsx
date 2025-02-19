import { Form, useLoaderData } from 'react-router';
import { Input, Label, Button } from '@/shared/shadcn-ui';
import { ButtonLink } from '@/shared/ui';
import type { ProductResponseWithParams } from '../types';

export const Filters = () => {
  const {
    searchParams: { search },
  } = useLoaderData() as ProductResponseWithParams;

  return (
    <Form className="border rounded-md px-8 py-4 grid gap-4 md:grid-cols-3 sm:grid-cols-2 items-center">
      <div className="mb-2">
        <Label htmlFor="search">Search Product</Label>
        <Input id="search" name="search" type="text" defaultValue={search} />
      </div>
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
