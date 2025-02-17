import { Separator } from '../shadcn-ui';

type SectionTitleProps = {
  text: string;
};

export const SectionTitle = ({ text }: SectionTitleProps) => {
  return (
    <div>
      <h2 className="text-3xl font-medium tracking-wider capitalize mb-8">{text}</h2>
      <Separator />
    </div>
  );
};
