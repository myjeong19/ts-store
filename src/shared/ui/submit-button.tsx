import { useNavigation } from 'react-router';
import { Button } from '../shadcn-ui';
import { RotateCw } from 'lucide-react';

export const SubmitButton = ({ text, className }: { text: string; className?: string }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Button type="submit" className={className} disabled={isSubmitting}>
      {isSubmitting ? (
        <span className="flex">
          <RotateCw className="mr-2 h-4 w-4 animate-spin" />
        </span>
      ) : (
        text
      )}
    </Button>
  );
};
