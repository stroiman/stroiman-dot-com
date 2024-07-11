export type SVGProps = Omit<React.SVGProps<SVGElement>, "ref">;
export type SVGWithTitleProps = SVGProps & { title?: string };

export const SvgTitle = (props: { title?: string }) =>
  props.title && <title>{props.title}</title>;
