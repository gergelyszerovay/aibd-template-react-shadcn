import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import * as React from 'react';

const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>
>(({ ...props }, ref) => (
  <AspectRatioPrimitive.Root ref={ref} {...props} data-component="AspectRatio" />
));
AspectRatio.displayName = 'AspectRatio';

export { AspectRatio };
