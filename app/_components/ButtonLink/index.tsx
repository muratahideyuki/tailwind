type Props = {
  href: string;
  children: React.ReactNode;
};

export default function ButtonLink({ href, children }: Props) {
  return (
    <a
      href={href}
      className="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
    >
      {children}
    </a>
  );
}
