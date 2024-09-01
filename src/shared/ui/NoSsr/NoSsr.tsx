import dynamic from 'next/dynamic';

interface NoSsrProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const Wrapper: React.FC<NoSsrProps> = ({ children, className, style }) => {
  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};

export const NoSsr = dynamic(() => Promise.resolve(Wrapper), {
  ssr: false
});
