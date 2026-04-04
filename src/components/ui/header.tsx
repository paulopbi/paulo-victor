export const Header = ({
  children,
  ...props
}: React.ComponentProps<"header">) => {
  return (
    <header className="mx-auto max-w-90 md:max-w-120" {...props}>
      {children}
    </header>
  );
};

export const HeaderTitle = ({
  children,
  ...props
}: React.ComponentProps<"h2">) => {
  return (
    <h2
      className="text-center text-2xl lg:text-3xl font-bold text-balance mb-1"
      {...props}
    >
      {children}
    </h2>
  );
};

export const HeaderDescription = ({
  children,
  ...props
}: React.ComponentProps<"p">) => {
  return (
    <p
      className="text-center text-sm md:text-base font-normal text-muted-foreground text-pretty"
      {...props}
    >
      {children}
    </p>
  );
};

export const HeaderSeparator = ({ ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className="mx-auto w-11 h-0.5 bg-foreground/10 mt-3 rounded-full"
      {...props}
    >
      <span className="sr-only">Separator</span>
    </div>
  );
};
