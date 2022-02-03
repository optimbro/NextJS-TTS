/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
  delegated?: React.ReactNode;
};

const ClientOnly: React.FC<Props> = ({ children, ...delegated }: Props) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return <div {...delegated}>{children}</div>;
};

export default ClientOnly;
