export default function SiteLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="flex min-h-screen justify-center items-center">
          {children}
      </div>
    );
  }