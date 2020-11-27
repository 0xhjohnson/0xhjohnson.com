type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  return <div className="max-w-2xl mx-auto px-4 sm:px-6">{children}</div>;
}

export default Container;
